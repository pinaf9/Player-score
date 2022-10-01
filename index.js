let homeScore = document.getElementById("scoreBord-h")
let homeCount = 0

let guestScore = document.getElementById("scoreBord-g")
let guestCount = 0

let reset = document.getElementById("btn-reset")

function zero(){
    homeCount = 0
    homeScore.innerHTML = homeCount;
    guestCount = 0
    guestScore.innerHTML = guestCount;
}

// home score
function home1(){
    homeCount += 1
    homeScore.innerHTML = homeCount;
}

function home2(){
    homeCount += 2
    homeScore.innerHTML = homeCount;
}

function home3(){
    homeCount += 3
    homeScore.innerHTML = homeCount;
}

// guest score
function guest1(){
    guestCount += 1
    guestScore.innerHTML = guestCount;
}

function guest2(){
    guestCount += 2
    guestScore.innerHTML = guestCount;
}

function guest3(){
    guestCount += 3
    guestScore.innerHTML = guestCount;
}

