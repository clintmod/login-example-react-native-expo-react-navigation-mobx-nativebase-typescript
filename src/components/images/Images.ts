import { Asset } from "expo";

export default class Images {

  public static login = require("./login.jpg");
  public static signUp = require("./signUp.jpg");
  public static drawer = require("./drawer.jpg");
  public static home = require("./home.jpg");
  public static lists = require("./lists.jpg");
  public static timeline = require("./timeline.jpg");

  public static defaultAvatar = require("./avatars/default-avatar.jpg");
  public static avatar1 = require("./avatars/avatar-1.jpg");
  public static avatar2 = require("./avatars/avatar-2.jpg");
  public static avatar3 = require("./avatars/avatar-3.jpg");

  public static foodGroup = require("./groups/food.jpg");
  public static workGroup = require("./groups/work.jpg");
  public static vacationGroup = require("./groups/vacation.jpg");
  public static citiesGroup = require("./groups/cities.jpg");

  public static downloadAsync(): Array<Promise<any>> {
    return [
      Asset.fromModule(Images.login).downloadAsync(),
      Asset.fromModule(Images.signUp).downloadAsync(),
      Asset.fromModule(Images.drawer).downloadAsync(),
      Asset.fromModule(Images.home).downloadAsync(),
      Asset.fromModule(Images.lists).downloadAsync(),
      Asset.fromModule(Images.timeline).downloadAsync(),

      Asset.fromModule(Images.defaultAvatar).downloadAsync(),
      Asset.fromModule(Images.avatar1).downloadAsync(),
      Asset.fromModule(Images.avatar2).downloadAsync(),
      Asset.fromModule(Images.avatar3).downloadAsync(),

      Asset.fromModule(Images.foodGroup).downloadAsync(),
      Asset.fromModule(Images.workGroup).downloadAsync(),
      Asset.fromModule(Images.vacationGroup).downloadAsync(),
      Asset.fromModule(Images.citiesGroup).downloadAsync(),
    ];
  }
}
