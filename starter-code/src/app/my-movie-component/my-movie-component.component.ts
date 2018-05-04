import { Component, OnInit } from "@angular/core";
import { Movie } from "../movies-data/movie-data";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../movies-service/movie.service";

@Component({
  selector: "app-my-movie-component",
  templateUrl: "./my-movie-component.component.html",
  styleUrls: ["./my-movie-component.component.css"]
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movieInfo: Movie;
  constructor(
    private request: ActivatedRoute,
    public movieList: MovieService
  ) {}

  ngOnInit() {
    this.request.paramMap.subscribe(myParams => {
      // path: contact/randId
      this.movieId = Number(myParams.get("id"));
      //req.params.randId
      this.movieInfo = this.movieList.getMovie(this.movieId);
    });
  }
}
