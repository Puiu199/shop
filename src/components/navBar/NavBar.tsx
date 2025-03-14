import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="flex py-5  px-2 mx-36">
      <div className="size-14">Logo</div>
      <ul className=" flex size-14 grow bor">
        <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer">
          <a href="/aboutus">AboutUs</a>
        </li>
        <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer">
          <a href=""></a>
        </li>
      </ul>
      <div className=" flex-none">
        <ul className="flex ">
          <li className="w-9">
            <a href="/login">
              <img src="src/assets/img/icons/authenticity.png" alt="" />
            </a>
          </li>
          <li className="w-9 ">
            <Link to="/register">
              <img src="src/assets/img/icons/sign-up.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
