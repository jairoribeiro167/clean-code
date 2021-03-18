function logError(message) {
  console.log(message);
}

function initApp() {
  const success = connectDatabase();

  if (!success) {
    logError('Could not connect to database!');
  }
}

function connectDatabase() {
  const didConnect = database.connect();
  return didConnect;
}

function ticketHasRequestType(ticket) {
  return ticket.requestType !== 'unknown';
}

function determineSupportAgent(ticket) {
  if (!ticketHasRequestType(ticket)) {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  return password && password >= 7;
}

function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    logError('Invalid input');
  }
  //...
}

function isValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}
