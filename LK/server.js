const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

// Initialize table
const initSql = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT,
  password_hash TEXT NOT NULL
)`;
db.run(initSql);

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  db.get('SELECT id FROM users WHERE username = ?', [username], async (err, row) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (row) return res.status(400).json({ error: 'User exists' });
    try {
      const hash = await bcrypt.hash(password, 10);
      db.run('INSERT INTO users(username, email, password_hash) VALUES (?, ?, ?)', [username, email, hash], (err2) => {
        if (err2) return res.status(500).json({ error: 'DB error' });
        res.status(201).json({ success: true });
      });
    } catch {
      res.status(500).json({ error: 'Hashing error' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT password_hash FROM users WHERE username = ?', [username], async (err, row) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (!row) return res.status(401).json({ error: 'Invalid credentials' });
    try {
      const match = await bcrypt.compare(password, row.password_hash);
      if (!match) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ success: true });
    } catch {
      res.status(500).json({ error: 'Hashing error' });
    }
  });
});

app.post('/api/reset-password', async (req, res) => {
  const { username, newPassword } = req.body;
  try {
    const hash = await bcrypt.hash(newPassword, 10);
    db.run('UPDATE users SET password_hash = ? WHERE username = ?', [hash, username], function (err) {
      if (err) return res.status(500).json({ error: 'DB error' });
      if (this.changes === 0) return res.status(404).json({ error: 'User not found' });
      res.json({ success: true });
    });
  } catch {
    res.status(500).json({ error: 'Hashing error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
