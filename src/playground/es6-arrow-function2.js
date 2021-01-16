const multiplier = {
  numbers: [3, 4, 5, 6],
  multiplyBy: 2,
  printNumbersMultiplyBy() {
    const numnum = this.numbers.map((number) => {
      return (
        number +
        " multiplyby " +
        this.multiplyBy +
        "= " +
        number * this.multiplyBy
      );
    });
    return numnum;
    /*this.numbers.forEach((number) => {
      console.log(
        number,
        "multiply by",
        this.multiplyBy,
        " = ",
        number * this.multiplyBy
      );
    });*/
  },
};

console.log(multiplier.printNumbersMultiplyBy());
