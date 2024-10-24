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
      } else {
        loseCount++; // Иначе увеличиваем счет промахов
      }
      updateScore(); // Обновляем статистику на экране
    };
  }

})();
