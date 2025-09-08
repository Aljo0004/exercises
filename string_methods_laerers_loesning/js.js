console.log("");
console.log("///// 1 /////");
console.log("");

const fullName = "Aleksander Toftdahl Jørgensen";

const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" "));
console.log("firstName:", firstName + middleName + lastName);

console.log("");
console.log("///// 2 /////");
console.log("");

const theName = "hanSE";
const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
const threeCapitalised2 = theName.substring(2, 3).toUpperCase();
const threeCapitalised3 = theName.substring(3).toLowerCase();

console.log(threeCapitalised1 + threeCapitalised2 + threeCapitalised3);

console.log("");
console.log("///// 3 /////");
console.log("");

console.log(realCapitalised("vAldeMAR"));
function realCapitalised(theName) {
  return theName.substring(0, 1).toUpperCase() + theName.substring(1).toLowerCase();
}
