let displayLength;
let percent;
const display = document.querySelector('.display');
const negative = document.querySelector('.negative');
negative.addEventListener('click', () =>{
    displayLength = display.innerText.length;
    if (displayLength < 9){
        display.innerText = "-" + display.innerText;
        display.innerText = parseInt(display.innerText);
    }
},{once : true});
const zero = document.querySelectorAll('#num, #num1');
zero.forEach(item => { 
    item.addEventListener('click', event => {
        displayLength = display.innerText.length;
        if (displayLength < 9){
            display.innerText += item.innerText;
            display.innerText = parseInt(display.innerText);
        }

    });
});

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', event => {
    if (display.innerText.length < 9) {
        percent = parseFloat(display.innerText);
        display.innerText= percent/ 100;
        if (displayLength > 9){
             display.innerText = parseFloat(display.innerText);
        }
}
}
);

const ac = document.querySelector('.clear');
ac.addEventListener('click', event => {
    display.innerText = parseInt('0');
});