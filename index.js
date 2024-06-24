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

//TIMER
let timer; // Variable to hold the timer interval
let timeInSeconds = 720; // 12 minutes in seconds
const countdownElement = document.getElementById('countdown');

function startTimer() {
  // Update the timer display every second
  timer = setInterval(() => {
    timeInSeconds--; // Decrease the time by 1 second
    countdownElement.textContent = formatTime(timeInSeconds); // Update the countdown display

    // If time reaches 0, stop the timer
    if (timeInSeconds <= 0) {
      clearInterval(timer);
      countdownElement.textContent = 'Time: 00:00';
      // You can add further actions here when the timer reaches 0
    }
  }, 1000); // Interval set to 1000ms (1 second)
}

function stopTimer() {
  clearInterval(timer); // Clear the interval to stop the timer
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}