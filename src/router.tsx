import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import AboutAs from "./pages/AboutAs";
import LayoutNavBar from "./components/layout/LayoutNavBar";

export const routerList = [
  {
    path: "/",
    element: (
      <LayoutNavBar>
        <LandingPage />
      </LayoutNavBar>
    ),
  },
  {
    path: "/register",
    element: (
      <LayoutNavBar>
        <Register />
      </LayoutNavBar>
    ),
  },
  {
    path: "/login",
    element: (
      <LayoutNavBar>
        <LoginPage />
      </LayoutNavBar>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <LayoutNavBar>
        <AboutAs />
      </LayoutNavBar>
    ),
  },
  {
    path: "*",
    element: (
      <LayoutNavBar>
        <LandingPage />
      </LayoutNavBar>
    ),
  },
];
