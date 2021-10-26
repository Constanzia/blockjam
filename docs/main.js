// const cursor = document.getElementById("cursor");
// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top:" + (e.pageY + 4) + "px; left:" + (e.pageX + 4) + "px")
// })

const date = new Date;
let day = date.getDate();
let mon = date.getMonth();
let hrs = date.getHours();
let min = date.getMinutes();

const info = document.getElementById("info");
const infobtn = document.getElementById("infobtn");
const infocir = document.getElementById("cir1");
infobtn.onclick = function() {
    if (info.style.display !== "none") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
};
infocir.onclick = function() {
    if (info.style.display !== "block") {
        info.style.display = "block";
    }
    // } else {
    //     info.style.display = "none";
    // }
};

const credit = document.getElementById("credit");
const creditbtn = document.getElementById("creditbtn");
const credcir = document.getElementById("cir2");
creditbtn.onclick = function() {
    if (credit.style.display !== "block") {
        credit.style.display = "block";
    } else {
        credit.style.display = "none";
    }
};
credcir.onclick = function() {
    if (credit.style.display !== "block") {
        credit.style.display = "block";
    }
    // else {
    //     credit.style.display = "none";
    // }
};




var elementSelected;
var mouseX, mouseY;
var zIndex = 109;
document.querySelectorAll(".move").forEach(function(element) {
    // element.style.left = 400;
    element.addEventListener('mousedown', function() {
        elementSelected = element;
        // mouseX = event.clientX - parseInt(getComputedStyle(elementSelected).left);
        // mouseY = event.clientY - parseInt(getComputedStyle(elementSelected).top);
        // move this element to top layer
        elementSelected.style['z-index'] = zIndex++;
        // document.querySelector(".container").appendChild(elementSelected);
    })

});

document.addEventListener('mousemove', function(event) {
    if (elementSelected !== undefined) {
        elementSelected.style.left = event.clientX - 160 + 'px';
        elementSelected.style.top = event.clientY - 70 + 'px';
    }
});

document.addEventListener('mouseup', function() {
    // elementSelected.style['z-index'] = 109;
    elementSelected = undefined;
});
