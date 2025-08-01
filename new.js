/*```javascript
// This is a simple JavaScript file demonstrating basic functionality.
console.log("This is a test message.");


function timeout() {
    console.log("This is a delayed message.");
}

setTimeout(timeout, 20000);
console.log("This message appears after a delay.");
`


`class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

    perimeter() {
        return 2 * (this.length + this.width);
    }
}

const rect = new rectangle(5, 10);
const area = rect.area();
const perimeter = rect.perimeter();
console.log("Area:", area);
console.log("Perimeter:", perimeter);
`
*/

/* const now = new Date();
console.log("Current Date and Time:", now.toISOString());         
*/


/*
function callback (){
    console.log("This is a callback function.");
}

setTimeout(callback, 1000);

   */



function promiseCallback(resolve){
    setTimeout(resolve, 1000);
}

function main(){
    console.log("Starting main function.");
}

promiseCallback(main);
