
import {User} from "./Model";

const DEFAULT_USER = (name: string): User => ({
    profile : {
        name,
        "birthday" : 519948000000,
        "emailNotifications" : true,
        "phoneNotifications" : true
    }
});

export {DEFAULT_USER};