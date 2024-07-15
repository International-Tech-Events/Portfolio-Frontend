import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Portfolio from "./pages/portfolio";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import BasicInfo from "./components/basicInfo";
import TabNavigation from "./components/rightTabs";
import SkillCard from "./components/skillTile";


function App() {

  const router = createBrowserRouter([

    {path: '/', element: <Landing />},
    {path: '/signin', element: <SignIn />},
    {path: '/signup', element: <SignUp />},
    {path: '/portfolio', element: <Portfolio />},
    {path: '/dashboard', element: <Dashboard />},
    {path: '/basic-info', element: <BasicInfo />},
    {path: '/tabs', element: <TabNavigation />},
    {path: '/skill-card', element: <SkillCard />},

  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
