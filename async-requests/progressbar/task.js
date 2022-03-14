const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded/event.total;
    };

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    const formData = new FormData(form);
    
    xhr.send(formData);
});