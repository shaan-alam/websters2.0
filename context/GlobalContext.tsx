import { createContext, useEffect, useState } from "react";

interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");
    setIsLoggedIn(loggedInUser.name ? true : false);
    setUser(loggedInUser);
  }, []);

  return (
    <Context.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
