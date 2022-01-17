// attempt at creating a timer, trying Cookie.maxAge functionality of express sessions instead

// var warningTimeout = 8000;
// var timeoutNow = 9000;
// var warningTimerID,timeoutTimerID;

// function startTimer() {
//     warningTimerID = window.setTimeout(warningInactive, warningTimeout);
// }

// function warningInactive() {
//     window.clearTimeout(warningTimerID);
//     timeoutTimerID = window.setTimeout(IdleTimeout, timeoutNow);
//     console.log("you are registered as inactive, you will be logged out shortly")
// }

// function resetTimer() {
//     window.clearTimeout(timeoutTimerID);
//     window.clearTimeout(warningTimerID);
//     startTimer();
// }

// // logs out the user
// function IdleTimeout() {
//     req.session.destroy(() => {
//         res.json({message: "You have been logged out due to inactivity"})
//     })
// }

// function setupTimers () {
//     document.addEventListener("mousemove", resetTimer, false);
//     document.addEventListener("mousedown", resetTimer, false);
//     document.addEventListener("keypress", resetTimer, false);
//     document.addEventListener("touchmove", resetTimer, false);
//     document.addEventListener("onscroll", resetTimer, false);
//     startTimer();
// }


// $(document).ready(function(){
//     setupTimers();
// });