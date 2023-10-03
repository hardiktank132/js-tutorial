// array in javascript
let a = [1, 2, 3, 4, "name", "me"];
a.push(0);
a.pop();
a.shift();
// console.log(a);
// console.log(b);

//slice in array

let n = [1, 2, 3, 4, 5];
let mi = n.slice(1, 3);
console.log("A:", n);
console.log(mi);

// splice in array
console.log("After slice:", n);
let m = n.splice(1, 3);
console.log("B", n);
console.log(m);
