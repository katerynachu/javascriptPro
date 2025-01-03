class BankAccount {
    constructor (accountNumber,accountHolder,balance = 0 ){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amt){
        if( this.balance < 0){
            console.log(`Can't deposit negative amount`) 
        }else{
            this.balance += amt;
            console.log(`You deposit$ ${amt}.Your account balance is $ ${this.balance}`)

        }
    }
    withdraw(amt){
        if( this.balance < amt){
            console.log(`Not enough money.You ask for ${amt}.Your current balance is ${this.balance}`) 
        }else{
            this.balance -= amt;
            console.log(`You withdrew $ ${amt}.Your account balance is $ ${this.balance}`)

        }
    }
}

let customerAcc = new BankAccount("776544","Katya J");

customerAcc.deposit(1000)
customerAcc.withdraw(1200)
console.log(customerAcc)

