const timer = document.getElementById('timer');
    
let timerId = setInterval(() => {
    if (Number(timer.textContent) > 0) {
    timer.textContent = Number(timer.textContent) - 1;}
    else {
        clearInterval(timerId);
        alert("«Вы победили в конкурсе»");
        // consloe.log("«Вы победили в конкурсе»");
    }
    

}, 100);
