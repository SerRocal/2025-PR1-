class Film {
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this._id = id; //identificador único
        this._title = title; //título de la película
        this._overview = overview; //Resumen de la película
        this._popularity = popularity; //Popularidad
        this._poster_path = poster_path; //Poster de la película
        this._release_date = release_date; //Fecha de lanzamiento
        this._vote_average = vote_average; //Promedio de votos
        this._vote_count = vote_count; //Número de votos
        this._genre_ids = genre_ids; //Lista de géneros por los que se ha clasificado la película
    }

    //getters y setters

    get id() {
        return this._id;
    }

    set id(newId) {
        if (typeof newId === 'number' && newId >= 0) {
            this._id = newId;
        } else {
            console.error("El título debe ser un número positivo.");
        }

    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this._title = newTitle;
        } else {
            console.error("El ID debe ser un nombre")
        }
    }
}

class FilmList {
    constructor() {

    }

    addFilm(film) {

    };


    removeFilm(filmId) {

    }

    showList() {

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



