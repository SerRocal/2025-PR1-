// Alumno Sergio Rodríguez Calvo - Abril 2025 - 76513 - Aula 1

class Film { // Representa una película. Usa campos privados (#) para encapsular datos y getters/setters para acceso controlado
    //declaración de las propiedades o campos privados al principio de la clase como recomendación (si no VS subraya las propiedades como dando un warning)
    #id;
    #title;
    #overview;
    #popularity;
    #poster_path;
    #release_date;
    #vote_average;
    #vote_count;
    #genre_ids;

    //Asigna parámetros a las propiedades o campos privados internos
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this.#id = id; //identificador único
        this.#title = title; //título de la película
        this.#overview = overview; //Resumen de la película
        this.#popularity = popularity; //Popularidad
        this.#poster_path = poster_path; //Poster de la película
        this.#release_date = release_date; //Fecha de lanzamiento
        this.#vote_average = vote_average; //Promedio de votos
        this.#vote_count = vote_count; //Número de votos
        this.#genre_ids = genre_ids; //Lista de géneros por los que se ha clasificado la película
        // 'this' aquí se refiere al nuevo objeto Film que se está creando
        // Asignación de parámetros a los campos privados de 'this'
    }

    //Getters (controlan lectura) y Setters (controlan escritura + la validación)

    get id() {  //Definimos getters públicos para que no se tengan acceso a los originales y que no puedan ser manipulados desde afuera, actúan como barrera
        return this.#id;
    }
    //encapsulamos una lógica mínima que queremos conseguir, en este caso que sea un tipo number y que sea positivo, la lógica de validación
    set id(newId) { //Definimos los setters de manera pública también  
        if (typeof newId === 'number' && newId >= 0) {
            this.#id = newId;
        } else {
            console.error("id es inválido: ", newId);
        }
    }

    get title() {
        return this.#title;
    }
    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this.#title = newTitle;
        } else {
            console.error("title es inválido: ", newTitle);
        }
    }

    get overview() {
        return this.#overview;
    }

    set overview(newOverview) {
        if (typeof newOverview === 'string') {
            this.#overview = newOverview;
        } else {
            console.error("overview es inválido: ", newOverview);
        }
    }

    get popularity() {
        return this.#popularity;
    }

    set popularity(newPopularity) {
        if (typeof newPopularity === 'number' && newPopularity >= 0) {
            this.#popularity = newPopularity;
        } else {
            console.error("popularity es inválida: ", newPopularity);
        }
    }

    get poster_path() {
        return this.#poster_path;
    }

    get release_date() {
        return this.#release_date;
    }

    set release_date(newReleaseDate) {
        const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (typeof newReleaseDate === 'string' && dateFormatRegex.test(newReleaseDate)) {
            this.#release_date = newReleaseDate;
        } else {
            console.error("release_date inválida el formato no es YYYY-MM-DD: ", newReleaseDate);
        }
    }

    get vote_average() {
        return this.#vote_average;
    }

    set vote_average(newVoteAverage) {
        if (typeof newVoteAverage === 'number' && newVoteAverage >= 0 && newVoteAverage <= 10) {
            this.#vote_average = newVoteAverage;
        } else {
            console.error("vote_average es inválido o está fuera del rango: ", newVoteAverage);
        }
    }

    get vote_count() {
        return this.#vote_count;
    }

    set vote_count(newVoteCount) {
        if (typeof newVoteCount === 'number' && newVoteCount >= 0) {
            this.#vote_count = newVoteCount;
        } else {
            console.error("vote_count es inválido: ", newVoteCount);
        }
    }

    get genre_ids() {
        return this.#genre_ids;
    }

    set genre_ids(newGenreIds) {
        if (Array.isArray(newGenreIds)) {
            this.#genre_ids = newGenreIds
        } else {
            console.error("genre_ids no es un array: ", newGenreIds);
        }
    }
}

// 2º Creación de la Clase FilmList (5 puntos)
// -------------------------------------------

