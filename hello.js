let name ='DIVYA'; //string literal
console.log(name);
const interestRate = 0.3;
// interestRate = 1; we cannot declare intrestRate as it is a constant
// let age = 17; // number literal
let isApproved = false; // boolean literal
let firstNmae = undefined;
let lastName = null;
const person = {
    name: 'something',
    age:19
}
person.name = 'baby'
console . log (person.name)
let selectedcolour = ['red','blue'];
console.log(selectedcolour);
function greet(name){
    console.log ('hello'+ name);
}
greet('divya');
function square(number){
    return number* number;
}
let number = square(2);
console.log(number);

var age = 34
if (age > 8){
    console.log('you are not a kid');
}
else {
    console.log('you are a kid' );
}
// if - else ladder
if(age>32){
    console.log('you are not a kid');
}
else if(age > 26){
    console.log('you are not a teen');
}
else{
    console.log('you are a kid');
}
console.log('end of ladder');