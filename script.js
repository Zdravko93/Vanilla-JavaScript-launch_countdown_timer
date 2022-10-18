const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const allParameters = document.querySelectorAll('.number');

const countdown = () => {
    const currentDate = new Date().getTime();
    const countDate = new Date("October 22, 2022 21:00:00").getTime();
    const timeGap = countDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysNumber = Math.floor(timeGap / day);
    const hoursNumber = Math.floor((timeGap % day) / hour);
    const minutesNumber = Math.floor((timeGap % hour) / minute);
    const secondsNumber = Math.floor((timeGap % minute) / second);

    days.innerText = daysNumber;
    hours.innerText = hoursNumber;
    minutes.innerText = minutesNumber;
    seconds.innerText = secondsNumber;
    
    

    setTimeout(countdown, 1000);
};

    
//Invoke countdown function right after DOM has been loaded 
document.addEventListener("DOMContentLoaded", countdown);

