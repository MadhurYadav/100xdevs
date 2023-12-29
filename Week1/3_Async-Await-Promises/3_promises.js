// ugly way
/*
const fs = require('fs');

// my own asynchrounous function
function asyncReadFile(cb){
    fs.readFile("Week1/3_Async-Await-Promises/a.txt", "utf-8", function(err,data){
        cb(data);
    });
}

// callback function to call
function onDone(data){
    console.log(data);
}

asyncReadFile(onDone)

*/

// cleaner way (promises)
// to avoid callback hell

const fs = require('fs');

// my own asynchrounous function
function funReadFile(){
    return new Promise(function(resolve){
        fs.readFile("Week1/3_Async-Await-Promises/a.txt", "utf-8", function(err,data){
            resolve(data);
        });
    })
}

// callback function to call
function doneOn(data){
    console.log(data);
}

funReadFile().then(doneOn);
