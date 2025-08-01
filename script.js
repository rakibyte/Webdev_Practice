let ctr = 0;
function callback(){
    const el = document.querySelectorAll("h3")[0];
    el.innerHTML = ctr;
    ctr++;
}

setInterval(callback, 1000);


