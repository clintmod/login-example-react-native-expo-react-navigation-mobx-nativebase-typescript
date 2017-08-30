
import {observable, computed} from "mobx";

export default class LoginStore {

    @observable _loading: boolean = false;
    @computed get loading(): boolean { return this._loading; }
    set loading(loading: boolean) { this._loading = loading; }

    @observable _email: string = "";
    @computed get email(): string { return this._email; }
    set email(email: string) { this._email = email; }

    @observable _password: string = "";
    @computed get password(): string { return this._password; }
    set password(password: string) { this._password = password; }

    async login(): Promise<void> {
        const {email, password} = this;
        this.loading = true;
        try {
            if (email === "") {
                throw new Error("Please provide email address.");
            }
            if (password === "") {
                throw new Error("Please provide password.");
            }
            //await Firebase.auth.signInWithEmailAndPassword(email, password);
            this.loading = false;
        } catch(e) {
            this.loading = false;
            throw e;
        }
    }
}