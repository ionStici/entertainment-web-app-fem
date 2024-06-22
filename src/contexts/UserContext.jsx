import { createContext, useContext, useReducer } from "react";

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

    case "error":
      return { ...state, error: action.payload };

    case "clear_error":
      return { ...state, error: null };

    case "login": {
      const userExists = state.allUsers.some((user) => user.email === action?.payload?.loginEmail);

      const user = state.allUsers.find((user) => user.email === action?.payload?.loginEmail);

      if (!user) {
        return { ...state, error: "User not found" };
      }

      if (user?.password === action?.payload?.loginPassword) {
        return { ...state, currentUser: user };
      }

      return { ...state, error: "Invalid email or password" };
    }

    case "logout":
      return { ...state, currentUser: null };

    case "signup": {
      const userExists = state.allUsers.some((user) => user.email === action.payload.email);
      if (userExists) return { ...state, error: "User already exists" };

      return { ...state, currentUser: action.payload, allUsers: [...state.allUsers, action.payload] };
    }

    case "delete_user": {
      const allUsers = state.allUsers.filter((user) => user.email !== action.payload);
      return { ...state, currentUser: null, allUsers };
    }

    case "log": {
      console.log(state);
      return { ...state };
    }

    default:
      throw new Error("Unknown Action");
  }
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [{ currentUser: user, isLoading, error }, dispatch] = useReducer(reducer, initialState);
  const clearError = () => dispatch({ type: "clear_error" });

  const login = (userData) => {
    dispatch({ type: "loading_true" });

    setTimeout(() => {
      dispatch({ type: "login", payload: userData });
      dispatch({ type: "loading_false" });
    }, 1000);
  };

  const logOut = () => dispatch({ type: "logout" });

  async function fetchAvatar(dispatch, newUser) {
    dispatch({ type: "loading_true" });

    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      const avatar = data.results[0].picture.large;
      newUser.avatar = avatar;

      setTimeout(() => {
        dispatch({ type: "signup", payload: newUser });
        dispatch({ type: "loading_false" });
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        dispatch({ type: "error", payload: "Something went wrong" });
        dispatch({ type: "loading_false" });
      }, 1000);
    }
  }

  const signUp = (newUser) => {
    fetchAvatar(dispatch, { email: newUser.signupEmail, password: newUser.signupPassword });
  };

  const deleteUser = (email) => {
    dispatch({ type: "loading_true" });

    setTimeout(() => {
      dispatch({ type: "delete_user", payload: email });
      dispatch({ type: "loading_false" });
    }, 500);
  };

  return <UserContext.Provider value={{ user, login, logOut, signUp, deleteUser, isLoading, error, clearError }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext Error");
  return context;
}

export default UserProvider;
