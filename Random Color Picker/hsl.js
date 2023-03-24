let btn = document.querySelector(".btn");
let color = document.getElementById("color");

btn.addEventListener('click', function () {

    let first = randomNumber(360);
    let second = randomNumber(101);
    let third = randomNumber(101);
    console.log(first, second, third);
    let hsl = `hsl(${first}, ${second}%, ${third}%)`
    document.body.style.backgroundColor = hsl;
    color.textContent = hsl;
})

function randomNumber(num) {
    return String(Math.floor(Math.random() * num));
}
