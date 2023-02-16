const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow = document.querySelector('.seconds');
const toggle_button = document.querySelector('.toggle-button');
const toggle_container = document.querySelector('.toggle');
const on_off_text = document.querySelector('.on-off-text');
const sound = new Audio('./sound.mp3');
let pause;


function activeClock() {


    const time = new Date();


    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    seconds = (360 / 60) * seconds;
    secondsArrow.style.transform = `rotate(${seconds}deg)`;

    minutes = (360 / 60) * minutes;
    minutesArrow.style.transform = `rotate(${minutes}deg)`;

    hours = ((360 / 12) * hours) + ((360 / 12 / 60) * time.getMinutes());
    hoursArrow.style.transform = `rotate(${hours}deg)`;

}

setInterval(activeClock, 1000);


const playAudio = () => {
    pause = setInterval(() => {
        sound.load();
        sound.play();
    }, 1000)
}

toggle_container.addEventListener('click', () => {
    toggle_button.classList.toggle('not-active');

    if (toggle_button.classList.contains('not-active')) {
        on_off_text.innerHTML = "OFF";
        clearInterval(pause);
        sound.pause();
    } else {
        on_off_text.innerHTML = "ON";
        playAudio()
    }
})
playAudio();
