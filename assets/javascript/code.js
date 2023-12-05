document.write("<h1>Hello World from the external file!</h1>");

/* define the variables */
let x = 3;
let y = 6;
let z = 8;

/* calcuate A, B and C */
let A = x + y + z;
let B = 2*x + 3*z;
let C = x * (z-y);

console.log(A);
console.log(B);
console.log(C);

window.alert(A);
window.alert(B);

document.write("<h1>A = ", A, "</h1>");
document.write("<h1>B = ", B, "</h1>");
document.write("<h1>C = ", C, "</h1>");