const Tabel = () => {
  return (
    <div className="border border-red-500 rounded-lg p-6 h-autobg-[#10121b] shadow-[0_0_10px_#2ecc71] w-[84%] m-auto mt-0">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="font-bold text-amber-50 text-2xl">Products</h1>
        <div className="border text-amber-50 bg-[#10121b] border-red-500 rounded-md w-auto cursor-pointer font-bold hover:bg-green-900 px-6 py-2 transition-all duration-300 hover:text-red">
          Category
        </div>
      </div>

      <div className="w-full border-b-2 border-indigo-500 border-t-2 mt-4 flex flex-wrap justify-between items-center text-center text-lg px-4 py-2">
        <div className="font-[Open_Sans] font-semibold ">Product-name</div>
        <div className="font-[Open_Sans] font-semibold ">Category</div>
        <div className="font-[Open_Sans] font-semibold ">Price</div>
        <div className="font-[Open_Sans] font-semibold">Sale</div>
        <div className="font-[Open_Sans] font-semibold ">In stock at/m</div>
      </div>
    </div>
  );
};

export default Tabel;
