import { createContext } from "react";

const UserContext = createContext();

function UserProvider() {}

const users = [
  {
    email: "movie_lover@domain.com",
    password: "secretpassword",
    avatar: "",
  },
];
