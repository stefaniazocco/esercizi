function calculate() {
  let totale= 0;

  let operazioni = { 
    add: function(num){
      totale+=num;
      return this;
    },
    multiply: function(num){
      totale*=num;
      return this;
    },
    sub: function(num){
      totale-=num;
      return this;
    },
    divide: function(num){
      totale/=num;
      return this;
    },
    printResult: function(){
      return totale;
    }
  }
  return operazioni;
}

const calculator = calculate(0);
console.log(calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult()); // Il risultato sarà: 7