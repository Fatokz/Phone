document.getElementById("main").style.backgroundImage = "url('black.jpg')";
let show = true
date.style.display = "none"
touch.style.display = "none"
touch1.style.display = "none"
Open.style.display = "none"


function onn() {
    console.log(show);
    if (show == true) {
        document.getElementById("main").style.backgroundImage = "url('iphone.jpg')"
        show = false
        date.style.display = "block"
        touch.style.display = "block"
        touch1.style.display = "block"
        Open.style.display = "block"
    }
    else {
        document.getElementById("main").style.backgroundImage = "url('black.jpg')";
        show = true
        date.style.display = "none"
        touch.style.display = "none"
        touch1.style.display = "none"
        Open.style.display = "none"
    }
}