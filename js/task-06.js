const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length != input.getAttribute('data-length')) {
        input.classList.contains('valid')
            ? input.classList.replace('valid', 'invalid')
            : input.classList.add('invalid');
    } else {
        input.classList.contains('invalid')
            ? input.classList.replace('invalid', 'valid')
            : input.classList.add('valid');
    }
}
