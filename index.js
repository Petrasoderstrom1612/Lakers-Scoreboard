let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el") 

let homeScore = 0
let guestScore = 0

//LAKERS' BOARD
function add1pointToLakers() {
    homeScore ++
    homeScoreEl.innerHTML = homeScore
}

function add2pointToLakers() {
    homeScore += 2
    homeScoreEl.innerHTML = homeScore
}

function add3pointToLakers() {
    homeScore += 3
    homeScoreEl.innerHTML = homeScore
}

//GUEST BOARD
function add1pointToGuest() {
    guestScore ++
    guestScoreEl.innerHTML = guestScore
}

function add2pointToGuest() {
    guestScore += 2
    guestScoreEl.innerHTML = guestScore
}

function add3pointToGuest() {
    guestScore += 3
    guestScoreEl.innerHTML = guestScore
}