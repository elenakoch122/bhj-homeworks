// С усложнением
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let xhrResponse = JSON.parse(xhr.response);

        pollTitle.textContent = xhrResponse.data.title;

        xhrResponse.data.answers.forEach((answer) => pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${answer}</button>`));

        const buttons = Array.from(document.querySelectorAll('.poll__answer'));

        buttons.forEach((button) => {
            button.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');

                let xhrStat = new XMLHttpRequest();

                xhrStat.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhrStat.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrStat.send(`vote=${xhrResponse.id}&answer=${buttons.indexOf(button)}`);

                xhrStat.addEventListener('readystatechange', () => {
                    if (xhrStat.readyState === xhrStat.DONE) {
                        pollAnswers.textContent = '';

                        // console.log(JSON.parse(xhrStat.response));

                        let xhrStatResponse = JSON.parse(xhrStat.response);
                        let totalVotes = 0;
                        xhrStatResponse.stat.forEach((answer) => totalVotes += answer.votes);

                        xhrStatResponse.stat.forEach((answer) => {
                            pollAnswers.insertAdjacentHTML('beforeEnd', `
                                <div>${answer.answer}: <b>${(answer.votes*100/totalVotes).toFixed(2)}%</b></div>
                            `);
                        });
                    }
                });
            };
        });
    }
});







// Без усложнения
// const pollTitle = document.getElementById('poll__title');
// const pollAnswers = document.getElementById('poll__answers');
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

// xhr.send();

// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === xhr.DONE) {
//         let xhrResponse = JSON.parse(xhr.response);
//         pollTitle.textContent = xhrResponse.data.title;
//         xhrResponse.data.answers.forEach((answer) => pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${answer}</button>`));

//         const buttons = Array.from(document.querySelectorAll('.poll__answer'));
//         buttons.forEach((button) => {
//             button.onclick = () => {
//                 alert('Спасибо, ваш голос засчитан!');
//             };
//         });
//     }
// });
