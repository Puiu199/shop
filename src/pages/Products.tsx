import "./../assets/icons/av6584c34aabb39f00a10.png";
import Tabel from "../components/products/Tabel";
import UserNaviBar from "../components/products/UserNaviBar";
import ProductForm from "../components/products/ProductForm";
import BackgroundImg from "../assets/img/abstract-gradient-neon-lights_23-2149279180.avif";
const Products = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className="flex items-start justify-between mx-auto w-[90%] h-screen">
        <div className="flex flex-col justify-between w-[20%] h-full">
          <UserNaviBar />
        </div>

        <div className="w-[75%] h-full flex flex-col justify-between">
          <div className="w-full h-[10%]"></div>
          <div className="w-full h-3/4 flex justify-between">
            <ProductForm />
          </div>

          <Tabel />
        </div>
      </div>
    </div>
  );
};
export default Products;
