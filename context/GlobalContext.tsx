import { createContext, useEffect, useState } from "react";

interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>({ avatar: "", email: "", name: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setIsLoggedIn(user.name ? true : false);
    setUser(user);
  }, []);

  return (
    <Context.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
