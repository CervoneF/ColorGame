let cuadrados = document.querySelectorAll(".cuadrado");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let levelbtn = document.querySelectorAll(".mode");
let colors = [];
let random;
let num = 6;
let pickedColor;



iniciar();

function iniciar() {
    setearCuadrados();
    setearBtnLevel();
    reset();
}


function setearCuadrados() {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.background = colors[i];
        cuadrados[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.innerText = "Correct!";
                h1.style.background = pickedColor;
                changeColors();
                resetBtn.innerHTML = "Play again?";
            } else {
                cuadrados[i].style.background = "#232323";
                messageDisplay.innerText = "Try again";
            }
        })
    }
}


function changeColors() {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.background = pickedColor;
    }
}



function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    for (let i = 0; i < num; i++) {
        colors[i] = randomColor();
    }
    return colors;
}


function pickColor() {
    random = Math.floor(Math.random() * colors.length);
    return random;
}

function reset() {
    colors = [];
    generateRandomColors(num);
    setearCuadrados();
    pickColor();
    pickedColor = colors[random];
    colorDisplay.innerText = pickedColor;
    resetBtn.innerHTML = "New Colors";
    messageDisplay.innerHTML = " ";
    h1.style.background = "#46b491";
    for (i = 3; i < 6; i++) {
        if (num == 3) {
            cuadrados[i].style.display = "none";
        } else {
            cuadrados[i].style.display = "block";
        }
    }
}


resetBtn.addEventListener("click", function () {
    reset();
})

function setearBtnLevel() {
    for (let i = 0; i < levelbtn.length; i++) {
        levelbtn[i].addEventListener("click", function () {
            levelbtn[0].classList.remove("selected")
            levelbtn[1].classList.remove("selected")
            this.classList.add("selected")
            num = (this.textContent === "Easy") ? 3 : 6
            reset()
        })
    }
}
















