

function pakeisk() {
    var el = document.getElementById('testas');
    el.style.opacity = "0.5";
    el.style.color = "red";
    el.style.backgroundColor = "black";
    el.style.width = "50%";
    el.style.textDecoration = "underline";
    el.style.transform = "rotate(45deg)";
    el.style.transform = "skewY(20deg)";
    el.style.fontSize = "30px";
var x1 = 0;


    var x = function () {
        while(x1 < 100) {
            x1+=1;

            el.fontSize += x + "px";
        }

    }

}
function pakeisk2() {
    setTimeout(pakeisk(), 2000);

}

function sviesa() {

    var img = document.getElementById('lempa');
    if (img.src.match("lempute.jpg")) {
        img.src = "lempute1.jpg";
    } else {
        img.src = "lempute.jpg";
    }

}
var state = false;
function sviesa1() {
    if(state) {
        document.getElementById('lempa').src = "lempute1.jpg";
    } else {
        document.getElementById('lempa').src = "lempute.jpg";
    }
    state = !state;
}