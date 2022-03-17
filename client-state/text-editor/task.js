const editor = document.getElementById('editor');
const btnClear = document.querySelector('.button__clear');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => localStorage.setItem('text', editor.value));

btnClear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
});
