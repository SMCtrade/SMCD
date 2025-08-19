function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(username, password) {
  const users = getUsers();
  if (users[username]) {
    return false;
  }
  users[username] = password;
  saveUsers(users);
  setLoggedInUser(username);
  return true;
}

function authenticate(username, password) {
  const users = getUsers();
  if (users[username] === password) {
    setLoggedInUser(username);
    return true;
  }
  return false;
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
