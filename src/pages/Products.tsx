import "./../assets/icons/av6584c34aabb39f00a10.png";
import Tabel from "../components/products/Tabel";
import UserNaviBar from "../components/products/UserNaviBar";
import ProductForm from "../components/products/ProductForm";
import { useEffect, useState } from "react";
import { socket } from "../socket";

const Products = () => {
  const [value, setValue] = useState("");

  const handleMessage = () => {
    const sendData = {
      from: "a7895fd6-cf7e-4359-bcc9-8c4bde71da01",
      to: "4dfafdf0-49bc-4478-ad61-1708388d286f",
      content: "sukanikadik",
    };

    socket.emit("create-message", sendData);
  };

  useEffect(() => {
    socket.on("message-created", (data) => {
      console.log(data);
    });

    socket.on("message-error", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("message-created");
      socket.off("message-error");
    };
  }, []);
  return (
    // <div className="bg-gradient-to-b from-gray-900 to-green-900 min-h-screen">
    //   <div className=" w-[90%] h-[100vh] m-auto flex flex-row justify-between">
    //     <div>
    //       <UserNaviBar />
    //     </div>

    //     <div className="w-[80%] flex flex-col ">
    //       <div className="flex flex-row justify-between">
    //         <ProductForm />
    //       </div>

    //       <Tabel />
    //     </div>
    //   </div>
    // </div>
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleMessage}>Send message</button>
    </div>
  );
};
export default Products;
