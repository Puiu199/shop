const ProductForm = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="bg-[#1f2148] p-8 rounded-lg shadow-lg w-2/3 h-full flex justify-around">
        <div className="w-1/3 h-full flex flex-col justify-center rounded-lg shadow-lg text-white text-2xl gap-10">
            <h1>Product Name: Image</h1>
            <h1>Product Price: Free</h1>
            <h1>Product Category: Background Image</h1>
        </div>
        <div className="w-2/3 h-full p-5">
            <div className="border-4 h-90/100 w-full border-white rounded-lg overflow-hidden">
            <img className="h-full w-full" src="/src/assets/img/bg2.jpg" alt="" />

            </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 m-5 rounded-lg shadow-lg w-1/3 h-full">
        <div className="bg-[#1f2148] rounded-lg shadow-lg w-full h-1/2 p-3">
          <input
            type="text"
            className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
            placeholder="Enter Product Name"
          />
          <input
            type="text"
            className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500 mt-1"
            placeholder="Enter Product Price"
          />
          <input
            type="text"
            className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500 mt-1"
            placeholder="Enter Product Category"
          />
          <button className="text-white text-b font-bold bg-green-500 w-full border-1 border-black rounded-xl p-2 mt-1">
            Add Product
          </button>
        </div>
        <div className="bg-[#1f2148] rounded-lg shadow-lg w-full h-1/2 p-3">
          <div className="w-full h-1/3 relative flex items-center justify-center">
            <input
              type="text"
              className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
              placeholder="Change Product Name"
            />
            <button className="absolute right-2 top-4">
              <img className="w-6 h-6" src="src/assets/icons/edit.png" />
            </button>
          </div>
          <div className="w-full h-1/3 relative flex items-center justify-center">
            <input
              type="text"
              className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
              placeholder="Change Product Name"
            />
            <button className="absolute right-2 top-4">
              <img className="w-6 h-6" src="src/assets/icons/edit.png" />
            </button>
          </div>
          <div className="w-full h-1/3 relative flex items-center justify-center">
            <input
              type="text"
              className="w-full border-1 bg-white border-black rounded-xl p-2 placeholder:text-gray-500"
              placeholder="Change Product Name"
            />
            <button className="absolute right-2 top-4">
              <img className="w-6 h-6" src="src/assets/icons/edit.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
