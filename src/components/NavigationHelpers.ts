
import { NavigationActions } from "react-navigation"

export default class NavigationHelpers {
    static reset(navigation: any, route: string) {
        const action = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: route })
            ]
        });
        navigation.dispatch(action);
    }
}