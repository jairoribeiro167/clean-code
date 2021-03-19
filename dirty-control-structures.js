main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function logError(message, item) {
  console.log(message);

  if (item) {
    console.log(item);
  }
}

function log(message) {
  console.log(message);
}

function processTransaction(transaction) {
  if (!isOpen(transaction)) {
    logError('Invalid transaction type!');
    return;
  }

  if (isPayment(transaction)) {
    processPayment(transaction);
  } else if (isRefund(transaction)) {
    processRefund(transaction);
  } else {
    logError('Invalid transaction type!', transaction);
  }
}

function isOpen(transaction) {
  return transaction.status === 'OPEN';
}

function isPayment(transaction) {
  return transaction.status === 'PAYMENT';
}

function isRefund(transaction) {
  return transaction.status === 'REFUND';
}

function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    logError('No transactions provided!');
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processPayment(paymentTransaction) {
  if (paymentTransaction.method === 'CREDIT_CARD') {
    processCreditCardPayment(paymentTransaction);
  } else if (paymentTransaction.method === 'PAYPAL') {
    processPayPalPayment(paymentTransaction);
  } else if (paymentTransaction.method === 'PLAN') {
    processPlanPayment(paymentTransaction);
  }
}

function processRefund(refundTransaction) {
  if (refundTransaction.method === 'CREDIT_CARD') {
    processCreditCardRefund(refundTransaction);
  } else if (refundTransaction.method === 'PAYPAL') {
    processPayPalRefund(refundTransaction);
  } else if (refundTransaction.method === 'PLAN') {
    processPlanRefund(refundTransaction);
  }
}

function processCreditCardPayment(transaction) {
  log('Processing credit card payment for amount: ' + transaction.amount);
}

function processCreditCardRefund(transaction) {
  log('Processing credit card refund for amount: ' + transaction.amount);
}

function processPayPalPayment(transaction) {
  log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  log('Processing plan refund for amount: ' + transaction.amount);
}
