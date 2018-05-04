import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyHomeComponentComponent } from "./my-home-component/my-home-component.component";
import { MyMovieComponentComponent } from "./my-movie-component/my-movie-component.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  // router.get('/', )
  { path: "", component: MyHomeComponentComponent },
  { path: "home", component: MyHomeComponentComponent },
  // //router.get('/contact/contact.id')
  { path: "movie/:id", component: MyMovieComponentComponent },
  // // Handle all other URLs (MUST BE LAST)
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
