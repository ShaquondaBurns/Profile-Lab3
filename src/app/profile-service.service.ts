import { Injectable, Input } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  profile: UserProfile = {
    name: "QB",
    contact: "slburns@yahoo.com",
    bio: "Sweet is my new word"
  };

  constructor() {}

  setUserProfile(newProfileObject: UserProfile) {
    this.profile = newProfileObject;
  }

  getUserProfile() {
    return this.profile;
  }
}
