let pelicula = [
    {
    titulo: "sonic",
    genero: "aventura",
    anio: "diciembre 2021",
    sinopsis: "Después de establecerse en Green Hills, Sonic quiere demostrar que tiene madera de héroe. La prueba de fuego llega con el retorno del malvado Robotnik, y su nuevo compinche, Knuckles, en busca de una esmeralda que destruye civilizaciones"
    },
    {
    titulo: "la cuidad perdida",
    genero: "comedia",
    anio: "abril 2022",
    sinopsis: "Un modelo de portada viaja a una jungla exótica para rescatar a una escritora de aventuras de un excéntrico multimillonario."
    },
    {
    titulo: "desesperada",
    genero: "suspenso",
    anio: "febrero 2022",
    sinopsis: "Poco después de enviudar, Amy recibe la peor llamada posible: su hijo adolescente está huyendo de un asesino que ha atacado"
    },
];


    
function cartelera(){
    pelicula.forEach( function(peli) {
        document.write(
          `<strong>--------Cartelera--------</strong><br />`  
        );
        document.write(`<b>Título:</b> ${peli.titulo}<br />`);
        document.write(`<b>Género:</b> ${peli.genero}<br />`);
        document.write(`<b>Año:</b> ${peli.anio}<br />`);
        document.write(`<b>Sinópsis:</b> ${peli.sinopsis}<br />`);


    });
};
cartelera()