//definitions
localStorage.clear();

    //stats


let clicks;
let upgrades1;
let upgrades2;
        

if (localStorage.getItem("clicks") === null) {
    clicks = 0;
}
if (localStorage.getItem("upgrades1") === null) {
    upgrades1 = 0;
}
if (localStorage.getItem("upgrades2") === null) {
    upgrades2 = 0;
}
else {
    clicks = Number(localStorage.getItem("clicks"));
    upgrades1 = Number(localStorage.getItem("upgrades1"));
    upgrades2 = Number(localStorage.getItem("upgrades2"));    
}



    //button
const clickerjs = document.getElementById("clicker");

    //upgarde
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");

    //stat display
const cps = document.getElementById("cps");
const cpc = document.getElementById("cpc");
const counter = document.getElementById("counter");
counter.innerHTML = clicks;

//event listeners

clickerjs.addEventListener("click", clickerfn);
upgrade1.addEventListener("click", upgrade1fn);
upgrade2.addEventListener("click", upgrade2fn);


//eventlistener functions
function clickerfn() {
    clicks++;
    clicks += upgrades1;
    counter.innerHTML = clicks;
}

function upgrade1fn() {
    if (clicks >= 10) {
        clicks -= 10;
        upgrades1++;
        counter.innerHTML = clicks;
    } else {
        alert("Not enough clicks!");
    }
}

function upgrade2fn(){
    if (clicks >= 100) {
        clicks -= 100;
        upgrades2++;
        counter.innerHTML = clicks;
    } else {
        alert("Not enough clicks!");
    }
}

//funciton main
function Main() {
    let addmulti = upgrades2 * 1;
    clicks += addmulti;
    counter.innerHTML = clicks;
}

function savestats() {
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("upgrades1", upgrades1);
    localStorage.setItem("upgrades2", upgrades2);
}

function showstats() {
    let totalcpc = ( 1 + upgrades1);
    let totalcps = (upgrades2 * 1);
    cpc.innerHTML = "Clicks per click: " + totalcpc.toString();
    cps.innerHTML = "Clicks per second: " + totalcps.toString();
}

window.addEventListener("beforeunload", savestats);

setInterval(Main, 1000);
setInterval(showstats, 250);


