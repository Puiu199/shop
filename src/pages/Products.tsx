import "./../assets/icons/av6584c34aabb39f00a10.png";
import Tabel from "../components/products/Tabel";
import UserNaviBar from "../components/products/UserNaviBar";
import ProductForm from "../components/products/ProductForm";
const Products = () => {
  return (
    <div>
      <div className="flex items-start justify-between mx-auto w-full h-[718px]">
        <div className="flex flex-col justify-between w-[20%] h-full">
        
          <UserNaviBar />
        </div>


        <div className="w-[75%] h-full flex flex-col justify-between">
          <div className="w-full h-[10%]">
            
          </div>
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
