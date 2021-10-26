const date = new Date;
let day = date.getDate();
let mon = date.getMonth();
let hrs = date.getHours();
let min = date.getMinutes();

const info = document.getElementById("info");
const infobtn = document.getElementById("infobtn");
infobtn.onclick = function() {
    if (info.style.display !== "none") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
};

const credit = document.getElementById("credit");
const creditbtn = document.getElementById("creditbtn");
creditbtn.onclick = function() {
    if (credit.style.display !== "none") {
        credit.style.display = "none";
    } else {
        credit.style.display = "block";
    }
};