const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const defaultText = output.textContent;

input.addEventListener('input', event => {
    output.textContent =
        event.currentTarget.value.trim().length > 0
            ? event.currentTarget.value
            : defaultText;
});
