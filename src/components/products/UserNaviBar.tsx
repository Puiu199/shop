export default function UserNaviBar() {
  return (
    <div className="h-screen w-50  text-white  bg-linear-to-t from-black to-green-700 shadow-lg fixed left-0 top-0 flex flex-col items-center py-6 space-y-6">
      <div className="mb-8">Ulim Wolfs</div>
      <div className="mb-8">
        <img
          src="src/assets/img/poster.webp"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
      </div>
      <nav className="flex flex-col items-center space-y-6 w-full">
        <a
          href="#products"
          className="w-full py-3 text-center   hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
        >
          📦 Products
        </a>

        <a
          href="#settings"
          className="w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
        >
          ⚙️ Settings
        </a>

        <a
          href="#basket"
          className=" w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900 relative"
        >
          🗑️ basket
          <span className=" absolute top-0 right-10 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </a>
      </nav>{" "}
      <a
        href="#logOut"
        className="absolute bottom-4 w-full py-3 text-center hover:bg-gray-100 transition-colors text-white-600 hover:text-gray-900"
      >
        ⍈ log out
      </a>
    </div>
  );
}
