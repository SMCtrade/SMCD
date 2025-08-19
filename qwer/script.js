function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('users')) || [];
  } catch {
    return [];
  }
}
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}
function register(username, password) {
  const users = getUsers();
  if (users.some(u => u.username === username)) return false;
  users.push({ username, password });
  saveUsers(users);
  return true;
}
function login(username, password) {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', username);
    if (username === 'admin') {
      location.href = 'admin.html';
    } else {
      location.href = 'cabinet.html';
    }
    return true;
  }
  return false;
}
function loginWithOAuth(email, provider) {
  const users = getUsers();
  let user = users.find(u => u.username === email);
  if (!user) {
    user = { username: email, password: '', provider };
    users.push(user);
    saveUsers(users);
  }
  localStorage.setItem('currentUser', email);
  if (email === 'admin') {
    location.href = 'admin.html';
  } else {
    location.href = 'cabinet.html';
  }
}
function requireAuth() {
  const u = localStorage.getItem('currentUser');
  if (!u) {
    location.href = 'login.html';
    return null;
  }
  return u;
}
function requireAdmin() {
  const u = requireAuth();
  if (u !== 'admin') {
    location.href = 'cabinet.html';
  }
}
function logout() {
  localStorage.removeItem('currentUser');
  location.href = 'index.html';
}
function renderAdminUsers() {
  const tbody = document.getElementById('userTable');
  const users = getUsers();
  tbody.innerHTML = '';
  users.forEach((u, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input data-idx="${idx}" data-field="username" value="${u.username}"></td>
      <td><input data-idx="${idx}" data-field="password" value="${u.password}"></td>
      <td>${u.provider || 'local'}</td>
      <td><button data-action="save" data-idx="${idx}">Save</button></td>`;
    tbody.appendChild(tr);
  });
  tbody.addEventListener('click', e => {
    if (e.target.dataset.action === 'save') {
      const idx = e.target.dataset.idx;
      const inputs = tbody.querySelectorAll(`input[data-idx="${idx}"]`);
      const users = getUsers();
      inputs.forEach(inp => {
        users[idx][inp.dataset.field] = inp.value;
      });
      saveUsers(users);
      alert('Saved');
    }
  });
}
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}
