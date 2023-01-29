let flag, countStr, secStr, minStr, hrStr;
let lapFlag, lCountStr, lSecStr, lMinStr, lHrStr;

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let lHr = 0;
let lMin = 0;
let lSec = 0;
let lCount = 0;

let btnCls = document.getElementsByClassName("btn");

let lap_time_container = document.querySelector(".lap-time-container")
let lap_tb_heading_container = document.querySelector(".lap-tb-heading-container");
let lap_txt_container = document.querySelector(".lap-txt-container");

let hr_line = document.querySelector("hr");

let lt = document.getElementById("table-content");


let hrTxt = document.getElementById("hr");
let minTxt = document.getElementById("min");
let secTxt = document.getElementById("sec");
let countTxt = document.getElementById("count");

let str_btn = document.getElementById("start");
let stp_btn = document.getElementById("stop");
let res_btn = document.getElementById("resume");
let rst_btn = document.getElementById("reset");
let lap_btn = document.getElementById("lap");

let l_Hr = document.getElementById("lHr");
let l_Min = document.getElementById("lMin");
let l_Sec = document.getElementById("lSec");
let l_Count = document.getElementById("lCount");

str_btn.style.display = "block";

stopWatch();

function stopWatch() {

    if (flag == true) {
        count++;

        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }

        countStr = count;
        secStr = sec;
        minStr = min;
        hrStr = hr;

        if (count < 10) {
            countStr = "0" + countStr;
        }
        if (sec < 10) {
            secStr = "0" + secStr;
        }
        if (min < 10) {
            minStr = "0" + minStr;
        }
        if (hr < 10) {
            hrStr = "0" + hrStr;
        }

        countTxt.innerHTML = countStr;
        secTxt.innerHTML = secStr;
        minTxt.innerHTML = minStr;
        hrTxt.innerHTML = hrStr;
    }
    setTimeout(stopWatch, 5);
}

str_btn.addEventListener('click', strFun);
stp_btn.addEventListener('click', stpFun);
res_btn.addEventListener('click', resFun);
rst_btn.addEventListener('click', rstFun);
lap_btn.addEventListener('click', lapFun);

let i = 1

function lapFun() {

    if (i == 1) {
        lap_time_container.style.display = "block";
    }
    
    hr_line.style.display = "block";
    lap_tb_heading_container.style.display = 'block';
    lap_txt_container.style.display = 'block';

    let row = lt.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    row.classList.add('tr-data');

    cell1.innerHTML = i + ".";
    if (i == 1) {
        cell2.innerHTML = `${hrStr}.${minStr}.${secStr}.${countStr}`;
    } else {
        cell2.innerHTML = `${lHrStr}.${lMinStr}.${lSecStr}.${lCountStr}`;
    }
    cell3.innerHTML = `${hrStr}.${minStr}.${secStr}.${countStr} `;
    i++;


    lapWatchReset();
    // lCount = 0;
    lapFlag = true;
}

lapWatch();

function lapWatch() {
    
    if (lapFlag == true) {
        lCount++;

        if (lCount == 100) {
            lSec++;
            lCount = 0;
        }
        if (lSec == 60) {
            lMin++;
            lSec = 0;
        }
        if (lMin == 60) {
            lHr++;
            lMin = 0;
        }

        lCountStr = lCount;
        lSecStr = lSec;
        lMinStr = lMin;
        lHrStr = lHr;

        if (lCount < 10) {
            lCountStr = "0" + lCountStr;
        }
        if (lSec < 10) {
            lSecStr = "0" + lSecStr;
        }
        if (lMin < 10) {
            lMinStr = "0" + lMinStr;
        }
        if (lHr < 10) {
            lHrStr = "0" + lHrStr;
        }

        l_Count.innerHTML = lCountStr;
        l_Sec.innerHTML = lSecStr;
        l_Min.innerHTML = lMinStr;
        l_Hr.innerHTML = lHrStr;
    }
    setTimeout(lapWatch, 5);
}



function lapWatchReset() {

    lapFlag = false;

    lHr = 0;
    lMin = 0;
    lSec = 0;
    lCount = 0;

    l_Count.innerHTML = "00";
    l_Sec.innerHTML = "00";
    l_Min.innerHTML = "00";
    l_Hr.innerHTML = "00";
}

function strFun() {
    flag = true;
    lapFlag = true;

    showBtn([lap_btn, stp_btn]);
}

function stpFun() {
    flag = false;
    lapFlag = false

    showBtn([rst_btn, res_btn]);
}

function resFun() {
    flag = true;
    lapFlag = true;


    showBtn([lap_btn, stp_btn]);
}

function rstFun() {

    flag = false;
    hrTxt.innerHTML = "00";
    minTxt.innerHTML = "00";
    secTxt.innerHTML = "00";
    countTxt.innerHTML = "00";
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    i = 1;

    lt.innerHTML = ''
    lap_tb_heading_container.style.display = 'none';
    lap_txt_container.style.display = 'none';
    lap_time_container.style.display = 'none';
    hr_line.style.display = 'none';

    lapWatchReset()
    showBtn([str_btn]);
}

function showBtn(sBtn) {
    for (const temp of btnCls) {
        temp.style.display = "none";
    }
    for (const temp of sBtn) {
        temp.style.display = "inline-block";
    }
}