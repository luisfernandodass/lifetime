/*
const button = document.getElementById("research");

button.addEventListener("click", function(){

    const getInput = document.getElementById("getInput");

    const value = getInput.value;

    var today = new Date();
    var dataStart = new Date(value);

    var difference =  today.getTime() - dataStart.getTime();
    difference = (difference / 86400000);

    var elMsg = document.getElementById("box-quantity-days");
    elMsg.textContent = Math.floor(difference) + ' dias';
    
});
*/
const button = document.getElementById("research");

function fat(button){
    const getInput = document.getElementById("getInput");

    const value = getInput.value;

    var today = new Date();
    var dataStart = new Date(value);

    var difference =  today.getTime() - dataStart.getTime();
    difference = (difference / 86400000);

    var elMsg = document.getElementById("box-quantity-days");
    return elMsg.textContent = Math.floor(difference) + ' dias';
}