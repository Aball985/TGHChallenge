import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  userId: Number = 19;
  onSubmit(data) {
    this.http.post("http://localhost:3000/users", data).subscribe((data) => {
      console.table(data);
    });
  }

  onDelete(data) {
    this.http
      .delete(`http://localhost:3000/users/${this.userId}`, data)
      .subscribe((data) => {
        console.table(data);
      });
  }
}
