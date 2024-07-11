import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Portfolio from './pages/portfolio';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import DashboardLayout from './pages/dashboard/layouts';
import Overview from './pages/dashboard/layouts/pages/overview';
import Skills from './pages/dashboard/layouts/pages/skills';
import Experiences from './pages/dashboard/layouts/pages/experiences';
import Projects from './pages/dashboard/layouts/pages/projects';
import Education from './pages/dashboard/layouts/pages/education';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Landing /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/portfolio', element: <Portfolio /> },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: 'skills',
          element: <Skills />,
        },
        {
          path: 'experiences',
          element: <Experiences />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'education',
          element: <Education />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
