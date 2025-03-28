export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-violet-950 px-6 py-3 text-white">
      <ul className="flex flex-row justify-center space-x-8">
        <li>
          <a href="/" className="text-white hover:text-blue-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="/aboutus" className="text-white hover:text-blue-300 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:text-blue-300 transition">
            Services
          </a>
        </li>
      </ul>

      <div className="flex space-x-4">
        <a
          href="/login"
          className="px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-4 py-2 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-gray-300 hover:text-blue-700 transition"
        >
          Register
        </a>
      </div>
    </nav>
  );
}
