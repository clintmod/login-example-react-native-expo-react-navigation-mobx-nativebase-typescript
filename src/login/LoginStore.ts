
import { computed, observable } from "mobx";

export default class LoginStore {

  @observable
  private _loading: boolean = false;
  @computed get loading(): boolean { return this._loading; }
  set loading(loading: boolean) { this._loading = loading; }

  @observable
  private _email: string = "";
  @computed get email(): string { return this._email; }
  set email(email: string) { this._email = email; }

  @observable
  private _password: string = "";
  @computed get password(): string { return this._password; }
  set password(password: string) { this._password = password; }

  public async login(): Promise<void> {
    this.loading = true;
    try {
      if (this.email === "") {
        throw new Error("Please provide email address.");
      }
      if (this.password === "") {
        throw new Error("Please provide password.");
      }
      // await Firebase.auth.signInWithEmailAndPassword(email, password);
      this.loading = false;
    } catch (e) {
      this.loading = false;
      throw e;
    }
  }
}
