import { Routes, Route } from "react-router";
import { routerList } from "./router";
import "./i18n";
import useAuthConfirm from "./hooks/useAuthConfirm";
import { useEffect } from "react";
import { socket } from "./socket";

export default function App() {
  useAuthConfirm();
  const token = "accessToken";
  useEffect(() => {
    if (token) {
      socket.connect();

      socket.on("connect", () => {
        console.log("socket is connected");
      });
      return () => {
        socket.off("connect");
        socket.disconnect();
      };
    }
  }, [token]);

  return (
    <Routes>
      {routerList.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}
