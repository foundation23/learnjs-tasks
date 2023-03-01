function Calculator() {

    this.read = function() {
      this.a = +prompt('введите a', 0);
      this.b = +prompt('введите b', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  