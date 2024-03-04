let firstName = "Madhur";
let age = 18;
let isMarried = true;

// if(isMarried){
//     console.log(firstName + " is married");
// } else{
//     console.log(firstName + " is not married");
// }

// loop
let answer = 0;
for(let i=0; i<=10; i++){
    (answer = answer+i);
}
// console.log(answer); //sum

// array

const personArray = ["raman", "shivam", "raghav"];

// console.log(personArray[0]);

const ages = [21,22,23,24,25];

// for(let i = 0; i<ages.length; i++){
//     if(ages[i]%2==0) console.log(ages[i]);
// }

// objects
const user1 ={
    firstName:"jane",
    gender:"male"
}

// console.log(user1["gender"]);

// arrays of obj
const emp = [{
    firstName: "jane",
    gender: "male"
},{
    firstName:"harry",
    gender:"male"
},{
    firstName:"daisy",
    gender:"female"
}]

// for(let i=0; i<emp.length; i++){
//     if(emp[i]["gender"]=="male"){
//         console.log(emp[i]["firstName"]);
//     }
// }

// function

function findSum(a,b){
    return a + b;
}

const value = findSum(1,2)
// console.log(value);

// ** 
// if we run this, then this thread run on one core
// will cpu usage be 100% at any time?
// ans - yes
// let sum=0;
// for(let i=0; i<1000000000000; i++){
//     sum = sum + i;
// }

// console.log(sum);

// callback function

function newSum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result)
}

// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data){
//     // console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// using callback fun
// passing fun as argument
// newSum(1,2, displayResult)

// setTimeout

function greet(){
    console.log("hello world");
}

// console.log(greet());
// setTimeout(greet,1*1000) // fun return after 1 sec

setInterval(greet, 1*1000) // call after particular interval
