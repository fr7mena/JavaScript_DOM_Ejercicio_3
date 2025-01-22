document.addEventListener('DOMContentLoaded', event => {
    //Cogemos todos los elementos de tipo H2
    let headers = document.getElementsByTagName('h2');
    headers = Array.from(headers);

    headers.forEach(header => {
        header.addEventListener('click', recorrerAdelante);
    });
});

function recorrerAdelante(e) {
    const header = e.target; //Este es el elemento H2 que hemos guardado en una variable gracias al parametro que podemos pasar a la función a causa de la ejecución del metodo
    let textoDelH2 = header.textContent;
    const divPadre = header.closest("div"); //Con este metodo conseguimos el div más cercano al H2 clickeado.
    let divPadreId = divPadre.id; // Y con esto guardamos en un variable string el contenido del id del divPadre.

    let texto = "Has elegido " + textoDelH2 +  " que está situada en el " + divPadreId;

    texto = recorrerHermanos(header, texto);

    console.log(texto);
}

function recorrerHermanos(header, texto) {
    const hermano = header.nextElementSibling; //Con este metodo consigo obtener el hermano, es decir un elemento que esté en la misma jerarquía o nivel desde el elemento desde el que se llama al metodo, en este caso es un <ul>
    const numeroProvinvias = hermano.children.length; //Con esto obtengo el numero total de <li> que tiene este ul, aunque realmente este metodo (realmente no se si es un metodo o una propiedad del objeto tipo elemento) ".children.length" te saca el número de elementos hijos que cuelgan de ese elemento padre desde el que se llama.

    texto += ", y esta CCAA tiene un total de " + numeroProvinvias + " provincias.";
    return texto;
}