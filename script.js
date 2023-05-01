/*
                R E G L A S 
    -La letra "e" es convertida para "enter"
    -La letra "i" es convertida para "imes"
    -La letra "a" es convertida para "ai"
    -La letra "o" es convertida para "ober"
    -La letra "u" es convertida para "ufat"

*/

//Validar que solo se ingresen minusculas
function validarTxt(texto){
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  

    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true;
    } else if (texto == vacio){
        alert("Ingrese un mensaje para encriptar");
        return true;
    } else {
        return false;
    }

}

//Función para ocultar titulo, parrafo e imagen
let btnEncriptar = document.querySelector('.btnEncriptar');

btnEncriptar.addEventListener("click", function(){
  
    document.getElementById("img").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("parrafo").style.display = "none";

    // Muestra el texto y el boton para copiar
    //document.getElementById("txt-resultado").style.display = 'inline-block';
    document.getElementById("btnCopiar").style.display = 'inline-block';

})


//Función para encriptar el texto
btnEncriptar.addEventListener("click", function(){
    
    let texto = document.querySelector('.area-txt').value;
    let textoIngresado = texto;

    if(validarTxt (textoIngresado) == false){
        
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector('.txt-resultado');
        resultado.value = Encriptado;
    
    } else {
        
        texto = "";
    
    }

})

//Función con las reglas
const reglas = {"e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};

function encriptar(textoIngresado){
    
    let Encriptado = "";
    
    for (const obj in reglas){
    
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;
    
    }
    
    return(Encriptado);

}

// C O P I A R
let btnCopiar = document.querySelector('.btnCopiar');

btnCopiar.addEventListener("click", function(){
    
    let copiado = document.querySelector(".txt-resultado").value;
    navigator.clipboard.writeText(copiado);
    document.querySelector(".area-txt").value="";

});

// D E S E N C R I P T A R
let btnDesencriptar = document.querySelector(".btnDesencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector(".area-txt").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector(".txt-resultado");
    resultado.value = Desencriptado;
})

function desencriptar(textoIngresado){
    let Encriptado = "";

    for (const obj in reglas){
        Encriptado = textoIngresado.replaceAll(reglas[obj], obj);
        textoIngresado = Encriptado;
    }
    return (Encriptado);
}