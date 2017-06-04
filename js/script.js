var links = document.querySelectorAll('#lista li');

var galeria = document.querySelector('#galeria');

var imag = [
    ['cajamarca.jpg', 'cajaba.jpg'],
    ['cajaba.jpg', 'cajamarca.jpg']
];


for (var i = 0; i < links.length; i++) {
    agregarEvento(i);
}


function agregarEvento(i) {
    links[i].addEventListener('click', function () {
        recargar(i);
    }, false);
}

function recargar(i) {
    var listaImag = imag[i];

    while (galeria.firstChild) {
        galeria.removeChild(galeria.firstChild);
    }

    for (var j = 0; j < listaImag.length; j++) {
        var src = listaImag[j];

        var img = document.createElement('img');
        img.src = 'img/' + src;

        galeria.appendChild(img);
    }
}