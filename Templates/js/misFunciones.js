/**
 * Esta funcion calcula la superficie del Rectangulo con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method supRect
 */

function supRect(){
    var superRect = document.getElementById("SRectanguloInput");
    var Base = parseInt(document.getElementById("Valor_BRectangulo").value);
    var Altura = parseInt(document.getElementById("Valor_ARectangulo").value);
    var superficie = (Base * Altura);
    superRect.value = superficie;
}

/**
 * Esta funcion calcula la superficie del Triangulo con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method supTrian
 */

function supTrian(){
    var superTrian = document.getElementById("STrianguloInput");
    var Base = parseInt(document.getElementById("Valor_BTriangulo").value);
    var Altura = parseInt(document.getElementById("Valor_ATriangulo").value);
    var superficie = (Base * Altura) / 2;
    superTrian.value = superficie;
}

/**
 * Esta funcion calcula la superficie del Cuadrado con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method supCuad
 */

function supCuad(){
    var superCuad = document.getElementById("SCuadradoInput");
    var Lado = parseInt(document.getElementById("Valor_LCuadrado").value);
    var superficie = Lado*Lado;
    superCuad.value = superficie;
}

/**
 * Esta funcion calcula la superficie del Circulo con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method supCirc
 */

function supCirc(){
    var superCirc = document.getElementById("SCirculoInput");
    var radio = parseInt(document.getElementById("Valor_RCirculo").value);
    var superficie = (radio*radio)*Math.PI;
    superCirc.value = superficie;
}

/**
 * Esta funcion calcula el volumen del Cilindro con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method volCil
 */

function volCil(){
    var volCil = document.getElementById("SCilindroInput");
    var radio = parseInt(document.getElementById("Valor_RCilindro").value);
    var altura = parseInt(document.getElementById("Valor_ACilindro").value);
    var volumen = Math.PI*(radio*radio)*altura;
    volCil.value = volumen;
}

/**
 * Esta funcion calcula el volumen del cubo con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method volCubo
 */

function volCubo(){
    var volCubo = document.getElementById("SCuboInput");
    var arista = parseInt(document.getElementById("Valor_ACubo").value);
    var volumen = (arista*arista*arista);
    volCubo.value = volumen;
}

/**
 * Esta funcion calcula el volumen de la esfera con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method volEsf
 */

function volEsf(){
    var volEsf = document.getElementById("SEsferaInput");
    var radio = parseInt(document.getElementById("Valor_REsfera").value);
    var volumen = (4*Math.PI*(radio*radio*radio))/3;
    volEsf.value = volumen;
}

/**
 * Esta funcion calcula el volumen del cono con los datos ingresados desde los inputs del html.
 * Primero trae los valores de los inputs media getElementById y los convierte a Integer para calcular.
 * Crea la variable superficie que va a tomar el valor de la operacion y luego se la colocara en el html.
 * @method volCono
 */

function volCono(){
    var volCono = document.getElementById("SConoInput");
    var radio = parseInt(document.getElementById("Valor_RCono").value);
    var altura = parseInt(document.getElementById("Valor_ACono").value);
    var volumen = (Math.PI*(radio*radio)*altura)/3;
    volCono.value = volumen;
}


/**
 * Esta funcion dibuja el Cuadrado en base a los datos ingresados.
 * Primero trae los valores del input Lado.
 * Luego limpia el canvas en caso que ya hacha alguno dibujado.
 * Por ultimo lo completa con los datos ingresados.
 * @method dibujarCuad
 */
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

/**
 * Esta funcion dibuja el Rectangulo en base a los datos ingresados.
 * Primero trae los valores de los inputs para base y altura.
 * Luego limpia el canvas en caso que ya hacha alguno dibujado.
 * Por ultimo lo completa con los datos ingresados.
 * @method dibujarRect
 */
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


/**
 * Esta funcion ejecuta la funcion animar.
 * @method dibujar
 */
function dibujar(){
    animar();
}

/**
 * Esta funcion realiza la animacion media AnimationFrame.
 * @method animar
 */
function animar(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    var angulo = 0;
    
    var requestAnimationFrame = window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame || 
                                window.webkitRequestAnimationFrame || 
                                window.msRequestAnimationFrame;
    
    /**
     * Esta funcion dibuja el circulo.
     * Primero se limpia el canvas para que no se pisen los graficos.
     * Y luego usa el parametro del radio para realizar el dibujo.
     * @method dibujarCirculo
     */
    function dibujarCirculo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        ctx.beginPath();
        var radio = (parseInt(document.getElementById("Valor_RCirculo").value))*Math.abs(Math.cos(angulo));
        ctx.arc(150, 75, radio, 0, Math.PI * 2, false);
        ctx.closePath();
        
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        
        angulo += Math.PI / 64;

        requestAnimationFrame(dibujarCirculo);
    }
    dibujarCirculo();
}