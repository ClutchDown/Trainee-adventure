const div = document.createElement('div');
div.classList.add('wrapper');
let body = document.body;
body.appendChild(div);
console.log(body);

let header = document.createElement('h1');
header.textContent = 'DOM - document object model';
div.insertAdjacentElement('afterbegin', header);


