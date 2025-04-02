import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/requests";
import { useEffect, useState } from "react";
import useProduct from "../../store/useProduct";

const Tabel = () => {
  const { products, setProducts } = useProduct();
  const [take, setTake] = useState<number>(5);
  const [order, setOrder] = useState<"ASC" | "DESC">("ASC");

  const {
    fetchNextPage,
    fetchPreviousPage,
    data,
    isFetchingNextPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["get-my-products", take, order],
    queryFn: ({ pageParam }) => getProducts(pageParam, take, order),
    initialPageParam: 1,
    staleTime: 50000,
    getNextPageParam: (last) => (last.data.meta.hasNextPage ? +last.data.meta.page + 1 : null),
    getPreviousPageParam: (previous) => (previous.data.meta.hasPreviousPage ? +previous.data.meta.page - 1 : null),
  });

  useEffect(() => {
    if (data) {
      console.log(" sdadsa", data.pages);

      const allProducts = data.pages.map((el) => el.data.data).flat();
      console.log(" 1", allProducts);

      setProducts(allProducts);
    }
  }, [data]);

  const getNextPage = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };
  const getPrevPage = () => {
    if (!isFetchingPreviousPage && hasPreviousPage) {
      fetchPreviousPage();
    }
  };
  return (
    <div className="border border-red-500 rounded-lg p-6 h-autobg-[#10121b] shadow-[0_0_10px_#2ecc71] w-[84%] m-auto mt-0 overflow-y-scroll h-[300px]">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="font-bold text-amber-50 text-2xl">Products</h1>
        <button onClick={getPrevPage}>prev</button>
        <button onClick={getNextPage}>next</button>
        <div className="border text-amber-50 bg-[#10121b] border-red-500 rounded-md w-auto cursor-pointer font-bold hover:bg-green-900 px-6 py-2 transition-all duration-300 hover:text-red">
          Category
        </div>
      </div>

      <div className=" w-full border-b-2 border-indigo-500 border-t-2 mt-4 flex flex-wrap justify-between items-center text-center text-lg px-4 py-2">
        <div className="font-[Open_Sans] font-semibold ">Product-name</div>
        <div className="font-[Open_Sans] font-semibold ">Category</div>
        <div className="font-[Open_Sans] font-semibold ">Price</div>
        <div className="font-[Open_Sans] font-semibold">Created at:</div>
        <div className="font-[Open_Sans] font-semibold ">Updated at:</div>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="w-full flex flex-wrap justify-between items-center text-center text-lg px-4 py-2"
        >
          <div className="font-[Open_Sans] font-semibold ">{product.name}</div>
          <div className="font-[Open_Sans] font-semibold ">{product.category}</div>
          <div className="font-[Open_Sans] font-semibold ">{product.price}</div>
          <div className="font-[Open_Sans] font-semibold">{product?.createdAt}</div>
          <div className="font-[Open_Sans] font-semibold ">{product?.updatedAt}</div>
        </div>
      ))}
    </div>
  );
};

export default Tabel;
