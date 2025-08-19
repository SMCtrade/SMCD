async function registerUser(username, email, password) {
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  if (res.ok) {
    setLoggedInUser(username);
    return true;
  }
  return false;
}

async function loginUser(username, password) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (res.ok) {
    setLoggedInUser(username);
    return true;
  }
  return false;
}

async function resetPassword(username, newPassword) {
  const res = await fetch('/api/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, newPassword })
  });
  return res.ok;
}

function setLoggedInUser(username) {
  localStorage.setItem('loggedInUser', username);
}

function getLoggedInUser() {
  return localStorage.getItem('loggedInUser');
}

function logout() {
  localStorage.removeItem('loggedInUser');
}
