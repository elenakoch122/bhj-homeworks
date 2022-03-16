const editor = document.getElementById('editor');
const btnClear = document.querySelector('.button__clear');
let savedText = localStorage.getItem('text');

if (savedText) {
    editor.value = savedText;
} 

editor.addEventListener('input', () => localStorage.setItem('text', editor.value));

btnClear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
});
