class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      try{
        throw new Error('The amount provided cannot be negative'); 
      } catch (error){
        console.log("Error message:", error.message)
      }
    }
    else{
      this.#amount += amount;
    }
    
  }

  withdraw(amount) {
    if (amount < 0) {
      try{
        throw new Error('The amount provided cannot be negative');
      } catch (error){
        console.log("Error message:", error.message)
      }
    }

    else if (this.#amount < amount) {
      try{
        throw new Error('You cannot withdraw more than account balance');
      } catch (error){
        console.log("Error message:", error.message)
      }
      
    }
    else{
      this.#amount -= amount;
    }
    
  }

  

  view() {
    console.log(this.#amount);
  }
}


// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();