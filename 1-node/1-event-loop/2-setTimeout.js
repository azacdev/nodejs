// started operating system process
console.log("first");

// setTimeout is asynchronous that why it logged third place, registered on the call back (gets off loaded)
setTimeout(() => {
    console.log("second");
}, 0);

console.log("third");

// completed and exited operating sytem process
