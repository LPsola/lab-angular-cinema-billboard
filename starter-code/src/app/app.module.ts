import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MyHomeComponentComponent } from "./my-home-component/my-home-component.component";
import { MyMovieComponentComponent } from "./my-movie-component/my-movie-component.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MovieService } from "./movies-service/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
