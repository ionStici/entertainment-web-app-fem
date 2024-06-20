import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setUser({ email: loginUser.email, avatar: loginUser.avatar });
      localStorage.setItem("user", JSON.stringify({ email: loginUser.email, avatar: loginUser.avatar }));
    }
  };

  const logOut = () => {
    clearUserCache();
    setUser(null);
  };

  async function signUp(newUser) {
    if (!newUser) return;
    setIsLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const avatar = data.results[0].picture.large;

      setTimeout(() => {
        setIsLoading(false);

        const { signupEmail, signupPassword } = newUser;
        users.unshift({ email: signupEmail, password: signupPassword, avatar });

        setUser({ email: signupEmail, avatar });
        localStorage.setItem("user", JSON.stringify({ email: signupEmail, avatar }));
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }

  return <UserContext.Provider value={{ user, login, logOut, signUp, isLoading }}>{children}</UserContext.Provider>;
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
    avatar: "assets/image-avatar.png",
  },
];
