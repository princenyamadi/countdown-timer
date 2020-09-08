const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondEl = document.getElementById('seconds');



const newYears = '1 Jan 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    // calculations
    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days  = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
    const sec = Math.floor(totalSeconds) % 60;
   
    // print out results
    console.log(newYearsDate - currentDate);
    console.log(days+" days");
    console.log(hours+" hours");
    console.log(minutes+" minutes");
    console.log(sec + " seconds");


    // print to html
    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = minutes
    secondEl.innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}



setInterval(countdown,1000);

// initial call
// countdown();