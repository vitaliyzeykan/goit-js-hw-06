const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    input.textContent =
        event.currentTarget.value.length != input.getAttribute('data-length')
            ? input.classList.add('invalid')
            : input.classList.replace('invalid', 'valid');
}
