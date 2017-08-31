
import * as _ from "lodash";
import { computed, observable } from "mobx";
import moment from "moment";

import { User } from "./Model";

export default class MainStore {
  @observable
  private _user: User;
  @computed get user(): User { return this._user; }
  set user(user: User) { this._user = user; }
}
