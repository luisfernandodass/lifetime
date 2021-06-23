let inputDay, inputMonth, inputYear;
let currentDate, inputBirthDate, difference, result, printBirthDate, printCurrentDate, trait, birthDataTitle;

function lifeTime() {
    inputDay = document.getElementById("day").value;
    inputMonth = document.getElementById("month").value;
    inputYear = document.getElementById("year").value;

    if (inputDay > 0
        & inputDay <= 31
        & inputMonth > 0
        & inputMonth <= 12
        & inputYear > 1
        & inputYear.length <= 4) {

        currentDate = new Date();                                        // Get the current date  
        inputBirthDate = new Date(inputYear, inputMonth - 1, inputDay);  // Get the birth date

        difference = currentDate.getTime() - inputBirthDate.getTime();  // Subtract the current date from the birth date in milliseconds
        difference = (difference / 86400000);                           // 864000000 it's equal 1 day in milliseconds

        result = document.getElementById("result");
        result.textContent = Math.floor(difference) + ' dias';          // Show the right result on the screen

        printBirthDate = document.getElementById("printBirthDate");
        printBirthDate.textContent = 'Data de nascimento: ' + inputBirthDate.toLocaleDateString();

        printCurrentDate = document.getElementById("printCurrentDate");
        printCurrentDate.textContent = 'Data atual: ' + currentDate.toLocaleDateString();

        trait = document.getElementById("trait");
        trait.textContent = '  ';

        birthDataTitle = document.getElementById("birthData-title");
        birthDataTitle.textContent = '';

    } else {
        result = document.getElementById("result"); // Case we've some mistake
        result.textContent = 'Data inválida';
    }
}

const button = document.getElementById("toCount");
button.addEventListener("click", lifeTime);