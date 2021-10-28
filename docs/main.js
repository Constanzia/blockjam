// const cursor = document.getElementById("cursor");
// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top:" + (e.pageY + 4) + "px; left:" + (e.pageX + 4) + "px")
// })
function init() {

    const cursor = document.getElementById("cursor");
    document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "transform: translate(" + (e.clientX + 4) + "px, " + (e.clientY + 4) + "px);")
        })
        //client vs page vs screen
    setInterval(() => {
        const time = document.getElementById("time");
        const date = new Date;
        let day = date.getDate();
        let mon = date.getMonth();
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        if (mon === 9) { mon = "Oct." }
        if (hrs < 10) { hrs = "0" + hrs }
        if (min < 10) { min = "0" + min }
        if (sec < 10) { sec = "0" + sec }
        time.textContent = hrs + ":" + min + ":" + sec;
    })

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
    var zIndex = 998;
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
            // elementSelected.style['margin-left'] = -elementSelected.style.left + event.clientX;
            // elementSelected.style['margin-top'] = -elementSelected.style.top + event.clientY;
            elementSelected.style.left = event.clientX + 'px';
            elementSelected.style.top = event.clientY + 'px';

        }
    });

    document.addEventListener('mouseup', function() {
        // elementSelected.style['z-index'] = 109;
        elementSelected = undefined;
    });


    var vid = document.getElementById("bg");
    vid.addEventListener("timeupdate", function() {
        if (this.currentTime >= 19.5) {
            this.currentTime = 0.0;
        }
    });

    //player
    var songnumber = 0;


    const btnprev = document.getElementById("playerbtn1");
    const btnnext = document.getElementById("playerbtn4");
    const btnplay = document.getElementById("playerbtn2");
    const btnpause = document.getElementById("playerbtn3");

    const bom1 = document.getElementById("cir1");
    const bom2 = document.getElementById("cir2");
    const bom3 = document.getElementById("cir3");

    var song = document.getElementById("au1");
    const songn1 = document.getElementById("song1");
    const songn2 = document.getElementById("song2");
    const songn3 = document.getElementById("song3");

    const bar1 = document.getElementById("ab1");
    const bar2 = document.getElementById("ab2");
    const bar3 = document.getElementById("ab3");
    const bar4 = document.getElementById("ab4");
    const bar5 = document.getElementById("ab5");
    const bar6 = document.getElementById("ab6");
    const bar7 = document.getElementById("ab7");
    const bar8 = document.getElementById("ab8");
    const bar9 = document.getElementById("ab9");
    const bar10 = document.getElementById("ab10");
    const bar11 = document.getElementById("ab11");

    function playani() {
        bar1.style.animationPlayState = "running";
        bar2.style.animationPlayState = "running";
        bar3.style.animationPlayState = "running";
        bar4.style.animationPlayState = "running";
        bar5.style.animationPlayState = "running";
        bar6.style.animationPlayState = "running";
        bar7.style.animationPlayState = "running";
        bar8.style.animationPlayState = "running";
        bar9.style.animationPlayState = "running";
        bar10.style.animationPlayState = "running";
        bar11.style.animationPlayState = "running";
        bom2.style.animationPlayState = "running";
        bom3.style.animationPlayState = "running";
        bom1.style.animationPlayState = "running";
    }

    function pauseani() {
        bar1.style.animationPlayState = "paused";
        bar2.style.animationPlayState = "paused";
        bar3.style.animationPlayState = "paused";
        bar4.style.animationPlayState = "paused";
        bar5.style.animationPlayState = "paused";
        bar6.style.animationPlayState = "paused";
        bar7.style.animationPlayState = "paused";
        bar8.style.animationPlayState = "paused";
        bar9.style.animationPlayState = "paused";
        bar10.style.animationPlayState = "paused";
        bar11.style.animationPlayState = "paused";
        bom1.style.animationPlayState = "paused";
        bom2.style.animationPlayState = "paused";
        bom3.style.animationPlayState = "paused";
    }

    setInterval(() => {



            function songformatting() {
                if (songnumber == 1) {
                    song = document.getElementById("au1");
                    songn1.textContent = "・The Garden”California Here We Go” 2016・";
                    songn2.textContent = "・The Garden”California Here We Go” 2016・";
                    songn3.textContent = "・The Garden”California Here We Go” 2016・";
                    songn2.style.animationDuration = "10s";
                } else if (songnumber == 2) {
                    song = document.getElementById("au2");
                    songn1.textContent = "・PVRIS”Mirrors”2014・";
                    songn2.textContent = "・PVRIS”Mirrors”2014・";
                    songn3.textContent = "・PVRIS”Mirrors”2014・";
                    songn2.style.animationDuration = "10s";
                } else if (songnumber == 3) {
                    song = document.getElementById("au3");
                    songn1.textContent = "・RedHotChiliPepper”ScarTissue” 1999・";
                    songn2.textContent = "・RedHotChiliPepper”ScarTissue” 1999・";
                    songn3.textContent = "・RedHotChiliPepper”ScarTissue” 1999・";
                    songn2.style.animationDuration = "10s";
                } else if (songnumber == 4) {
                    song = document.getElementById("au4");
                    songn1.textContent = "・The Killers”Mr.BrightSide” 2004・";
                    songn2.textContent = "・The Killers”Mr.BrightSide” 2004・";
                    songn3.textContent = "・The Killers”Mr.BrightSide” 2004・";
                    songn2.style.animationDuration = "10s";
                } else if (songnumber == 5) {
                    song = document.getElementById("au5");
                    songn1.textContent = "・SuperNapkin”There'sNothingThatCannotBeatMe” 2020・";
                    songn2.textContent = "    ";
                    songn3.textContent = "     ";
                    songn2.style.animationDuration = "8s";
                } else if (songnumber == 6) {
                    song = document.getElementById("au6");
                    songn1.textContent = "・CASIOPEA”ShadowOfMidnight” 1993・";
                    songn2.textContent = "・CASIOPEA”ShadowOfMidnight” 1993・";
                    songn3.textContent = "・CASIOPEA”ShadowOfMidnight” 1993・";
                    songn2.style.animationDuration = "10s";
                } else {
                    songn1.textContent = "      press play button     ";
                    songn2.textContent = "      press play button     ";
                    songn3.textContent = "      press play button     ";
                    songn2.style.animationDuration = "10s";
                }
            };



            songformatting();
            // songname();
            // const song1 = document.getElementById("song1");
            btnprev.onclick = function() {
                song.pause();
                songnumber = songnumber - 1;
                if (songnumber < 1) { songnumber = 6 };

                pauseani();
            }

            btnnext.onclick = function() {
                song.pause();
                songnumber = songnumber + 1;
                if (songnumber > 6) { songnumber = 1 };
                pauseani();


            }



            btnplay.onclick = function() {
                if (songnumber == 0) {
                    songnumber = 1
                }
                song.play();
                playani();
                vid.play();


            }
            btnpause.onclick = function() {
                song.pause();
                pauseani();

                // song.currentTime = 0;
            }


        })
        // setInterval(() => { console.log(songnumber) }, 2000)

}

document.addEventListener('DOMContentLoaded', init);
