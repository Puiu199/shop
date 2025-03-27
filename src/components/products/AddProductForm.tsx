import { useState } from "react";
import { createProduct } from "../../api/requests";
import useProduct from "../../store/useProduct";

function AddProductForm() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");

  const { setProduct } = useProduct();

  function handleAddButton() {
    if (productName && productCategory && +productPrice)
      createProduct({
        name: productName,
        price: +productPrice,
        category: productCategory,
      }).then((res) => {
        setProduct(res.data);
      });
  }

  return (
    <div className="bg-[#1f2148] rounded-lg shadow-lg w-full h-1/2 p-3">
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        type="text"
        className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
        placeholder="Enter Product Name"
      />
      <input
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        type="text"
        className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500 mt-1"
        placeholder="Enter Product Price"
      />
      <input
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        type="text"
        className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500 mt-1"
        placeholder="Enter Product Category"
      />
      <button
        onClick={() => {
          handleAddButton();
        }}
        className="text-white text-b font-bold bg-green-500 w-full border-1 border-black rounded-xl p-2 mt-1"
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProductForm;
