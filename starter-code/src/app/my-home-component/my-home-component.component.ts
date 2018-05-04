import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movies-service/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-home-component",
  templateUrl: "./my-home-component.component.html",
  styleUrls: ["./my-home-component.component.css"]
})
export class MyHomeComponentComponent implements OnInit {
  constructor(
    public movieList: MovieService // private request: ActivatedRoute
  ) {}

  ngOnInit() {}
}
