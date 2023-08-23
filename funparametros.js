function saltarlinea(){
    document.write("<br>");
    document.write("<br>");
}
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}
var year = 2025;
var saltolinea="<br>"

imprimir("Juan tiene: "+(year-2000)+" años");
imprimir("Pedro tiene: "+(year-1995)+" años");
imprimir("Carlos tiene: "+(year-2005)+" años");
