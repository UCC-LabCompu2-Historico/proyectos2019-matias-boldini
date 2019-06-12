function supRect(){
    var superRect = document.getElementById("SRectanguloInput");
    var Base = parseInt(document.getElementById("Valor_BRectangulo").value);
    var Altura = parseInt(document.getElementById("Valor_ARectangulo").value);
    var superficie = (Base * Altura);
    superRect.value = superficie;
}

function supTrian(){
    var superTrian = document.getElementById("STrianguloInput");
    var Base = parseInt(document.getElementById("Valor_BTriangulo").value);
    var Altura = parseInt(document.getElementById("Valor_ATriangulo").value);
    var superficie = (Base * Altura) / 2;
    superTrian.value = superficie;
}

function supCuad(){
    var superCuad = document.getElementById("SCuadradoInput");
    var Lado = parseInt(document.getElementById("Valor_LCuadrado").value);
    var superficie = Lado*Lado;
    superCuad.value = superficie;
}

function supCirc(){
    var superCirc = document.getElementById("SCirculoInput");
    var radio = parseInt(document.getElementById("Valor_RCirculo").value);
    var superficie = (radio*radio)*Math.PI;
    superCirc.value = superficie;
}

function volCil(){
    var volCil = document.getElementById("SCilindroInput");
    var radio = parseInt(document.getElementById("Valor_RCilindro").value);
    var altura = parseInt(document.getElementById("Valor_ACilindro").value);
    var volumen = Math.PI*(radio*radio)*altura;
    volCil.value = volumen;
}