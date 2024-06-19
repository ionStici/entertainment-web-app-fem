import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log(userData);
    setUser(users[0]);
  };

  const signUp = (newUser) => {
    console.log(newUser);
  };

  return <UserContext.Provider value={{ user, login, signUp }}>{children}</UserContext.Provider>;
}

const users = [
  {
    email: "movie_lover@email.com",
    password: "secretpassword",
    avatar: "/assets/image-avatar.svg",
  },
];
