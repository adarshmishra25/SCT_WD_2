# SCT_WD_2
# Stopwatch

A simple stopwatch built using HTML, CSS, and vanilla JavaScript.  
It supports play/pause toggling, milliseconds, and reset functionality.

## Features
- Play / Pause with a single button
- Displays hours, minutes, seconds, and milliseconds
- Reset to 00:00:00.00
- Beginner-friendly and clean logic

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6)

## Project Structure
index.html  
style.css  
script.js  

## How It Works
- Uses setInterval with a 10ms interval for millisecond updates
- Time is tracked using counters for milliseconds, seconds, minutes, and hours
- Updates DOM elements without overwriting child nodes
- Prevents multiple timers from running at the same time

## How to Use
1. Open index.html in a browser
2. Click Play to start the stopwatch
3. Click Pause to stop it
4. Click Reset to clear the time

## Notes
- This project is for learning and practice purposes
- Uses setInterval, which may drift slightly over long durations
- Suitable for beginner projects and college submissions
