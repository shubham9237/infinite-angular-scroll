import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RedditContainerComponent } from "./reddit-container/reddit-container.component";

const routes: Routes = [{ path: "", component: RedditContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
