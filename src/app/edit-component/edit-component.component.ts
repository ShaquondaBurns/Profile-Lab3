import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProfileServiceService } from "../profile-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  constructor(
    private service: ProfileServiceService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {}

  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.routerInstance.navigate(["profile"]);
  }
}
