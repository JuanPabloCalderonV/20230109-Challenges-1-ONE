var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btncopiar = document.getElementById("btn-copiar")

btnEncriptar.addEventListener('click',encrypter,true);
console.log(btnEncriptar);
btnDesencriptar.addEventListener('click',decryptor,true);
console.log(btnDesencriptar);
btncopiar.addEventListener('click',copiar,true);
console.log(btncopiar);

function copiar()
{
    
    var portapapeles = document.getElementById("output");
    portapapeles.select();
    document.execCommand('copy');
    document.getElementById("output").value="";
    alert("copiado en portapapeles colega");
}

function encrypter()
{
    var frase= document.getElementById("input").value;
    var palabra=frase.toLowerCase();
    var acumulador="";
    for(var letra=0;letra<palabra.length;letra++)
    {
        if ("a" == palabra[letra])
            {
                acumulador=acumulador+"ai";
            }
        if ("e" == palabra[letra])
            {
                acumulador=acumulador+"enter";
            }
        if ("i" == palabra[letra])
            {
                acumulador=acumulador+"imes";
            }
        if ("o" == palabra[letra])
            {
                acumulador=acumulador+"ober";
            }
        if ("u" == palabra[letra])
            {
                acumulador=acumulador+"ufat";
            }
        if("a"!=palabra[letra]&&"e"!=palabra[letra]&&"i"!=palabra[letra]&&"o"!=palabra[letra]&&"u"!=palabra[letra])
            {
                acumulador=acumulador+palabra[letra];
            }
        }
        document.getElementById("output").value=acumulador;
}

function decryptor()
{
    var acumulador="";
    var frase= document.getElementById("input").value;
    var palabra=frase.toLowerCase();
    for(var letra=0;letra<palabra.length;letra++)
    {
        if ("a" == palabra[letra])
            {
                acumulador=acumulador+"a";
                letra=letra+2
            }
        if ("e" == palabra[letra])
            {
                acumulador=acumulador+"e";
                letra=letra+5;
            }
        if ("i" == palabra[letra])
            {
                acumulador=acumulador+"i";
                letra=letra+4;
            }
        if ("o" == palabra[letra])
            {
                acumulador=acumulador+"o";
                letra=letra+4;
            }
        if ("u" == palabra[letra])
            {
                acumulador=acumulador+"u";
                letra=letra+4;
            }
        if ("a" == palabra[letra])
            {
                acumulador=acumulador+"a";
                letra=letra+2
            }
        if ("e" == palabra[letra])
            {
                acumulador=acumulador+"e";
                letra=letra+5;
            }
        if ("i" == palabra[letra])
            {
                acumulador=acumulador+"i";
                letra=letra+4;
            }
        if ("o" == palabra[letra])
            {
                acumulador=acumulador+"o";
                letra=letra+4;
            }
        if ("u" == palabra[letra])
            {
                acumulador=acumulador+"u";
                letra=letra+4;
            }
        if(palabra[letra]!=undefined && "a"!=palabra[letra]&&"e"!=palabra[letra]&&"i"!=palabra[letra]&&"o"!=palabra[letra]&&"u"!=palabra[letra])
            {
                acumulador=acumulador+palabra[letra];
            }
        }
        document.getElementById("output").value=acumulador;
}


