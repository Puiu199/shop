import { useState } from "react";
import { changeProduct } from "../../api/requests";
import useProduct from "../../store/useProduct";

function ChangeProductForm() {
  const { product, setProductName, setProductPrice, setProductCategory } = useProduct();
  const [changeProductName, setChangeProductName] = useState<string>("");
  const [changeProductPrice, setChangeProductPrice] = useState<string>("");
  const [changeProductCategory, setChangeProductCategory] = useState<string>("");

  function changeName() {
    changeProduct(product.id, { name: changeProductName }).then(() => {
      setProductName(changeProductName);
      setChangeProductName("");
    });
  }

  function changePrice() {
    changeProduct(product.id, { price: +changeProductPrice }).then(() => {
      setProductPrice(+changeProductPrice);
      setChangeProductPrice("");
    });
  }
  function changeCategory() {
    changeProduct(product.id, { category: changeProductCategory }).then(() => {
      setProductCategory(changeProductCategory);
      setProductCategory("");
    });
  }

  return (
    <div className="bg-[#10121b] rounded-lg shadow-lg w-full  p-10">
      <div className="w-full h-1/3 relative flex items-center justify-center">
        <input
          onChange={(e) => setChangeProductName(e.target.value)}
          type="text"
          className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
          placeholder="Change Product Name"
        />
        <button onClick={changeName} className="absolute right-2 top-4 cursor-pointer">
          <img className="w-6 h-6" src="src/assets/icons/edit.png" />
        </button>
      </div>
      <div className="w-full h-1/3 relative flex items-center justify-center">
        <input
          onChange={(e) => setChangeProductPrice(e.target.value)}
          type="text"
          className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
          placeholder="Change Product Price"
        />
        <button onClick={changePrice} className="absolute right-2 top-4 cursor-pointer">
          <img className="w-6 h-6" src="src/assets/icons/edit.png" />
        </button>
      </div>
      <div className="w-full h-1/3 relative flex items-center justify-center">
        <input
          onChange={(e) => setChangeProductCategory(e.target.value)}
          type="text"
          className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
          placeholder="Change Product Category"
        />
        <button onClick={changeCategory} className="absolute right-2 top-4 cursor-pointer">
          <img className="w-6 h-6" src="src/assets/icons/edit.png" />
        </button>
      </div>
    </div>
  );
}
export default ChangeProductForm;
