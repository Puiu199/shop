import useProduct from "../../store/useProduct";
import AddProductForm from "./AddProductForm";
import ChangeProductForm from "./ChangeProductForm";

const ProductForm = () => {
  const { product } = useProduct();

  return (
    <div className="flex items-center justify-center w-full mt-30">
      <div className="bg-[#10121b] shadow-[0_0_10px_#2ecc71]  p-8 rounded-lg shadow-lg w-[50%] h-[92%] flex justify-around">
        <div className="w-1/3 h-full flex flex-col justify-center rounded-lg shadow-lg text-white text-2xl gap-10">
          <h1>Product Name: {product?.name}</h1>
          <h1>Product Price: {product?.price}</h1>
          <h1>Product Category: {product?.category}</h1>
        </div>
        <div className="w-2/3 h-full p-5">
          <div className="border-4 h-90/100 w-full border-white rounded-lg overflow-hidden">
            <img className="h-full w-full" src="/src/assets/img/bg2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 m-5 rounded-lg shadow-lg w-1/3 h-full">
        <AddProductForm />

        <ChangeProductForm />
      </div>
    </div>
  );
};

export default ProductForm;
