import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-listtile",
  templateUrl: "./listtile.component.html",
  styleUrls: ["./listtile.component.css"],
})
export class ListtileComponent {
  constructor() {}
  public noThumbnail =
    "https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s580/placeholder-image.jpg";
  @Input() thumbnail: String = "";
  @Input() title: String = "";
  @Input() author: String = "";
  @Input() post_link: String = "";
}
