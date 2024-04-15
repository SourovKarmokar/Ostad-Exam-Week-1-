class BankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Invalid deposit amount.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds or invalid withdrawal amount.');
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.balance}`);
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of BankAccount
const account1 = new BankAccount(1001, 'John Doe', 700);
const account2 = new BankAccount(1002, 'Jane Smith', 1200);

// Demonstrate functionality
account1.deposit(200);
account1.withdraw(100);
account1.getBalance();
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(300);
account2.getBalance();
account2.displayAccountInfo();
