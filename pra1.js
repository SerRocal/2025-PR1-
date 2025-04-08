class Film {
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this.id = id; //identificador único
        this.title = title; //título de la película
        this.overview = overview; //Resumen de la película
        this.popularity = popularity; //Popularidad
        this.poster_path = poster_path; //Poster de la película
        this.release_date = release_date; //Fecha de lanzamiento
        this.vote_average = vote_average; //Promedio de votos
        this.vote_count = vote_count; //Número de votos
        this.genre_ids = genre_ids; //Lista de géneros por los que se ha clasificado la película
    }

    //Getters y setters

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



