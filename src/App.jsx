import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/base.scss';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
