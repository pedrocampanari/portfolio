var i = 0;
// var A = 0;
var tag = document.getElementById("text2");
var html = document.getElementById("text2").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 400;


function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("text2").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
