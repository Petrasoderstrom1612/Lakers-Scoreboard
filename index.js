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

function annulateBoard1() {
  homeScore = 0
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

function annulateBoard2() {
  guestScore = 0
  guestScoreEl.innerHTML = guestScore
}

//TIMER
let timer;
let timeInSeconds = 720; // 12 minutes in seconds
const countdownElement = document.getElementById('countdown');

function startTimer() {
  // Update the timer display every second
  timer = setInterval(() => {
    timeInSeconds--; 
    countdownElement.textContent = formatTime(timeInSeconds); // Update the countdown display

    
    if (timeInSeconds <= 0) {
      clearInterval(timer);
      countdownElement.textContent = 'Time: 00:00';
      
    }
  }, 1000); // Interval set to 1000ms (1 second)
}

function pauseTimer() {
  clearInterval(timer); 
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function annulateTimer() {
  timeInSeconds = 720;
  clearInterval(timer); 
  countdownElement.textContent = '12:00';
}

