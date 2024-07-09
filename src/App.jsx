import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Portfolio from "./pages/portfolio";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";


function App() {

  const router = createBrowserRouter([

    {path: '/', element: <Landing />},
    {path: '/signin', element: <SignIn />},
    {path: '/signup', element: <SignUp />},
    {path: '/portfolio', element: <Portfolio />},
    {path: '/dashboard', element: <Dashboard />},

  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
