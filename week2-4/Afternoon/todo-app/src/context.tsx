// Create LoginContext to manage login state
import { createContext } from "react";

export interface LoginContextType {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const LoginContext = createContext<LoginContextType>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_: string | null) => {},
});
