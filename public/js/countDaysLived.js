function initLifeTime() {
 
    const button = document.querySelector(".toCount");
  
    function countDaysLived() {
      let inputDay = document.querySelector(".day").value;
      let inputMonth = document.querySelector(".month").value;
      let inputYear = document.querySelector(".year").value;
      let result = document.querySelector(".result");
      let printBirthDate = document.querySelector(".printBirthDate");
      let printCurrentDate = document.querySelector(".printCurrentDate");
      let trait = document.querySelector(".trait");
      const containerDate = document.querySelector(".birthData-input");
  
      if (
        (inputDay > 0) &
        (inputDay <= 31) &
        (inputMonth > 0) &
        (inputMonth <= 12) &
        (inputYear > 1) &
        (inputYear.length <= 4)
      ) {
        let currentDate = new Date(); // Get the current date
        let inputBirthDate = new Date(inputYear, inputMonth - 1, inputDay); // Get the birth date
  
        let difference = currentDate.getTime() - inputBirthDate.getTime(); // Subtract the current date from the birth date in milliseconds
        difference = difference / 86400000; // 864000000 it's equal 1 day in milliseconds
        
        containerDate.classList.remove('error')
        result.classList.remove('error');
        result.textContent = Math.floor(difference) + " dias"; // Show the right result on the screen
  
        printBirthDate.textContent =
          "Data de nascimento: " + inputBirthDate.toLocaleDateString();
  
        printCurrentDate.textContent =
          "Data atual: " + currentDate.toLocaleDateString();
  
        trait.textContent = "-";
  
      } else {
        containerDate.classList.add('error')
        result.classList.add('error')
        result.textContent = "Data inválida";
      }
    }
    button.addEventListener("click", countDaysLived);
  }
  
  initLifeTime();
  