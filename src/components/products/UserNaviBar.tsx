import { UserDto } from "../../api/types";
import { getUser } from "../../api/requests";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "../../store/useUserStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function UserNaviBar() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery<UserDto>({
    queryKey: ["get-my-user"],
    queryFn: getUser,
  });

  useEffect(() => {
    setUser(user || null);
  }, [user]);

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/login");
  };

  // const [user, setUser] = useState<UserDto | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [isError, setError] = useState<string>("");

  // useEffect(() => {
  //   getUser()
  //     .then((response) => {
  //       setUser(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError("A aparut o greseala");
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className="h-screen w-90  text-white  bg-linear-to-t from-black to-green-700 shadow-lg flex flex-col items-center py-6 space-y-6">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          {isError ? (
            <span>{error.message}</span>
          ) : (
            <div className="mb-8">
              {`${user?.firstName || "No name"}`}
              <br />
              {`${user?.lastName || "No Last Name"}`}
              <br />
              {`${user?.phoneNumber || "No Phone Number"}`}
              <br />
              <span>{user?.email || ""} </span>
              <br />
              <span>{user?.role || ""}</span>
            </div>
          )}
        </>
      )}
      <div className="mb-8">
        <img
          src="src/assets/img/poster.webp"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
      </div>
      <nav className="flex flex-col items-center space-y-6 w-full">
        <a
          href="#products"
          className="w-full py-3 text-center   hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
        >
          📦 Products
        </a>

        <div
          onClick={() => navigate("/settings")}
          className="w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
        >
          ⚙️ Settings
        </div>

        <a
          href="#basket"
          className=" w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900 relative"
        >
          🗑️ basket
          <span className=" absolute top-0 right-10 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </a>
      </nav>{" "}
      <div
        onClick={handleLogOut}
        className="absolute bottom-4 w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
      >
        ⍈ log out
      </div>
    </div>
  );
}
