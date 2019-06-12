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