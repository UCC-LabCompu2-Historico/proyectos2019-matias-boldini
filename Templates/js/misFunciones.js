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

function volCubo(){
    var volCubo = document.getElementById("SCuboInput");
    var arista = parseInt(document.getElementById("Valor_ACubo").value);
    var volumen = (arista*arista*arista);
    volCubo.value = volumen;
}

function volEsf(){
    var volEsf = document.getElementById("SEsferaInput");
    var radio = parseInt(document.getElementById("Valor_REsfera").value);
    var volumen = (4*Math.PI*(radio*radio*radio))/3;
    volEsf.value = volumen;
}

function volCono(){
    var volCono = document.getElementById("SConoInput");
    var radio = parseInt(document.getElementById("Valor_RCono").value);
    var altura = parseInt(document.getElementById("Valor_ACono").value);
    var volumen = (Math.PI*(radio*radio)*altura)/3;
    volCono.value = volumen;
}

function dibujarCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var lado = parseInt(document.getElementById("Valor_LCuadrado").value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillstyle = "#d3d3d3";
    ctx.beginPath();
    ctx.rect(125,50, lado, lado);
    ctx.fill();
    ctx.closePath();
}

function dibujarRect(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var base = parseInt(document.getElementById("Valor_BRectangulo").value);
    var altura = parseInt(document.getElementById("Valor_ARectangulo").value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillstyle = "#d3d3d3";
    ctx.beginPath();
    ctx.rect(125,50, base, altura);
    ctx.fill();
    ctx.closePath();
}

function dibujarCirc(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var radio = parseInt(document.getElementById("Valor_RCirculo").value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillstyle = "#d3d3d3";
    ctx.beginPath();
    ctx.arc(125, 70, radio, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dibujarTri(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var base = parseInt(document.getElementById("").value);
    var altura = parseInt(document.getElementById("").value);


}