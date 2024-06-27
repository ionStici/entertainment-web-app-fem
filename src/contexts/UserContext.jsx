import { createContext, useContext, useReducer } from "react";
import { movies } from "./movies";
import { cloneDeep } from "lodash";
import toast from "react-hot-toast";

const initialState = {
  currentUser: null,
  defaultMovies: cloneDeep(movies),
  allUsers: [{ email: "movie_lover@me.mov", password: "mysecretpassword", avatar: "assets/image-avatar.png", movies: cloneDeep(movies) }],
  feedback: null,
  error: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading_true":
      return { ...state, isLoading: true };

    case "loading_false":
      return { ...state, isLoading: false };

    case "feedback":
      return { ...state, feedback: action.payload };

    case "clear_feedback":
      return { ...state, feedback: null };

    case "error":
      return { ...state, error: action.payload };

    case "clear_error":
      return { ...state, error: null };

    case "login": {
      const user = state.allUsers.find((user) => user.email === action.payload.loginEmail);

      if (!user) {
        return { ...state, error: "User not found" };
      }

      if (user?.password === action.payload.loginPassword) {
        return { ...state, currentUser: user, feedback: "You are successfully logged in" };
      }

      return { ...state, error: "Invalid email or password" };
    }

    case "logout":
      return { ...state, currentUser: null, feedback: "You have been successfully logged out" };

    case "signup": {
      const userExists = state.allUsers.some((user) => user.email === action.payload.email);
      if (userExists) return { ...state, error: "User already exists" };

      return {
        ...state,
        currentUser: action.payload,
        allUsers: [...state.allUsers, action.payload],
        feedback: "You have successfully registered and logged in",
      };
    }

    case "delete_user": {
      const allUsers = state.allUsers.filter((user) => user.email !== action.payload);
      return { ...state, currentUser: null, allUsers, feedback: "Account deleted successfully" };
    }

    case "bookmark": {
      let message = "";

      if (!state.currentUser) {
        const newMovies = state.defaultMovies.map((movie) => {
          if (movie.title === action.payload) {
            if (!movie.isBookmarked) message = "Bookmark added";
            if (movie.isBookmarked) message = "Bookmark removed";

            return { ...movie, isBookmarked: !movie.isBookmarked };
          } else return movie;
        });

        return { ...state, defaultMovies: newMovies, feedback: message };
      }

      const newMovies = state.currentUser.movies.map((movie) => {
        if (movie.title === action.payload) {
          if (!movie.isBookmarked) message = "Bookmark added";
          if (movie.isBookmarked) message = "Bookmark removed";

          return { ...movie, isBookmarked: !movie.isBookmarked };
        } else return movie;
      });

      const allUsers = state.allUsers.map((user) => {
        if (user.email === state.currentUser.email) {
          return { ...user, movies: newMovies };
        } else return user;
      });

      return {
        ...state,
        currentUser: { ...state.currentUser, movies: newMovies },
        allUsers,
        feedback: message,
      };
    }

    default:
      throw new Error("Unknown Action");
  }
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [{ currentUser: user, defaultMovies, isLoading, feedback, error }, dispatch] = useReducer(reducer, initialState);

  const clearError = () => dispatch({ type: "clear_error" });
  const clearFeedback = () => dispatch({ type: "clear_feedback" });

  const handleFeedback = () => {
    toast.success(feedback, { style: { minWidth: 200, textAlign: "center" } });
    clearFeedback();
  };

  const handleError = () => {
    toast.error(error);
    clearError();
  };

  const login = (userData) => {
    dispatch({ type: "loading_true" });

    setTimeout(() => {
      dispatch({ type: "login", payload: userData });
      dispatch({ type: "loading_false" });
    }, 500);
  };

  const logOut = () => {
    dispatch({ type: "loading_true" });

    setTimeout(() => {
      dispatch({ type: "logout" });
      dispatch({ type: "loading_false" });
    }, 250);
  };

  async function fetchAvatar(newUser) {
    dispatch({ type: "loading_true" });

    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      newUser.avatar = data.results[0].picture.large;

      setTimeout(() => {
        dispatch({ type: "signup", payload: newUser });
        dispatch({ type: "loading_false" });
      }, 750);
    } catch (err) {
      setTimeout(() => {
        dispatch({ type: "error", payload: "Something went wrong" });
        dispatch({ type: "loading_false" });
      }, 750);
    }
  }

  const signUp = (newUser) => {
    fetchAvatar({
      email: newUser.signupEmail,
      password: newUser.signupPassword,
      movies: cloneDeep(movies),
    });
  };

  const deleteUser = (email) => {
    dispatch({ type: "loading_true" });

    setTimeout(() => {
      dispatch({ type: "delete_user", payload: email });
      dispatch({ type: "loading_false" });
    }, 500);
  };

  const toggleBookmark = (title) => {
    dispatch({ type: "bookmark", payload: title });
  };

  let data = user ? user.movies : defaultMovies;

  return (
    <UserContext.Provider
      value={{
        user,
        data,
        toggleBookmark,
        isLoading,
        login,
        logOut,
        signUp,
        deleteUser,
        feedback,
        error,
        handleError,
        handleFeedback,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext Error");
  return context;
}

export default UserProvider;
