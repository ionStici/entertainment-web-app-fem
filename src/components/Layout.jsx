import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';

function Layout({ children }) {
  return (
    <main>
      <NavigationBar />
      <SearchBar />
      {children}
    </main>
  );
}

export default Layout;
