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
  allUsers: [{ email: "movie_lover@me.mov", password: "mysecretpassword", avatar: "assets/image-avatar.png" }],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading_true":
      return { ...state, isLoading: true };

    case "loading_false":
      return { ...state, isLoading: false };

    case "login": {
      const user = state.allUsers.find((user) => user.email === action?.payload?.loginEmail);

      if (user?.password === action?.payload?.loginPassword) {
        return { ...state, currentUser: user };
      }

      return { ...state, error: "Invalid email or password" };
    }

    default:
      throw new Error("Unknown Action");
  }
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [{ currentUser: user, isLoading, error }, dispatch] = useReducer(reducer, initialState);

  const login = (userData) => {
    dispatch({ type: "loading_true" });
    setTimeout(() => {
      dispatch({ type: "login", payload: userData });
      dispatch({ type: "loading_false" });
    }, 1000);
  };

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
