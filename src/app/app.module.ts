import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListtileComponent } from "./listtile/listtile.component";
import { HttpClientModule } from "@angular/common/http";
import { RedditContainerComponent } from './reddit-container/reddit-container.component';

@NgModule({
  declarations: [AppComponent, ListtileComponent, RedditContainerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
