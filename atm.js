const account = {
  accountName: "Marcus Brederfält",
  balance: 100,

  getBalance: function () {
    return this.balance;
    atm();
  },
  getAccountName: function () {
    alert(`The name of the account is ${this.accountName}`);
    atm();
  },
  deposit: function () {
    let sum = parseFloat(prompt("How much do you want to deposit?"));

    if (sum <= 0 || isNaN(sum)) {
      account.accountError();
      this.deposit();
    } else {
      this.balance += sum;
      atm();
    }
  },

  withdrawal: function () {
    let withdrawalAmount = parseFloat(
      prompt("How much do you want to withdrawl?")
    );

    if (withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
      account.accountError();
      this.withdrawal();
    } else {
      this.balance -= withdrawalAmount;
      atm();
    }
  },

  // withdrawal() and deposit() call accountError() if an invalid input is made then the function returns an alert.
  // Easy and time saving to have one function to handle the errors.

  accountError: function () {
    alert("Invalid input");
  },

  exitAccount() {
    window.close();
  },
};

// Start the program when the page loads
atm();

// I choose Switch as the menu choice, I think Switch fits a menu selector more than an if/else statements.

// parseFloat is necessary to have because otherwise all the input to the prompts is read as strings and not as
// numbers.

function atm() {
  let choice = parseFloat(
    prompt(
      "Welcome to the ATM. 1. Get balance 2. Deposit 3. Withdrawal 4. Get name of the account 5. Exit"
    )
  );

  switch (choice) {
    case 1:
      alert(`Your account have ${account.getBalance()} kronor`);
      atm();
      break;

    case 2:
      account.deposit();
      break;

    case 3:
      account.withdrawal();
      break;

    case 4:
      account.getAccountName();
      break;

    case 5:
      account.exitAccount();
      break;

    default:
      prompt("Invalid choice, please try again");
  }
}
