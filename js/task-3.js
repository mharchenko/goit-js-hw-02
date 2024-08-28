// --------Spam check----------//
function checkForSpam(message) {
  let spamWords = ['spam', 'sale'];
  let messageLowercase = message.toLowerCase();

  for (let word of spamWords) {
    if (messageLowercase.includes(word)) {
      return true;
    }
  }

  return false;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));

