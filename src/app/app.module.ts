import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FormComponent } from "./components/form/form.component";
import { HttpClientModule } from "@angular/common/http";
import { HeroFormComponent } from "./components/hero-form/hero-form.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, NavComponent, FormComponent, HeroFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
