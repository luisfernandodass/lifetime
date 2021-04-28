const button = document.getElementById("toCount");


button.addEventListener("click", function(){

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    
    var currentDate = new Date();                                   // Pega a data atual
   
    var birthDate = new Date(year, month, day);                     // Pega a data de nascimento
                      
    var difference =  currentDate.getTime() - birthDate.getTime();  // Subtrai em millisegundos a data de nascimento da data atual
    difference = (difference / 86400000) + 30 ;                     // 864000000 = 1 dia em millisegundos

    var elMsg = document.getElementById("result");
    elMsg.textContent =  Math.floor(difference) + ' dias';           // Mostra resultado na tela

    var firstBirthDate = document.getElementById("first-birthDate");
    firstBirthDate.textContent  = 'Data de nascimento: ' + birthDate;
    
    var a = document.getElementById("presentDate");
    a.textContent = 'Data atual: ' + currentDate;

});