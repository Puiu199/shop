import { Routes, Route } from "react-router";
import { routerList } from "./router";

export default function App() {
  
  return (
    <Routes>
      {routerList.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}
