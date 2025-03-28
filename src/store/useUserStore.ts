import { create } from "zustand";
import { UserDto } from "../api/types";

export interface UserState {
  user: UserDto | null;
  setUser: (user: UserDto|null) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => {
    set(() => ({
      user: user,
    }));
  },
}));

export default useUserStore;
