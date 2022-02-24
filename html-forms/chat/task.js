// Повышенная сложность

const widgetSide = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
let lastTimeEnterMessage, timeout;

function msgBot() {
    let messagesBot = [
        'Доброе утро!',
        'Добрый день!',
        'Добрый вечер!',
        'Доброй ночи!'
    ];

    messagesContainer.innerHTML += `
        <div class="message">
            <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class="message__text">${messagesBot[Math.floor(Math.random()*messagesBot.length)]}</div>
        </div>
    `;
}

function enterMessage(event) {
    if (chatInput.value !== '' && event.key === 'Enter') {
        clearInterval(timeout);
        messagesContainer.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
        `;

        chatInput.value = '';
        msgBot();
        messagesContainer.scrollBy(0, messagesContainer.clientHeight);
        lastTimeEnterMessage = Date.now();
        timeout = setInterval(longTimeNoMessageEntry, 1000);
    }
}

function longTimeNoMessageEntry() {
    if ((Date.now() - lastTimeEnterMessage) > 30000) {
        messagesContainer.innerHTML += `
            <div class="message">
                <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                <div class="message__text">Задайте Ваш вопрос</div>
            </div>
        `;
        messagesContainer.scrollBy(0, messagesContainer.clientHeight);
        clearInterval(timeout);
    }
}

widgetSide.onclick = () => {
    chat.classList.add('chat-widget_active');
    lastTimeEnterMessage = Date.now();
    timeout = setInterval(longTimeNoMessageEntry, 1000);
};

chatInput.addEventListener('keydown', enterMessage);
