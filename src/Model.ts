export interface User {
  profile: Profile;
}

export interface Profile {
  name: string;
  birthday: number;
  emailNotifications: boolean;
  phoneNotifications: boolean;
}
