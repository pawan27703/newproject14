let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;  
let isRunning = false;
let lapTimes = [];

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

function formatTime() {
   
    const paddedMilliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
    const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const paddedHours = hours < 10 ? '0' + hours : hours;
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        lapBtn.disabled = false;

      
        timer = setInterval(function() {
            milliseconds += 10; 

    
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            timeDisplay.textContent = formatTime();
        }, 10);  
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = formatTime();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    lapList.innerHTML = ''; 
}

function recordLap() {
    const lapTime = formatTime();
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}
