function square(x) {
  return x * x;
}
console.log("normal function calling with 3: ", square(3));

const squareArrow = (x) => x * x;
console.log("arrow function calling with 3: ", squareArrow(3));

const getFirstName = (y) => y.split(" ")[0];
console.log(
  "get first name using a name:",
  getFirstName("Mohammadjavad Nouri")
);
