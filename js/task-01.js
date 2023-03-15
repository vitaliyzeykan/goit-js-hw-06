const catEl = document.querySelectorAll('ul#categories li.item');
const catNumb = catEl.length;
console.log('Number of categories:', catNumb    );

catEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    
    console.log('Elements:', item.querySelectorAll('li').length);
});
