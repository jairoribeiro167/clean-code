function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  return password && password.trim() !== '';
}

function logError(message) {
  console.log(message);
}

function createUser(email, password) {
  if (!inputIsValid(email, password)) {
    logError('Invalid input');
    return;
  }

  saveUser({ email, password });
}

function saveUser(user) {
  if (user) {
    database.insert(user);
  }
}

const user = createUser('user@mail.com', '123456');
saveUser(user);