class FilmList {

    #list; // Campo privado para almacenar el array de Films
    constructor() { //constructor vacio, ya que la variable no hace falta indicarla en este caso, no necesita parámetros en este caso 
        // this, instancia de FilmList
        this.#list = []; //partimos de un array vacio que iremos llenando, por eso no hace falta indicarla
    }

    get list() { // #list es privado, pero métodos internos como este getter sí pueden acceder
        return this.#list;
    }

    addFilm(film) {
        if (!(film instanceof Film)) {
            console.error("El film que intentas añadir no es una instancia de FILM ", film)
            return
        } else {
            return this.#list.push(film); // como estamos dentro de la misma clase vamos directos a la propiedad privada
        }
    }

    removeFilm(filmId) {
        // para buscar la película por id tenemos que buscar un índice a ver si la encontramos
        // podríamos hacerlo con un bucle
        // let findFilm = -1
        // for (let = 1; i > this.#list.lenght; i++) {
        //      if (this.#list[i] === filmID) {
        //      findFilm = i;
        //      break
        //      } else...
        // }
        // pero mejor usamos el método findIndex que es más directo
        // podemos usarlo como una función clásica
        // const findFilm = this.#list.findIndex(function (film, index, list // (this.#list) {
        // return film.id === filmId;
        // });
        // o podemos usar el argumento con una función flecha, más directo
        const i = this.#list.findIndex(film => film.id === filmId);
        if (i !== -1) {
            this.#list.splice(i, 1); // se elimina el film si lo encuentra, ya que indicamos
            // su posición en el pimer parámetro que habremos encontrado con findIndex
            // el uno pertenece al parámetro deleteCount 
            // indicando el número de elementos a eliminar 
        } else console.error("No se ha encontrado la película con dicho id: ", filmId);
        // devolvemos el filmId que no encontramos
    }

