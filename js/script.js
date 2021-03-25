





var button = document.getElementById('research');
button.addEventListener("click", function(){
    
    var today = new Date();
    var dataStart = new Date();

    var input = document.getElementById('input').value;

    
    var difference = today.getTime() - dataStart.getTime();
    difference = (difference / 86400000);

    var elMsg = document.getElementById('box-quantity-days');
    elMsg.textContent = Math.floor(difference) + ' dias';
});