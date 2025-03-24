const Tabel = () => {
  return (
    <div className="border border-red-500 rounded-lg p-6 h-auto bg-slate-100">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="font-bold text-gray-900 text-2xl">Products</h1>
        <div className="border border-red-500 rounded-md w-auto cursor-pointer font-bold hover:bg-amber-500 p-2 transition-all duration-300">
          ChooseProduct
        </div>
      </div>

      <div className="w-full border-b-2 border-indigo-500 border-t-2 mt-4 flex flex-wrap justify-between items-center text-center text-lg px-4 py-2">
        <div className="font-[Open_Sans] font-semibold">Product-name</div>
        <div className="font-[Open_Sans] font-semibold ">Category</div>
        <div className="font-[Open_Sans] font-semibold ">Price</div>
        <div className="font-[Open_Sans] font-semibold">Sale</div>
        <div className="font-[Open_Sans] font-semibold ">In stock at/m</div>
      </div>
    </div>
  );
};

export default Tabel;
