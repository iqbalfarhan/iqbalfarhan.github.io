import { RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
