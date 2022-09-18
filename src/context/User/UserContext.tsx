import React, { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../components/utils/firebase/firebase.utils";
interface IProvider {
  children: React.ReactNode;
}

interface IUserContext {
  currentUser: null;
  setCurrentUser: React.Dispatch<React.SetStateAction<null>>;
}

// As the actual value
export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
});

// Provider which is the component
const UserProvider = (props: IProvider) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
