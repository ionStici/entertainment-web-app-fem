import { useUser } from "../contexts/UserContext";
import NavigationBar from "./NavigationBar";

function Layout({ children }) {
  const { feedback, clearFeedback } = useUser();

  return (
    <main>
      <NavigationBar />
      {children}
    </main>
  );
}

export default Layout;
