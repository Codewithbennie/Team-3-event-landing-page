// Set countdown target date
const countdownDate = new Date("April 1, 2026 00:00:00").getTime();

// Select elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mintues"); // same spelling as HTML
const secondsEl = document.getElementById("seconds");

// Add leading zero (01,02,03)
function format(time) {
    return time < 10 ? "0" + time : time;
}

// Run countdown every second
const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    // Display values
    daysEl.textContent = format(days);
    hoursEl.textContent = format(hours);
    minutesEl.textContent = format(minutes);
    secondsEl.textContent = format(seconds);

    // Stop when finished
    if (distance < 0) {
        clearInterval(timer);

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
    }

}, 1000);