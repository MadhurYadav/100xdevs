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

