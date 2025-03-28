import "./../assets/icons/av6584c34aabb39f00a10.png";
import Tabel from "../components/products/Tabel";
import UserNaviBar from "../components/products/UserNaviBar";
import ProductForm from "../components/products/ProductForm";
const Products = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
      <div className=" w-[90%] h-[100vh] m-auto flex flex-row justify-between">
        <div>
          <UserNaviBar />
        </div>

        <div className="w-[80%] flex flex-col ">
          <div className="flex flex-row justify-between">
            <ProductForm />
          </div>

          <Tabel />
        </div>
      </div>
    </div>
  );
};
export default Products;
