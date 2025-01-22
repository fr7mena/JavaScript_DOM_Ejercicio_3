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

    console.log(texto);

}