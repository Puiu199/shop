import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const useAuthConfirm = () => {
  const authRoutes = ["products", "settings"];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("accessToken") ? true : false;
    const isAuthPage = authRoutes.find((path) => location.pathname.includes(path)) ? true : false;

    if (!token && isAuthPage) {
      navigate("/login");
    }
  }, [location.pathname]);

  return null;
};

export default useAuthConfirm;
