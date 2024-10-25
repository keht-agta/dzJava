(() => {
  let winCount = 0;
  let loseCount = 0;

  const getHole = index => document.getElementById(`hole${index}`);
  
  // Функция для обновления счетов
  const updateScore = () => {
    document.getElementById('dead').textContent = winCount;
    document.getElementById('lost').textContent = loseCount;
  };

  // Обработчики кликов по лункам
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
      // Проверяем, содержит ли кликнутая лунка класс 'hole_has-mole'
      if (this.classList.contains('hole_has-mole')) {
        winCount++; // Если это активная лунка, увеличиваем счет побед
        if(winCount >9) { 
          alert ("Вы выйграли");
          winCount = 0;
          loseCount = 0;
          }
      } else {
        loseCount++; // Иначе увеличиваем счет промахов
        if(loseCount > 4) { 
          alert ("Вы пройграли");
          winCount = 0;
          loseCount = 0;
        }
      }
      updateScore(); // Обновляем статистику на экране
    };
  }

})();