    showList() {
        this.#list.forEach((film, i) => { // No incluimos el parametro del array lista, opcional
            // pero si no se usa el código queda más limpio
            console.log(`${i + 1}, Id: ${film.id}, Título: ${film.title}, Fecha de lanzamiento: ${film.release_date}`);
        });
    }

    // 3º Función flecha (5 puntos)
    // ----------------------------

    // Añade una o más películas a la lista usando el método addFilm.
    addMultipleFilms = (...films) => {
        films.forEach(film => this.addFilm(film)); // con rest usamos for.each para recorrer todo el array de películas que queremos insertar
        // en cada interacción lo asignamos al parámetro de la función flecha que usa la función addFilm para agregarlo a nuestro array de 
        // películas interno (this.#list)

    }

    // Devuelve un NUEVO array filtrado por rango de fechas.
    getFilmsByDateRange = (startDate, endDate) => {
        // filter() devuelve un array nuevo, no modifica this.#list.
        return this.#list.filter(film =>
            film.release_date >= startDate && film.release_date <= endDate) // definimos una lógica que esté dentro del rango seleccionado
        // más de la date inicial y menos que la final, cumpliendose las dos condiciones para que estén incluidas las películas que queremos

    }

    sortFilmsByPopularity = () => {
        // sort() modifica el array this.#list original directamente
        this.#list.sort((filmA, filmB) => filmB.popularity - filmA.popularity) // el método short utiliza dos valores para ir 
        // comparando e ir reordenándose este método modifica el array original y 
        // lo ordena en este caso por popularidad para ordenarlos se usa un método simple 
        // - un numero negativo a debe ir antes que b, filmA = 9.8, filmB 8.1 A va delante de B
        // - cero si a y b son considerados iguales en orden, un número
        // - positivo a debe ir después de b filmA = 7.8, filmB 8.1 B va delante de A, se reordena
    }

    // 4º Función recursiva (5 puntos)
    // -------------------------------

    // Crea una función recursiva llamada findFilmById que busque 
    // una película dentro en unaestructura de tipo FilmList por su ID.
    findFilmById(filmId, currentIndex = 0) {
        if (currentIndex >= this.#list.length) return null;
        else if (this.#list[currentIndex].id === filmId) return this.#list[currentIndex];
        // this.#list[currentIndex].id; 
        // this: nuestro objeto (FilmList) actual, 
        // this.#list: accedemos a su campo privado #list definido en el constructor (array con todos los objetos Film)
        // nos da el array completo que pertenece a esta instancia
        // this.#list[currentIndex]: Accedemos al elemento posición específica (nos movemos en el array)
        // this.#list[currentIndex].id: Accedemos a la propiedad del elemento de la posición específica (su id)
        return this.findFilmById(filmId, currentIndex + 1)
    }

    // 5º Función recursiva (5 puntos)
    // -------------------------------


    //Crea una función llamada getMostCommonGenre que analice todas las películas y 
    // determina el género que más se repite, utilizando el método de Array reduce.
    getMostCommonGenre() {
        //Uso de reduce
        // método omitido en esta implementación.

    }

    // 6º Función recursiva (5 puntos)
    // -------------------------------

    //Escribe una función llamada getPopularFilmTitles que tomará un array de películas 
    // y valor de votos mínimo, y devolverá un array con los títulos de las películas que superan ese valor
    // mínimo de votos. 
    // Utiliza filter para seleccionar las películas cuyo valor de votación medio es mayor 
    // o igual al valor de votos mínimo y map para extraer solo los títulos de esas películas.

    getPopularFilmTitles(minVote) { //añadimos un parámetro ya que queremos saber
        // las películas que hay con un mínimo de votos para filtrarlas
        // Uso de map y filter
        // 'this.#list' es accesible por ser un método de instancia.
        const filteredFilms = this.#list.filter(film => film.vote_average >= minVote); // Se crea una función flecha con filter 
        // para filtrar el umbral que decidimos como filtro
        const titledFilms = filteredFilms.map(film => film.title); // Se crea una función map para añadir, de los filtrados, los títulos
        return titledFilms;
    }

    // Investigando me he encontrado que esta expresión se puede reducir así:
    // getPopularFilmTitles(minVote) {
    //  return this.#list
    //      .filter(film => film.vote_average >= minVote)
    //      .map(film => film.title);
    //  }
    // Esta sintaxis se define como Encadenamiento de métodos (method chaining)
    // donde el punto . conecta las llamadas de filter y map (indicando que continúa el siguiente método en la instrucción)

}

// --- Inicio Código de Prueba ---

console.log("## Creando Instancias de Películas ##");
const film1 = new Film(101, "Inception", "Un ladrón que roba secretos corporativos...", 436, "/inception.jpg", "2010-07-16", 8.8, 3500, [28, 878, 12, 53]);
const film2 = new Film(102, "The Dark Knight", "Batman se enfrenta al Joker...", 901, "/dark_knight.jpg", "2008-07-18", 9.0, 13100, [28, 80, 18, 53]);
const film3 = new Film(103, "Pulp Fiction", "Las vidas de dos sicarios...", 1456, "/pulp_fiction.jpg", "1994-10-14", 8.9, 12600, [53, 80, 18]);
const film4 = new Film(104, "Dune: Part Two", "Paul Atreides se une a los Fremen...", 912, "/dune2.jpg", "2024-03-01", 8.4, 9000, [878, 12, 14, 28]);
const film5 = new Film(105, "Parasite", "Una familia pobre se infiltra...", 1089, "/parasite.jpg", "2019-05-30", 8.5, 11700, [35, 53, 18]);

// Mapa de Referencia para IDs de Género (TMDb)
// ==========================================
/*
const GENERO_MAPA = {
    28: 'Acción', 12: 'Aventura', 35: 'Comedia',
    80: 'Crimen', 18: 'Drama', 14: 'Fantasia', 
    878: 'Ciencia ficción', 53: 'Suspense'
};
*/

console.log("\nPelículas creadas:");
console.log(film1.title);
console.log(film2.title);
console.log(film3.title);
console.log(film4.title);
console.log(film5.title);

console.log("\n---------------------------------\n");
console.log("Comprobación 2º bloque")
console.log("\n---------------------------------\n");

console.log("## Creando y Poblando FilmList ##");
const myFilmList = new FilmList();

console.log("Añadiendo Las películas y mostrándolas...");
myFilmList.addFilm(film1);
myFilmList.addFilm(film2);
myFilmList.addFilm(film3);
myFilmList.addFilm(film4);
myFilmList.addFilm(film5);
myFilmList.showList();

console.log("\nIntentando añadir algo que no es Film...");
myFilmList.addFilm({ id: 999, title: "Not a Film Object" }); // Muestra error

myFilmList.showList();

myFilmList.removeFilm(103);
console.log("\nEliminando 'Pulp Fiction' (ID: 103)...");
myFilmList.removeFilm(104);
console.log("Eliminando 'Dune: Part Two' (ID: 104)...");

myFilmList.showList();
console.log("\nIntentando eliminar película inexistente (ID: 999)...");
myFilmList.removeFilm(999); // Muestra error
myFilmList.showList(); // La lista no cambia

console.log("\n---------------------------------\n");
console.log("Comprobación 3º bloque")
console.log("\n---------------------------------\n");

console.log("## addMultipleFilms ##");
myFilmList.addMultipleFilms(film3, film4);

myFilmList.showList();

console.log("\n## Probando getFilmsByDateRange ##");
const startDate = "2010-01-01";
const endDate = "2020-12-31";
console.log(`Buscando películas entre ${startDate} y ${endDate}...`);
const filmsInRange = myFilmList.getFilmsByDateRange(startDate, endDate);
console.log("Películas encontradas en rango:", filmsInRange.map(f => f.title));

console.log("\n## Probando sortFilmsByPopularity ##");
console.log("\nOrdenando por popularidad (descendente)...");
myFilmList.sortFilmsByPopularity();
myFilmList.showList();

console.log("\n---------------------------------\n");
console.log("Comprobación 4º bloque")
console.log("\n---------------------------------\n");

console.log("\n## Probando findFilmById (Recursiva) ##");
const filmToFindId = 101; // Inception
console.log(`Buscando película con ID: ${filmToFindId}...`);
const foundFilm = myFilmList.findFilmById(filmToFindId);
if (foundFilm) {
    console.log("Película encontrada:", foundFilm.title);
} else {
    console.log("Película no encontrada.");
}

const nonExistentId = 998;
console.log(`Buscando película con ID: ${nonExistentId}...`);
const notFoundFilm = myFilmList.findFilmById(nonExistentId);
if (notFoundFilm) {
    console.log("Película encontrada:", notFoundFilm.title); // No se ejecuta
} else {
    console.log("Película no encontrada.");
}

console.log("\n---------------------------------\n");
console.log("Comprobación 5º bloque")
console.log("\n---------------------------------\n");

console.log("## Probando getMostCommonGenre ##");
myFilmList.getMostCommonGenre(); // Ejercicio sin hacer

console.log("\n---------------------------------\n");
console.log("Comprobación 6º bloque")
console.log("\n---------------------------------\n");

console.log("\n## Probando getPopularFilmTitles ##");
const minVoteAvg = 8.5;
console.log(`Buscando títulos con voto medio >= ${minVoteAvg}...`);
console.log("Títulos populares:", myFilmList.getPopularFilmTitles(minVoteAvg)); // Debería incluir Inception, Dark Knight, Parasite (Pulp Fiction ya fue eliminada)

const highMinVoteAvg = 9.5;
console.log(`\nBuscando títulos con voto medio >= ${highMinVoteAvg}...`);
console.log("Títulos muy populares:", myFilmList.getPopularFilmTitles(highMinVoteAvg)); // Queda vacío

console.log("\n---------------------------------\n");
console.log("## Fin de las Pruebas ##");

// --- Fin Código de Prueba ---








