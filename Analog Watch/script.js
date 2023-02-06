const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow = document.querySelector('.seconds');

function activeClock() {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    seconds = (360 / 60) * seconds;
    secondsArrow.style.transform = `rotate(${seconds}deg)`;
    
    minutes = (360 / 60) * minutes;
    minutesArrow.style.transform = `rotate(${minutes}deg)`;

    hours = ((360 / 12) * hours) + ((360/12/60) * time.getMinutes()) ;
    hoursArrow.style.transform = `rotate(${hours}deg)`;
}

setInterval(activeClock, 1000);