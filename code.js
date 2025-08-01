`const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf8");
console.log("File contents:", contents); `


`const fs = require("fs");

function print(err,data){
    console.log(data);
}

fs.readFile("a.txt", "utf8", print);
fs.readFile("b.txt", "utf8", print);

console.log("Done reading files.");



`

