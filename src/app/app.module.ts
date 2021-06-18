import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
