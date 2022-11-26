import { createContext, useContext, useState } from "react";
import services from "../../services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    window.localStorage.getItem("@weretogo:userId") || null
  );

  const signin = async (data) => {
    const response = await services.signin(data);
    if (response) {
      setUserId(response._id);
      window.localStorage.setItem("@weretogo:userId", response._id);
    }
  };

  const signup = async (data) => {
    const response = await services.signup(data);
    if (response) {
      setUserId(response._id);
      window.localStorage.setItem("@weretogo:userId", response._id);
    }
  };

  const logout = async () => {
    setUserId(null);
    window.localStorage.removeItem("@weretogo:userId");
  };

  return (
    <UserContext.Provider value={{ userId, signin, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
