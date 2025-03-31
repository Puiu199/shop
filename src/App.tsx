import { Routes, Route } from "react-router";
import { routerList } from "./router";
import "./i18n";
import useAuthConfirm from "./hooks/useAuthConfirm";

export default function App() {
  useAuthConfirm();

  return (
    <Routes>
      {routerList.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}
