const button = document.getElementById("toCount");


button.addEventListener("click", function(){

    var inputDay = document.getElementById("day").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    
    var currentDate = new Date();                                   // Pega a data atual   
    var inputBirthDate = new Date(inputYear, inputMonth, inputDay);                     // Pega a data de nascimento
                      
    var difference =  currentDate.getTime() - inputBirthDate.getTime();  // Subtrai em millisegundos a data de nascimento da data atual
    difference = (difference / 86400000) + 30;                     // 864000000 = 1 dia em millisegundos

    var result = document.getElementById("result");
    result.textContent =  Math.floor(difference) + ' dias';           // Mostra resultado na tela

    var printBirthDate = document.getElementById("printBirthDate");
    printBirthDate.textContent  = 'Data de nascimento: ' + inputBirthDate.toLocaleDateString();
    
    var printCurrentDate = document.getElementById("printCurrentDate");
    printCurrentDate.textContent = 'Data atual: ' + currentDate.toLocaleDateString();

    var trait = document.getElementById("trait");
    trait.textContent = '- ' ;

});