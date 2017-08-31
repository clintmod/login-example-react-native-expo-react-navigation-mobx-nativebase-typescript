
import { User } from "./Model";

const DEFAULT_USER = (name: string): User => ({
  profile: {
    birthday: 519948000000,
    emailNotifications: true,
    name,
    phoneNotifications: true,
  },
});

export { DEFAULT_USER };
