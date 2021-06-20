import { Component, OnInit } from "@angular/core";

interface SearchResults {
  accessCode: Number;
  userId: Number;
  firstName: String;
  middleInitial: String;
  lastName: String;
  email: String;
  phone: string;
  userDetailInfo: {
    userDetailID: Number;
    userID: Number;
    jsFramework: String;
    backendFramework: String;
    databaseSystem: String;
    aboutMe: String;
  };
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  log(x) {
    console.log(x);
  }
}
