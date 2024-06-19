import NavigationBar from "./NavigationBar";

function Layout({ children }) {
  return (
    <main>
      <NavigationBar />
      {children}
    </main>
  );
}

export default Layout;
