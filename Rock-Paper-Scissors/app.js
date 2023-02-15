let uScore = 0;
let cScore = 0;

const userScoreCon = document.getElementById("user-score");
const comScoreCon = document.getElementById("computer-score");

const userChoices = document.querySelectorAll('.choice');

const result  = document.querySelector('.result > p');

const rightEmoji = document.getElementById('right-emoji');
const leftEmoji = document.getElementById('left-emoji');

const leftShow = document.querySelector('.user-selected');
const rightShow = document.querySelector('.computer-selected');



const imgSrc = ['rock.png','paper.png','scissor.png'];

userChoices.forEach((ch) => {
    ch.addEventListener('click', () => {
        const choise = ch.dataset.name;
        move();
        removeBorder();
        setTimeout(()=> {
            stopMove();
            check(ch,choise);
        },2000)
    })
})


const computerChoices = () => {
    const choices = ['rock', 'paper','scissors'];
    const ranNum = Math.floor(Math.random()*choices.length)
    return choices[ranNum];
}

const check = (selected,ch) => {
    const compChoice = computerChoices();
    const userChoice = ch;

    switch(userChoice+compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice,compChoice,selected);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoice,compChoice,selected);
            break;
        default:
            draw(userChoice,compChoice,selected);
    }
}

const win = (userChoice,compChoice,selected) => {
    uScore++;
    userScoreCon.innerHTML = uScore;
    result.innerHTML = `${userChoice} beats ${compChoice}. You Win!`;

    selected.classList.add('green-glow');
    setTimeout( ()=> {
        selected.classList.remove('green-glow');
    },500)


    setImg(userChoice,compChoice);
    changeTXTColor();
    addBorder('winning-glow','losing-glow');
}

const lose = (userChoice,compChoice,selected) => {
    cScore++;
    comScoreCon.innerHTML = cScore;
    result.innerHTML = `${compChoice} beats ${userChoice}. You Lose!`;

    selected.classList.add('red-glow');
    setTimeout(() => {
        selected.classList.remove('red-glow');
    }, 500)

    setImg(userChoice, compChoice);
    changeTXTColor();
    addBorder('losing-glow','winning-glow');
}

const draw = (userChoice,compChoice,selected) => {
    result.innerHTML = `It's draw!`
    selected.classList.add('gray-glow');
    setTimeout(() => {
        selected.classList.remove('gray-glow');
    }, 1000)

    setImg(userChoice, compChoice);
    addBorder('draw-glow','draw-glow');
}

const move = () => {
    leftEmoji.src = './img/righthand.png';
    rightEmoji.src = './img/lefthand.png';
    leftShow.classList.add('move');
    rightShow.classList.add('move');
}

const stopMove = () => {
    leftShow.classList.remove('move');
    rightShow.classList.remove('move');
}

const setImg = (userChoice,compChoice) => {
    leftEmoji.src = `./img/${userChoice}.png`;
    rightEmoji.src = `./img/${compChoice}.png`;
}

const changeTXTColor = () => {
    if(uScore>cScore) {
        userScoreCon.style.color = 'green';
        comScoreCon.style.color = 'red';
    }else if(cScore>uScore) {
        userScoreCon.style.color = 'red';
        comScoreCon.style.color = 'green';
    }else {
        userScoreCon.style.color = 'white';
        comScoreCon.style.color = 'white';
    }
}

const addBorder = (winner,loser) => {
    leftShow.classList.add(winner);
    rightShow.classList.add(loser);
}

const removeBorder = () => {
    leftShow.classList.remove('winning-glow');
    leftShow.classList.remove('losing-glow');
    leftShow.classList.remove('draw-glow');

    rightShow.classList.remove('winning-glow');
    rightShow.classList.remove('losing-glow');
    rightShow.classList.remove('draw-glow');
}