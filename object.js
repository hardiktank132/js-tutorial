const v = Symbol("hardik");
const a = { name: "hardik", age: "1 year", [v]: "hardik" };
console.log(a);
console.log(a["v"]);
console.log(a[v]);
