
class Text {
    constructor(text) {
      this.string = text;
    }
  
    toString() {
      return this.string;
    }
  }
  
  class Shout {
    constructor(text) {
      this.text = text;
    }

    toString(){        
        return this.text.toString().toUpperCase()
    }
  }
  
  console.log(new Text("Hello, I'm talking").toString());
  
  console.log(new Shout(new Text("Hello, I'm shouting!")).toString());

//------------------
//oppure

  function uppercaseText(text) {
    let originalToString = text.toString();

    text.toString = function () {
        return originalToString.toUpperCase()
    }
    return text;
  }

  console.log(uppercaseText(new Text("Hello, I'm screaming!!!")).toString());