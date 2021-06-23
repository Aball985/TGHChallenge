import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  constructor(private http: HttpClient, private modalService: NgbModal) {}
  closeResult: String = "";
  sendResult: Boolean;

  //Modal open close
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  //Handle modal close once opened
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  //On data sent handler
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
          this.sendResult = true;
          alert("User Successfully created!");
          console.log(res);
          this.http
            .delete(
              `http://tgh-hewhiretest-api.azurewebsites.net/api/User/${res.payload.userID}/${res.payload.accessCode}`
            )
            .subscribe((res: any) => {
              alert("User Successfully deleted!");
            });
        });
    } else {
      this.sendResult = false;
    }
  }
}
