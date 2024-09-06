var i = 0;
// var A = 0;
var tag = document.getElementById("text2");
var html = document.getElementById("text2").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 300;


function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("text2").innerHTML = txt.slice(0, i + 1);
        i++;
        document.getElementById("text2").style.color = `rgb(0, ${15*i}, ${15*i})`
        
        console.log(`rgb(115, ${7*i}, ${17*i})`)
        setTimeout(typeWriter, speed);
    }else {
        document.getElementById("text2").style.animation = 'textEffect 3s infinite';
    }

   
}

typeWriter();
