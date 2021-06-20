import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"],
})
export class HeroFormComponent {
  log(x) {
    console.log(x);
  }
}
