import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import Portfolio from './pages/portfolio';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import DashboardLayout from './pages/dashboard/layouts';
import Overview from './pages/dashboard/layouts/pages/overview';
import Skills from './pages/dashboard/layouts/pages/skills';
import Experiences from './pages/dashboard/layouts/pages/experiences';
import Projects from './pages/dashboard/layouts/pages/projects';
import Education from './pages/dashboard/layouts/pages/education';
import Achievements from './pages/dashboard/layouts/pages/achievements';
import Volunteer from './pages/dashboard/layouts/pages/volunteer';
import UserProfile from './pages/dashboard/layouts/pages/profile';
import AddProfile from './components/addProfile';
import AddSkills from './components/addSkills';
import AddExperience from './components/addExperience';
import AddProjects from './components/addProjects';
import AddAchievements from './components/addAchievements';
import AddEducation from './components/addEducation';
import AddVolunteer from './components/addVolunteer';
import PreviewPage from './pages/previewPage';
import AuthLayout from './pages/dashboard/layouts/authLayout';
import { apiGetUserDetails } from './services/preview';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <SignIn /> },
    {
      element: <AuthLayout />,
      children: [
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
      ],
    },

    { path: '/portfolio', element: <Portfolio /> },
    { path: '/preview', element: <PreviewPage /> },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: 'profile',
          element: <UserProfile />,
        },
        {
          path: 'profile/add',
          element: <AddProfile />,
        },
        // {
        //   path: 'preview/:username',
        //   element: <Preview />,
        //   loader: async ({ params }) => {
        //     const username = params.username;
        //     try {
        //       const response = await apiGetUserDetails(username);
        //       const userProfileData = response?.data.user;
        //       return userProfileData;
        //     } catch (error) {
        //       toast.error('An error occured');
        //       return null;
        //     }
        //   },
        // },
        // {
        //   path: '*',
        //   element: <NotFound />,
        // },
        {
          path: 'skills',
          element: <Skills />,
        },
        {
          path: 'skills/add',
          element: <AddSkills />,
        },
        {
          path: 'experiences',
          element: <Experiences />,
        },
        {
          path: 'experiences/add',
          element: <AddExperience />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'projects/add',
          element: <AddProjects />,
        },
        {
          path: 'achievements',
          element: <Achievements />,
        },
        {
          path: 'achievements/add',
          element: <AddAchievements />,
        },
        {
          path: 'education',
          element: <Education />,
        },
        {
          path: 'education/add',
          element: <AddEducation />,
        },
        {
          path: 'volunteer',
          element: <Volunteer />,
        },
        {
          path: 'volunteer/add',
          element: <AddVolunteer />,
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
