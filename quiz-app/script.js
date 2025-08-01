let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".person");


const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.", 
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts   " ,
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },  
    {quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },  
    {quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },          


];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
});     




