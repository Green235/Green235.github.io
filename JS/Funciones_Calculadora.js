
let ancho = 0;
let largo = 0;
let alto = 0;
let volumen = 0;
let resultado = 0;
let volumen_real = 0;
let radio = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let volrec = 0;
let volsem = 0;
let result = 0;
let litro = 0.001;

function calcularVolumen() {

    ancho = parseFloat(document.getElementById("ancho").value);
    alto = parseFloat(document.getElementById("alto").value);
    largo = parseFloat(document.getElementById("largo").value);

    volumen = (ancho) * (alto) * (largo);
    result = volumen * litro;
    window.alert("Los litros que caben en la pecera rectangular es de: " + result + " litros");
}

function calcularpar(){
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    largo = document.getElementById("largo").value;
    radio = parseInt(largo) / 2;
    volrec = parseInt(ancho) * parseInt(alto) * parseInt(largo);
    volsem = (parseInt(alto) * 3.1216 * (radio * radio)) / 2;
    result = volrec + volsem;
    resultado = result * litro;
    window.alert("Los litros que caben en la pecera panorámica es de: "+ resultado +" litros");
}

function calcularcil(){
    alto = document.getElementById("alto").value;
    radio = document.getElementById("radio").value;
    result = parseInt(alto) * 3.1416 * (radio * radio); 
    window.alert("Los litros que caben en la pecera cilindrica es: "+ result+" litros");
}

function calcularsem(){
    alto = document.getElementById("alto").value;
    radio = document.getElementById("radio").value;
    result = (parseInt(alto) * 3.1416 * (radio * radio)) / 2; 
    window.alert("Los litros que caben en la pecera semicircular es de: "+ result+" litros");
}

function calcularesf(){
    radio = document.getElementById("radio").value;
    result = ((67 / 16) * (radio ^ 3));
    window.alert("Los litros que caben en la pecera esférica es de: "+ result+" litros");
}

function calculartri(){
    alto = document.getElementById("alto").value;
    ancho = document.getElementById("ancho").value;
    largo = document.getElementById("largo").value;
    result = (parseInt(alto) * parseInt(ancho) * parseInt(largo)) / 2;
    window.alert("Los litros que caben en la pecera triangular es de: "+result+" litros");
}