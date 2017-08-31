import { NavigationActions } from "react-navigation";

export default class NavigationHelpers {
  public static reset(navigation: any, route: string) {
    const action = NavigationActions.reset({
      actions: [
        NavigationActions.navigate({ routeName: route }),
      ],
      index: 0,
    });
    navigation.dispatch(action);
  }
}
