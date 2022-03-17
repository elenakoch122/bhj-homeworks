const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userID = document.getElementById('user_id');
const xhr = new XMLHttpRequest();
let savedID = localStorage.getItem('user_id');

function signIn() {
    document.getElementById('signin').classList.remove('signin_active'); 
    welcome.classList.add('welcome_active');
}

function signOut() {
    document.querySelector('.sign_out').addEventListener('click', () => {
        welcome.classList.remove('welcome_active');
        document.getElementById('signin').classList.add('signin_active');
        localStorage.removeItem('user_id');
    });
}

if (savedID) {
    signIn();
    userID.textContent = savedID;
    signOut();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.addEventListener('load', () => {
        if (JSON.parse(xhr.response).success) {
            signIn();
            userID.textContent = JSON.parse(xhr.response).user_id;
            localStorage.setItem('user_id', userID.textContent);
            signOut();
        } else {
            alert('Неверный логин или пароль!');
        }
        
        form.reset();
    });
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    const formData = new FormData(form);
    xhr.send(formData);
});
