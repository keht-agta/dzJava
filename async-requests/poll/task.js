const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const apiUrl = 'https://students.netoservices.ru/nestjs-backend/poll';

// Создаем объект XHR для получения данных опроса
const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl);

xhr.onload = () => {
    if (xhr.status === 200) { // Если ответ сервера получен ОК
        const response = JSON.parse(xhr.responseText);
        const { id, data } = response;// Получаем данные опроса

        pollTitle.textContent = data.title; // Выводим название опроса

        // Создаем кнопки для вариантов ответов
        data.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = answer;

            // Добавляем обработчик клика для кнопки
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');

                // Создаем запрос для отправки результата голосования
                const xhrVote = new XMLHttpRequest();
                xhrVote.open('POST', apiUrl);
                xhrVote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrVote.onload = () => {
//                    console.log(xhrVote.responseText);
//                    console.log(xhrVote.status);
//                    console.log(xhrVote.statusText);
                    if (xhr.readyState === xhr.DONE) {
                        console.log(xhrVote.responseText);
                        const stats = JSON.parse(xhrVote.responseText).stat;

                        // Очищаем ответы и показываем результаты голосования
                        pollAnswers.innerHTML = '';
                        stats.forEach(stat => {
                            const result = document.createElement('div');
                            result.textContent = `${stat.answer}: ${stat.votes} голосов`;
                            pollAnswers.appendChild(result);
                        });
                    }
                };

                // Отправляем данные голосования
                xhrVote.send(`vote=${id}&answer=${index}`);
//                console.log(xhrVote.responseText);
//                console.log(xhrVote.status);
            });
            console.log('button', button);
            console.log('pollAnswers', pollAnswers);
            pollAnswers.appendChild(button);
            console.log('pollAnswers', pollAnswers);
        });
    }
};

xhr.send(); // Отправляем запрос для получения данных

