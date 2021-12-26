import { atom } from "recoil";

export const UserState = atom({
  key: "userState",
  default: { isAdimin: false },
});
