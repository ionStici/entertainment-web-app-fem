import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const checkUserCache = () => {
    const loginUser = JSON.parse(localStorage.getItem("user"));
    if (loginUser && !user) setUser(loginUser);
  };
  checkUserCache();

  const clearUserCache = () => {
    localStorage.clear("user");
  };

  const login = (userData) => {
    const { loginEmail, loginPassword } = userData;
    if (!loginEmail && !loginPassword) return null;

    const loginUser = users.find((user) => user.email === loginEmail);

    if (loginUser?.password === loginPassword) {
      setUser({ email: loginEmail });
      localStorage.setItem("user", JSON.stringify({ email: loginEmail }));
    }
  };

  const logOut = () => {
    clearUserCache();
    setUser(null);
  };

  const signUp = (newUser) => {
    if (!newUser) return;

    const { signupEmail, signupPassword } = newUser;
    users.unshift({ email: signupEmail, password: signupPassword, avatar: undefined });

    setUser({ email: signupEmail });
    localStorage.setItem("user", JSON.stringify({ email: signupEmail }));
  };

  return <UserContext.Provider value={{ user, login, logOut, signUp }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext Error");
  return context;
}

export default UserProvider;

const users = [
  {
    email: "movie_lover@email.mov",
    password: "mysecretpassword",
    avatar: "/assets/image-avatar.svg",
  },
];
