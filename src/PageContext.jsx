import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');

  const goHome = () => setCurrentPage('home');
  const goMovies = () => setCurrentPage('movies');
  const goSeries = () => setCurrentPage('series');
  const goBookmarks = () => setCurrentPage('bookmarks');
  const goSearch = () => setCurrentPage('search');

  const pages = [
    { page: 'home', go: goHome },
    { page: 'movies', go: goMovies },
    { page: 'series', go: goSeries },
    { page: 'bookmarks', go: goBookmarks },
  ];

  return (
    <PageContext.Provider value={{ currentPage, pages, goHome, goSearch }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw new Error('PageContext Error');
  return context;
}

export default PageProvider;
