const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');
const apiUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const xhr = new XMLHttpRequest(); //создание объекта XMLHttpRequest
xhr.open('GET', apiUrl);
xhr.send();//отправка запроса
xhr.onload = () => { //при загрузке страницы
    const data = JSON.parse(xhr.responseText); //парсинг ответа сервера
//    console.log(data);
    const currencies = data.response.Valute; //получение данных из ответа сервера
//    console.log(currencies);
    for (let key in currencies) {
        const currency = currencies[key];
        const item = document.createElement('div');// создание элемента
        item.classList.add('item');//добавление класса

        item.innerHTML = `
            <div class="item__code">${currency.CharCode}</div>
            <div class="item__value">${currency.Value}</div>
            <div class="item__currency">руб.</div>
        `;//заполнение элемента

        itemsContainer.appendChild(item);//добавление элемента в контейнер
    };

        loader.classList.remove('loader_active');//удаление класса loader_active

};

