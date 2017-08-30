import * as React from "react";
import {Component} from "react";
import {Dimensions} from "react-native";
import {StyleProvider} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";
import {Font, AppLoading} from "expo";
import {useStrict, observable, computed} from "mobx";
import {observer, Provider} from "mobx-react/native";

import {Images} from "./components";
import {Login} from "./login";
import {SignUp} from "./sign-up";
import {ForgotPassword} from "./forgot-password";

import {Home} from "./home";
import {Profile} from "./profile";
import {Settings} from "./settings";
import MainStore from "./MainStore";

@observer
export default class App extends Component {

    store = new MainStore();

    @observable _ready: boolean = false;
    @observable _authStatusReported: boolean = false;
    @observable _isLoggedIn: boolean = false;

    @computed get ready(): boolean { return this._ready; }
    set ready(ready: boolean) { this._ready = ready; }

    @computed get authStatusReported(): boolean { return this._authStatusReported; }
    set authStatusReported(authStatusReported: boolean) { this._authStatusReported = authStatusReported; }

    @computed get isLoggedIn(): boolean { return this._isLoggedIn; }
    set isLoggedIn(isLoggedIn: boolean) { this._isLoggedIn = isLoggedIn; }

    componentWillMount() {
        const promises:Promise<any>[] = [];
        promises.push(
            Font.loadAsync({
                "Avenir-Book": require("./fonts/Avenir-Book.ttf"),
                "Avenir-Light": require("./fonts/Avenir-Light.ttf")
            },null)
        );
        Promise.all(promises.concat(Images.downloadAsync()))
            .then(() => this.ready = true)
            // eslint-disable-next-line
            .catch(error => console.error(error))
        ;
        useStrict(true);
        /*Firebase.init();
        Firebase.auth.onAuthStateChanged(async user => {
            this.isLoggedIn = !!user;
            if (this.isLoggedIn) {
                this.store.init();
            }
            this.authStatusReported = true;
        });*/
    }

    render() {
        const {ready, authStatusReported, isLoggedIn, store} = this;
        const onNavigationStateChange = () => undefined;
        return <Provider {...{store}}>
                {
                    ready && authStatusReported ?
                        (
                            isLoggedIn ?
                                <PublicNavigator {...{onNavigationStateChange}} />
                                :
                                <PrivateNavigator {...{onNavigationStateChange}} />
                        )
                        :
                        <AppLoading/>
                }
        </Provider>;
    }
}

const MainNavigator = StackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
}, 
{});

const navigatorOptions = {
    headerMode: "none"
};

const PrivateNavigator = StackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword }
});

const PublicNavigator = StackNavigator({
    Main: { screen: MainNavigator }
});

export {PublicNavigator};
