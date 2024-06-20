// Variable global para almacenar el color
let color;

// Función para cambiar el color del elemento
function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

// Función para crear un nuevo div con el color especificado
function createDivWithColor(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('color-box');
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.marginTop = '20px';
    document.body.appendChild(newDiv);
}

// Obtener los elementos por id
const blueDiv = document.getElementById('blueDiv');
const redDiv = document.getElementById('redDiv');
const greenDiv = document.getElementById('greenDiv');
const yellowDiv = document.getElementById('yellowDiv');
const keyElement = document.getElementById('key');

// Agregar eventos de clic para cambiar el color a negro
blueDiv.addEventListener('click', function() {
    pintar(this, 'black');
});
redDiv.addEventListener('click', function() {
    pintar(this, 'black');
});
greenDiv.addEventListener('click', function() {
    pintar(this, 'black');
});
yellowDiv.addEventListener('click', function() {
    pintar(this, 'black');
});

// Escuchar eventos de teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        color = 'pink';
        keyElement.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        keyElement.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'lightblue';
        keyElement.style.backgroundColor = color;
    } else if (event.key === 'q') {
        color = 'purple';
        createDivWithColor(color);
    } else if (event.key === 'w') {
        color = 'gray';
        createDivWithColor(color);
    } else if (event.key === 'e') {
        color = 'brown';
        createDivWithColor(color);
    }
});
