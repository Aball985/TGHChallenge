import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FormComponent } from "./components/form/form.component";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
  declarations: [AppComponent, NavComponent, FormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
