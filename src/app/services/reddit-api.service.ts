import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RedditApiService {
  constructor(private http: HttpClient) {}

  getRedditPosts(query: String) {
    // getting posts as per query
    return this.http.get(
      `https://www.reddit.com/r/Home.json?limit=25&${query}`
    );
  }
}
