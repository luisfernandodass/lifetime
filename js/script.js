const button = document.getElementById("toCount");

button.addEventListener("click", function(){

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    
    var currentDate = new Date();  // Pega a data atual

   
    var birthDate = new Date(year, month, day); // Pega a data de nascimento
                      
    var difference =  currentDate.getTime() - birthDate.getTime();  // Subtrai em millisegundos a data de nascimento da data atual
    difference = (difference / 86400000);                           // 864000000 = 1 dia em millisegundos

    var elMsg = document.getElementById("result");
    elMsg.textContent =  Math.floor(difference) + ' dias';
});



/*
function toCount(){
    const getInput = document.getElementById("getInput");

    const value = getInput.value;

    var today = new Date();
    var dataStart = new Date(value);

    var difference =  today.getTime() - dataStart.getTime();
    difference = (difference / 86400000);

    var elMsg = document.getElementById("box-quantity-days");
    return elMsg.textContent = Math.floor(difference) + ' dias';
}
*/