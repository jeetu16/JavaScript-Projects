let btn = document.querySelector(".btn");
let color = document.getElementById("color");

btn.addEventListener('click',function() {

    let first = randomNumber();
    let second = randomNumber();
    let third = randomNumber();
    console.log(first,second,third);
    let rgb = `rgb(${first}, ${second}, ${third})`
    document.body.style.backgroundColor = rgb ;
    color.textContent = rgb;
})

function randomNumber() {
    return String(Math.floor(Math.random()*256));
}
