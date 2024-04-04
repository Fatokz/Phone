document.getElementById("main").style.backgroundImage = "url('black.jpg')";
let show = true

function onn() {
    console.log(show);
    if (show == true) {
        document.getElementById("main").style.backgroundImage = "url('iphone.jpg')"
        show = false  
    }
    else {
        document.getElementById("main").style.backgroundImage =  "url('black.jpg')";
        show =  true
    }
}