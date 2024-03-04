
// Normal Function
function findSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    // console.log(findSum(100));
}

// findSumTill100();


// Async Function

function findSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello World!");

// In async, first Hello World print then 4950 because we use set timeout


// Sync Function 

// Lets perform this wait method with sync

function findSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

// busy waiting
function syncSleep(){
    let a =1;
    for(let i=0; i<100000000; i++){
        a++;
    }
}

// findSumTill100()
// syncSleep();
// console.log('Hello World!');

// In sync fun, 4950 print first then Hello World print after 1 sec
// Like a single thread

const fs = require("fs");
// filesystem module

fs.readFile("Week1/3_Async-Await-Promises/a.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("Hi, there!");

// Hi there run first then a.txt file 
// As fs.readfile is async fun so it delicate task

let a = 0;
// takes very long, longer than the file read
for(let i=0; i<1000000000; i++){
    a++;
}

console.log("hi there 2");

// Now firtst Hi, there print
// than hi there 2
// and last Hi, from a.txt print

// so when fs.readFile is async
// so thread moves to Hi, there! and after it complete it move to hi there 2
// when thread becomes idle then it moves back to fs.readFile

