
import { computed, observable } from "mobx";
import { debounce } from "throttle-debounce";

import { Profile } from "../Model";

export default class SettingsStore {

  public setName = debounce(1000, (name: string) => {
    // Firebase.userRef.child("profile/name").set(name);
  });

  @observable private _profile: Profile;
  @computed
  get profile(): Profile { return this._profile; }
  set profile(profile: Profile) { this._profile = profile; }

  constructor() {
    // Firebase.getUser().then(user => this.profile = user.profile);
  }

  public toggleEmailNotifications(done: boolean) {
    // Firebase.userRef.child("profile/emailNotifications").set(done);
  }

  public togglePhoneNotifications(done: boolean) {
    // Firebase.userRef.child("profile/phoneNotifications").set(done);
  }
}
