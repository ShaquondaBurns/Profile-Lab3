import { Component, OnInit } from "@angular/core";
import { ProfileServiceService } from "../profile-service.service";
import { UserProfile } from "../interfaces/user-profile";

@Component({
  selector: "profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  profile: UserProfile;
  constructor(private service: ProfileServiceService) {}

  ngOnInit(): void {
    this.profile = this.service.getUserProfile();
  }
}
