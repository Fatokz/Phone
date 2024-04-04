document.getElementById("main").style.backgroundImage = "url('black.jpg')";
// main.style.backgroundImage = 

// let black = main.style.backgroundColor = "black"
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