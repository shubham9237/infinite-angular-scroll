import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { RedditApiService } from "../services/reddit-api.service";

@Component({
  selector: "app-reddit-container",
  templateUrl: "./reddit-container.component.html",
  styleUrls: ["./reddit-container.component.css"],
})
export class RedditContainerComponent implements OnInit {
  posts: any = [];
  loadAfter: String = "";
  isLoading = true;
  constructor(private redditService: RedditApiService) {}

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!this.isLoading) {
        this.loadMoreRedditPost();
      }
    }
  }

  ngOnInit(): void {
    this.getRedditList();
  }

  getRedditList() {
    this.redditService.getRedditPosts("").subscribe(
      (allPosts: any) => {
        this.posts = allPosts.data.children;
        this.loadAfter = allPosts.data.after;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  loadMoreRedditPost() {
    this.isLoading = true;
    this.redditService.getRedditPosts(`after=${this.loadAfter}`).subscribe(
      (allPosts: any) => {
        allPosts.data.children.forEach((post: any) => {
          this.posts.push(post);
        });

        this.loadAfter = allPosts.data.after;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
}
