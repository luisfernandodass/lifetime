    const button = document.querySelector("#research");

    button.addEventListener("click", function(){
    
        const getInput = document.querySelector("#getInput");

        const value = getInput.value;

        var today = new Date(value);
        var dataStart = new Date();

        var difference = today.getTime() - dataStart.getTime();
        difference = (difference / 86400000);

        var elMsg = document.getElementById('box-quantity-days');
        elMsg.textContent = Math.floor(difference) + ' dias';
});