import { createContext, useEffect, useState } from "react";

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggingIn: boolean;
  setIsLoggingIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setIsLoggingIn(true);
    const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");
    setIsLoggedIn(loggedInUser.name ? true : false);
    setUser(loggedInUser);
    setIsLoggingIn(false);
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        loggingIn,
        setIsLoggingIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
