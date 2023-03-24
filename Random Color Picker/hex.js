let hexcombo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let btn = document.querySelector(".btn");
let color = document.getElementById("color");

btn.addEventListener('click', function () {
    let hexcode = "#";
    for(let i=0; i<6; i++) {
        hexcode += hexcombo[randomCharGenerator()];
        console.log(hexcode);
    }
    console.log(hexcode);
    color.textContent = hexcode;
    document.body.style.backgroundColor = hexcode;
})

function randomCharGenerator(){
    return Math.floor(Math.random()*hexcombo.length);
}