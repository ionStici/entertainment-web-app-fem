import NavigationBar from './NavigationBar';

function Layout({ children }) {
  return (
    <main>
      <NavigationBar />
      <div></div>
      {children}
    </main>
  );
}

export default Layout;
