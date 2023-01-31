let left = document.getElementById("left");
let right = document.getElementById("right");

let select_1 = document.getElementById("select_1");
let select_2 = document.getElementById("select_2");

let val1 = select_1.value;
let val2 = select_2.value;


select_1.addEventListener('change', function () {
    if (select_1.value == select_2.value) {
        select_2.value = val1;
        val1 = select_1.value;
        val2 = select_2.value;
    }
    leftInputFun();
})

select_2.addEventListener('change', function () {
    if (select_1.value == select_2.value) {
        select_1.value = val2;
        val1 = select_1.value;
        val2 = select_2.value;
    }
    leftInputFun();
})

left.addEventListener('input', leftInputFun)
right.addEventListener('input', rightInputFun)

function rightInputFun() {
    let input1 = parseFloat(right.value);
    let input2;
    if ((select_2.value == "Celcius") && (select_1.value == "Fahrenheit")) {
        input2 = (input1 * 9 / 5) + 32;
    }
    else if ((select_2.value == "Celcius") && (select_1.value == "Kelvin")) {
        input2 = input1 + 273.15;
    }
    else if ((select_2.value == "Fahrenheit") && (select_1.value == "Celcius")) {
        input2 = (input1 - 32) * 5 / 9;
    }
    else if ((select_2.value == "Fahrenheit") && (select_1.value == "Kelvin")) {
        input2 = (input1 - 32) * 5 / 9 + 273.15;
    }
    else if ((select_2.value == "Kelvin") && (select_1.value == "Celcius")) {
        input2 = input1 - 273.15;
    }
    else if ((select_2.value == "Kelvin") && (select_1.value == "Fahrenheit")) {
        input2 = (input1 - 273.15) * 9 / 5 + 32;
    }
    if (!Number.isInteger(input2)) {
        input2 = input2.toFixed(2);
    }
    left.value = input2;
}


function leftInputFun() {
    let input1 = parseFloat(left.value);
    let input2;
    if ((select_1.value == "Celcius") && (select_2.value == "Fahrenheit")) {
        input2 = (input1 * 9 / 5) + 32;
    }
    else if ((select_1.value == "Celcius") && (select_2.value == "Kelvin")) {
        input2 = input1 + 273.15;
    }
    else if ((select_1.value == "Fahrenheit") && (select_2.value == "Celcius")) {
        input2 = (input1 - 32) * 5 / 9;
    }
    else if ((select_1.value == "Fahrenheit") && (select_2.value == "Kelvin")) {
        input2 = (input1 - 32) * 5 / 9 + 273.15;
    }
    else if ((select_1.value == "Kelvin") && (select_2.value == "Celcius")) {
        input2 = input1 - 273.15;
    }
    else if ((select_1.value == "Kelvin") && (select_2.value == "Fahrenheit")) {
        input2 = (input1 - 273.15) * 9 / 5 + 32;
    }
    if (!Number.isInteger(input2)) {
        input2 = input2.toFixed(2);
    }
    right.value = input2;
}