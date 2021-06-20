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
    if (
      confirm(
        `Please confirm user submit with these changes ${JSON.stringify(
          payload,
          null,
          2
        )}`
      )
    ) {
      this.http
        .post("http://tgh-hewhiretest-api.azurewebsites.net/api/User", payload)
        .subscribe((res: any) => {
          alert("User Successfulyl created!");
          console.log(res);
          this.http
            .delete(
              `http://tgh-hewhiretest-api.azurewebsites.net/api/User/${res.payload.userID}/${res.payload.accessCode}`
            )
            .subscribe((res: any) => {
              alert("User Successfully deleted!");
            });
        });
    }
  }
}
