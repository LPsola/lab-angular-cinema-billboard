import { Injectable } from "@angular/core";
import { Movie, movieList } from "../movies-data/movie-data";

@Injectable()
export class MovieService {
  movies: Array<Movie> = [...movieList];

  constructor() {}
  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    let movieInfo;
    this.movies.forEach(oneMovie => {
      if (oneMovie.id === id) {
        movieInfo = oneMovie;
      }
    });
    return movieInfo;
  }
}
