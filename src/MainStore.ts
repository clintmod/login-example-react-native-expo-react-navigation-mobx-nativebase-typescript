
import moment from "moment";
import * as _ from "lodash";
import {observable, computed} from "mobx";

import {User} from "./Model";

export default class MainStore {
    @observable _user: User;
    @computed get user(): User { return this._user; }
    set user(user: User) { this._user = user; }
    init() {}
}