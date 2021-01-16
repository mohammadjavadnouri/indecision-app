var nameVar = "Mohammadjavad";
var nameVar = "Ali";
console.log("nameVar:", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet:", nameLet);

const nameConst = "Frank";
console.log("nameConst:", nameConst);

//block scoping:

const fullName = "Jen Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log("firstName in the block:", firstName);
}

console.log("firtName out of the block:", firstName);
