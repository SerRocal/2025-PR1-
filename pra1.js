class Film {
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.genre_ids = genre_ids;
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



