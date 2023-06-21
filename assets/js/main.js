let primero = document.querySelector("#div1");
let segundo = document.querySelector("#div2");
let tercero = document.querySelector("#div3");
let cuarto = document.querySelector("#div4");
let color = "";

function recibe(elemento){
    let estilo = getComputedStyle(elemento);
     color =   estilo.backgroundColor;
}

primero.addEventListener('click', function(){
    primero.style.backgroundColor = color;
});

segundo.addEventListener('click', function(){
    segundo.style.backgroundColor = color;
});

tercero.addEventListener('click', function(){
    tercero.style.backgroundColor = color;
});

cuarto.addEventListener('click', function(){
    cuarto.style.backgroundColor = color;
});


document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            recibe(primero);
        } else if (event.key === 'b') {
            recibe(segundo);

        }else if (event.key === 's') {
            recibe(tercero);

        } else if (event.key === 'd'){
            recibe(cuarto);
        }else{
            alert("Debes pulsar una de las teclas mencionadas.");
        }

})
    
