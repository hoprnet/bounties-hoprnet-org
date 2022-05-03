import { createContext, Dispatch, SetStateAction } from "react";

export const StateContext = createContext<{
  hamburgerMenuOpen: boolean;
  toggleHamburgerMenu: Dispatch<SetStateAction<boolean>>;
}>({
  hamburgerMenuOpen: false,
  toggleHamburgerMenu: () => {},
});
