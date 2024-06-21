import { createContext, useContext, useReducer } from "react";

async function fetchAvatar(dispatch) {
  dispatch({ type: "loading_true" });

  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const avatar = data.results[0].picture.large;

    dispatch({ type: "loading_false" });
  } catch (err) {
    err;
    dispatch({ type: "loading_false" });
  }
}

const initialState = {
  currentUser: null,
  allUsers: [{ email: "movie_lover@email.mov", password: "mysecretpassword", avatar: "assets/image-avatar.png" }],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
  }
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [{ currentUser: user, isLoading, error }, dispatch] = useReducer(reducer, initialState);

  const login = () => "";
  const logOut = () => "";
  const signUp = () => "";
  const deleteUser = () => "";

  return <UserContext.Provider value={{ user, login, logOut, signUp, deleteUser, isLoading, error }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext Error");
  return context;
}

export default UserProvider;
