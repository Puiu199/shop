import "./../assets/icons/av6584c34aabb39f00a10.png";
import Tabel from "../components/products/Tabel";
import UserNaviBar from "../components/products/UserNaviBar";
import ProductForm from "../components/products/ProductForm";
const Products = () => {
  return (
    <div>
      <div className="flex items-start justify-between mx-auto w-full h-[718px]">
        <div className="flex flex-col justify-between w-[20%] h-full">
          {/* <div className="w-full h-[50%]">
            <ul className="flex flex-col justify-evenly">
              <li className=" text-white text-lg my-[15%]">
                <a href="/">Home</a>
              </li>
              <li className="text-white text-lg my-[15%]">
                <a href="/aboutus">About Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full h-[8%]">
            <ul className="flex justify-evenly">
              <li className="text-white">
                <a href="/register">Register</a>
              </li>
              <li className="text-white">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div> */}
          <UserNaviBar />
        </div>


        <div className="w-[75%] h-full flex flex-col justify-between">
          <div className="w-full h-[10%]">
            
          </div>
          <div className="w-full h-3/4 flex justify-between">
            {/* <div className="h-full w-[60%] bg-red-700 rounded-lg"></div>
            <div className="h-full w-[35%] flex items-end flex-col justify-between">
              <div className="w-full bg-blue-700 h-[45%] rounded-lg "></div>
              <div className="w-full bg-blue-700 h-[45%] rounded-lg"></div>
            </div> */}
          <ProductForm />

          </div>

          <Tabel />
        </div>
      </div>
    </div>
  );
};
export default Products;
