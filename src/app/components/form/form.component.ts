import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  constructor(private http: HttpClient) {}
  onSubmit(data) {
    console.log(data);
    let payload = {
      accessCode: data.accessCode,
      firstName: data.firstName,
      middleInitial: data.middleInitial,
      lastName: data.lastName,
      Email: data.email,
      Phone: data.phone,
      userDetailInfo: {
        jsFramework: data.jsFramework,
        backendFramework: data.backendFramework,
        databaseSystem: data.databaseSystem,
        aboutMe: data.aboutMe,
      },
    };
    this.http
      .post("http://tgh-hewhiretest-api.azurewebsites.net/api/User", payload)
      .subscribe((payload) => {
        console.table(payload);
      });
  }
  // onDelete(data) {
  //   this.http
  //     .delete(`http://localhost:3000/users/${this.userId}`, data)
  //     .subscribe((data) => {
  //       console.table(data);
  //     });
  // }
}
