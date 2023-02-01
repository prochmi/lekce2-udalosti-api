// tady je místo pro náš program

let font = document.querySelector(".font")

function ztucneni() {
    font.style.fontWeight = "600"
}

function navrat() {
    font.style.fontWeight = "300"
}

let barva = document.querySelector(".red") 

function zmena() {
    font.classList.add("red")
}

function vetsi() {
    font.style.fontSize =  "17px"
}

let audio = document.querySelector(".audio")

function play() {
    audio.play()
}

function pause() {
    audio.pause()
}

function reset() {
    audio.currentTime = 0
}

function volumeOne() {
    audio.volume = 0
}

function volumeTwo() {
    audio.volume = 0.5
}

function volumeThree() {
    audio.volume = 1
}