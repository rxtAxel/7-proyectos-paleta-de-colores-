const colores = document.querySelectorAll('.color');
const boton = document.getElementById('boton');

const letras = '0123456789ABCDEF';

function colorAlAzar() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColores() {
    colores.forEach(function (cuadro) {
        const color = colorAlAzar();
        cuadro.style.backgroundColor = color;
        cuadro.textContent = color;
    });
}

boton.addEventListener('click', cambiarColores);

cambiarColores();
