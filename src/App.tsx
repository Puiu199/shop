import { Routes, Route } from "react-router";
import { routerList } from "./router";
import "./i18n";
import useAuthConfirm from "./hooks/useAuthConfirm";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { socket } from "./socket";
import { TooltipReinitializer } from "./components/Test123";
import "notyf/notyf.min.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  window.HSStaticMethods.autoInit();

  useAuthConfirm();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      socket.connect();

      socket.on("connect", () => {
        console.log("socket is nigger");
      });
    }

    return () => {
      socket.off("connect");
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <TooltipReinitializer />
      <ToastContainer limit={3}/>
      <Routes>
        {routerList.map((route) => {
          return <Route key={route.path} path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}
