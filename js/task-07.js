const text = document.querySelector('span#text');

document
    .getElementById('font-size-control')
    .addEventListener('change', function () {
        text.style.fontSize = `${this.value}px`;
    });


