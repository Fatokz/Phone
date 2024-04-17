// Retrieving DOM elements
let Ddate = document.getElementById("Ddate");
let Dtime = document.getElementById("Dtime");
let lockScreen = document.getElementById("lockScreen");
let touch = document.getElementById("touch");
let camera = document.getElementById("camera");
let password = document.getElementById("password");
let pssWord = document.getElementById("pssWord");
let pincode = document.getElementById("pincode");
let notcorrect = document.getElementById("notcorrect");
let lockScreen1 = document.getElementById("lockScreen1");
let Home = document.getElementById("Home");
let cam = document.getElementById("cam");
let network = document.getElementById("network");
let icons = document.getElementById("icons");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

// Setting background image of the main element
document.getElementById("main").style.backgroundImage = "url('black.jpg')";

// Initializing pin code
let pinCode = 2580;
console.log(`Phone passcode is ${pinCode}`);
localStorage.setItem("dpin", pinCode);

// Setting initial display styles and colors
network.style.color = "black";
icons.style.color = "black";
icon1.style.color = "black";
icon2.style.color = "black";
date.style.display = "none";
touch.style.display = "none";
camera.style.display = "none";
Open.style.display = "none";
password.style.display = "none";
lockScreen.style.display = "block";
Home.style.display = "none";

// Creating buttons for touch and camera elements
touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`;
camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>`;

// Defining functions

// Function to update the date continuously
function dDate() {
    setInterval(() => {
        let date = new Date();
        Ddate.innerHTML = `${date.toDateString()}`;
    }, 1000);
}

dDate();

// Function to update the time continuously
function dTime() {
    setInterval(() => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;

        Dtime.innerHTML = `${h} : ${m} `;
    }, 1000);
}

dTime();

show = true;

// Function to toggle phone screen
function onn() {
    if (show == true) {
        // Displaying phone screen
        document.getElementById("main").style.backgroundImage = "url('iphone.jpg')";
        show = false;

        // Updating styles and colors
        network.style.color = "white";
        icons.style.color = "white";
        icon1.style.color = "white";
        icon2.style.color = "white";
        date.style.display = "block";
        touch.style.display = "block";
        camera.style.display = "block";
        Open.style.display = "block";
        lockScreen.style.display = "block";

    } else {
        // Displaying lock screen
        document.getElementById("main").style.backgroundImage = "url('black.jpg')";
        show = true;

        // Updating styles and colors
        network.style.color = "black";
        icons.style.color = "black";
        icon1.style.color = "black";
        icon2.style.color = "black";
        date.style.display = "none";
        touch.style.display = "none";
        camera.style.display = "none";
        Open.style.display = "none";
        password.style.display = "none";
        Home.style.display = "none";

    }
}

function btn() {
    // Resetting touch and camera buttons
    touch.innerHTML == "Emergency" ? touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>` : touch.innerHTML = "Emergency";
    camera.innerHTML == "Cancel" ? camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>` : camera.innerHTML = "Cancel";
}



// Function to toggle between lock screen and password screen
function openphone() {
    password.style.display == "none" ? password.style.display = "block" : password.style.display = "none";
    lockScreen.style.display == "block" ? lockScreen.style.display = "none" : lockScreen.style.display = "block";

    touch.innerHTML == `<button><span class="material-symbols-outlined">flashlight_on</span></button>` ? touch.innerHTML = "Emergency" : touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`;
    camera.innerHTML == `<button><span class="material-symbols-outlined">photo_camera</span></button>` ? camera.innerHTML = `<div id = close> Cancel </div>` : camera.innerHTML = `<button><span class="material-symbols-outlined">photo_camera</span></button>`;
}

// Function to navigate to home screen
function Homes() {
    Home.style.display = "block";
    password.style.display = "none";
    touch.style.display = "none";
    camera.style.display = "none";
    Open.style.display = "none";
    document.getElementById("main").style.backgroundImage = "url('black.jpg')";
}

// Function to handle pin input
function pin(event) {
    let dpass = event.target.value;
    pincode.value += dpass;

    if (pincode.value.length == 4) {
        if (pincode.value == localStorage.getItem("dpin")) {
            Homes();
        } else {
            notcorrect.innerHTML == "Enter Passcode" ? notcorrect.innerHTML = "Incorrect Passcode Try again! 😏🙄" : notcorrect.innerHTML = "Enter Passcode";
        }
        pincode.value = "";
    }
}

// Function for further actions
function openiphone() {
    console.log("next page");
}

function next() {
    console.log("Next app");
}

function prev() {
    console.log("Prev app");
}
