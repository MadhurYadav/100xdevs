
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

