


const numberdisp = document.getElementById('number')
const bombText = document.getElementById('boom')
const maxInput = document.getElementById('maxInput')
const gainInput = document.getElementById('gainInput')

var num = 0;
var maxNum = parseInt(maxInput.value);
var gain = parseInt(gainInput.value);




const onPlusClick = () => {
        num += gain;
        if(num > maxNum){
            num = 'sprunginn'
            bombText.textContent = 'Boom'
        }
        numberdisp.textContent = num;  
        console.log(gain)
}

const onMinusClick = () => {
    num -= gain;
    numberdisp.textContent = num;
    if(num < (maxNum * -1)){
        num = 'sprunginn'
        bombText.textContent = 'Boom'
    }
    numberdisp.textContent = num; 
}

const saveToLocalStorage = () => {
    localStorage.setItem('number', num)
    console.log('saved', num)
}
const getItemFromLocalStorage = () => {
    const savedNum = localStorage.getItem('number', num)
    numberdisp.textContent = savedNum
    console.log('saved number', savedNum)
}




