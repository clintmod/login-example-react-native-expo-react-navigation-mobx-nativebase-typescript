
import {observable, computed} from "mobx";

export default class SignUpStore {

    @observable _loading: boolean = false;
    @computed get loading(): boolean { return this._loading; }
    set loading(loading: boolean) { this._loading = loading; }

    @observable _name: string = "";
    @computed get name(): string { return this._name; }
    set name(name: string) { this._name = name; }

    @observable _email: string = "";
    @computed get email(): string { return this._email; }
    set email(email: string) { this._email = email; }

    @observable _password: string = "";
    @computed get password(): string { return this._password; }
    set password(password: string) { this._password = password; }

    async signIn(): Promise<void> {
        const {name, email, password} = this;
        this.loading = true;
        try {
            if (name === "") {
                throw new Error("Please provide name.");
            }
            if (email === "") {
                throw new Error("Please provide email address.");
            }
            if (password === "") {
                throw new Error("Please provide password.");
            }
            /*const user = new User() // await Firebase.auth.createUserWithEmailAndPassword(email, password);
            await user.updateProfile({ displayName: name });
            await Firebase.setDefaultUserIfEmpty(user);*/
            this.loading = false;
        } catch(e) {
            this.loading = false;
            throw e;
        }
    }
}