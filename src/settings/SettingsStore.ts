
import {observable, computed} from "mobx";
import  {debounce} from "throttle-debounce";

import {Profile} from "../Model";

export default class SettingsStore {

    @observable _profile: Profile;
    @computed get profile(): Profile { return this._profile; }
    set profile(profile: Profile) { this._profile = profile; }

    setName = debounce(1000, (name: string) => {
        //Firebase.userRef.child("profile/name").set(name);
    });

    constructor() {
        //Firebase.getUser().then(user => this.profile = user.profile);
    }

    toggleEmailNotifications(done: boolean) {
        //Firebase.userRef.child("profile/emailNotifications").set(done);
    }

    togglePhoneNotifications(done: boolean) {
        //Firebase.userRef.child("profile/phoneNotifications").set(done);
    }
}