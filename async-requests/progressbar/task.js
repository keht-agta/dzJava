const form = document.getElementById('form');
const file = document.getElementById('file');
const apiUrl = 'https://students.netoservices.ru/nestjs-backend/upload';
const progressBar = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file.files[0]);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);

    // прогресс бар
    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total; // процентиль загрузки
            console.log(percentComplete);
            progressBar.value = percentComplete; // Update the progress bar
        }
    };

    xhr.send(formData);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Файл успешно загружен!');
        } else {
            alert('Ошибка при загрузке файла.');
        }};

});

