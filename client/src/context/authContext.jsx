import { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ props }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = { user, setUser, setIsLogin, isLogin };

  return (
    <AuthContext.Provider value={value}>{props.childern}</AuthContext.Provider>
  );
};
