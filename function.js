let Ddate = document.getElementById("Ddate")
let Dtime = document.getElementById("Dtime")
let lockScreen = document.getElementById("lockScreen")
let touch = document.getElementById("touch")
let camera = document.getElementById("camera")
let password = document.getElementById("password")
let pssWord = document.getElementById("pssWord")
let pincode = document.getElementById("pincode")
let notcorrect = document.getElementById("notcorrect")
let lockScreen1 = document.getElementById("lockScreen1")
let Home = document.getElementById("Home")
let cam = document.getElementById("cam")
let network = document.getElementById("network")
let icons = document.getElementById("icons")
let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")

document.getElementById("main").style.backgroundImage = "url('black.jpg')";

let pinCode = 2580
console.log(`Phone passcode is ${pinCode}`);
console.log(pinCode);
localStorage.setItem("dpin", pinCode)

let show = true

network.style.color = "black"
icons.style.color = "black"
icon1.style.color = "black"
icon2.style.color = "black"
date.style.display = "none"
touch.style.display = "none"
camera.style.display = "none"
Open.style.display = "none"
password.style.display = "none"
lockScreen.style.display = "block"
Home.style.display = "none"

touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`
camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>`
// camera.innerHTML = `<button><i class="fa-solid fa-camera"></i></button>`

// console.log(touch.innerHTML);
// console.log(camera.innerHTML);

function dDate() {
    setInterval(() => {
        let date = new Date

        // Ddate.innerHTML =`${date.getMonth()}, ${date.getDay()}`
        Ddate.innerHTML = `${date.toDateString()}`
    }, 1000);
}

dDate()

function dTime() {
    setInterval(() => {
        let date = new Date();
        Dtime.innerHTML = `${date.getHours()} : ${date.getMinutes()}`

        h = date.getHours()
        m = date.getMinutes()

        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m
        Dtime.innerHTML = `${h} : ${m} `
    }, 1000);
}

dTime()

function onn() {
    console.log(show);
    if (show == true) {
        document.getElementById("main").style.backgroundImage = "url('iphone.jpg')"
        show = false

        network.style.color = "white"
        icons.style.color = "white"
        icon1.style.color = "white"
        icon2.style.color = "white"
        date.style.display = "block"
        touch.style.display = "block"
        camera.style.display = "block"
        Open.style.display = "block"
        // cam.style.display = "block"
        lockScreen.style.display = "block"
        // password.style.display = "block"
    }
    else {
        document.getElementById("main").style.backgroundImage = "url('black.jpg')";
        show = true

        network.style.color = "black"
        icons.style.color = "black"
        icon1.style.color = "black"
        icon2.style.color = "black"
        date.style.display = "none"
        touch.style.display = "none"
        camera.style.display = "none"
        Open.style.display = "none"
        password.style.display = "none"
        Home.style.display = "none"
        // touch.innerHTML == "Emergency" ? touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>` : touch.innerHTML = "Emergency"
        // camera.innerHTML == "Cancel" ? camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>` : camera.innerHTML = "Cancel"
    }

}

function openphone() {
    password.style.display == "none" ? password.style.display = "block" : password.style.display = "none";
    lockScreen.style.display == "block" ? lockScreen.style.display = "none" : lockScreen.style.display = "block";
    // touch.innerHTML == "Emergency" ? touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>` : touch.innerHTML = "Emergency"

    touch.innerHTML == `<button><span class="material-symbols-outlined">flashlight_on</span></button>` ? touch.innerHTML = "Emergency" : touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`;
    camera.innerHTML == `<button><span class="material-symbols-outlined">photo_camera</span></button>` ? camera.innerHTML = "Cancel" : camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>`
}

// function close(event) {
//     console.log("yes");
//     console.log(event.target);
// }

function Homes() {
    Home.style.display = "block"
    password.style.display = "none"
    // cam.style.display = "none"
    touch.style.display = "none"
    camera.style.display = "none"
    Open.style.display = "none"
    document.getElementById("main").style.backgroundImage = "url('black.jpg')";

}

function pin(event) {
    let dpass = (event.target.value)
    console.log(dpass);
    pincode.value += dpass;

    if (pincode.value.length == 4) {

        if (pincode.value == localStorage.getItem("dpin")) {
            // notcorrect.innerHTML == "Enter Passcode" ? notcorrect.innerHTML = "iPhone Unlocked 😋😍" : notcorrect.innerHTML = "Enter Passcode";
            Homes()
        } else {
            notcorrect.innerHTML == "Enter Passcode" ? notcorrect.innerHTML = "Incorrect Passcode Try again! 😏🙄" : notcorrect.innerHTML = "Enter Passcode";
        }
        pincode.value = ""
    }
}

function openiphone() {
    console.log("next page");
}

function next() {
    console.log("Next app");
}

function prev() {
    console.log("Prev app");
}