class Film {
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

class FilmList {

    #list;
    constructor() { //constructor vacio, ya que la variable no hace falta indicarla en este caso, no necesita parámetros en este caso 
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
            // indicando el número de elementos a elminiar 
        } else console.error("No se ha encontrado la película con dicho id: ", filmId);
        // devolvemos el filmId que no encontramos
    }

    showList() {
        this.#list.forEach((film, i) => { // No incluimos el parametro del array lista, opcional
            // pero si no se usa el código queda más limpio
            console.log(`${i + 1}, Id: ${film.id}, Título: ${film.title}, 
                Fecha de lanzamiento: ${film.release_date}`);
        });
    }

    addMultipleFilms = (...films) => {

    }


    getFilmsByDateRange = (startDate, endDate) => {

    }

    sortFilmsByPopularity = () => {

    }

    findFilmById() {
        //Función recursiva
    }

    getMostCommonGenre() {
        //Uso de reduce
    }

    getPopularFilmTitles() {
        //Uso de map y filter
    }
}



