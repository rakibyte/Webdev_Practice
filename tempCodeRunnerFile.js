console.log("This is a test message.");

function timeout() {
    console.log("This is a delayed message.");
}

setTimeout(timeout, 2000);
console.log("This message appears after a delay.");
