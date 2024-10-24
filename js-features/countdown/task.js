const timer = document.getElementById('timer')
    
setInterval(() => {
    if (Number(timer.textContent) > 0) {
    timer.textContent = Number(timer.textContent) - 1;}
    else {
        clearInterval();
        alert("«Вы победили в конкурсе»");
        // consloe.log("«Вы победили в конкурсе»");
    }
    

}, 100);
