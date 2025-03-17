export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[url(src/assets/img/bg2.jpg)] bg-cover bg-center">
      <div className="relative z-10  max-w-4xl mx-auto px-6 py-16 sm:py-24 md:py-32">
        <h1 className="text-14xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          Welcome to Ulim Wolfs – Where Quality Meets Convenience!
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
          Discover a world of top-quality products, specially curated for you.
          Shopping made easy, safe, and enjoyable.
        </p>

        <p className="text-lg text-gray-200 mb-8 text-left max-w-2xl mx-auto">
          Whether you're looking for the latest gadgets, trendy fashion, or home
          essentials, we've got you covered. Explore our collection of premium
          products and enjoy fast delivery and secure payments.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-8 mb-4">
          Why Choose Us?
        </h2>
        <ul className="space-y-4 text-left max-w-2xl mx-auto text-gray-300">
          <li className="text-lg sm:text-xl">
            ✨ Curated Selection: Only the best products, handpicked for you.
          </li>
          <li className="text-lg sm:text-xl">
            🚚 Fast Shipping: Get your orders quickly, right to your door.
          </li>
          <li className="text-lg sm:text-xl">
            💳 Secure Payments: Safe and easy transactions for peace of mind.
          </li>
          <li className="text-lg sm:text-xl">
            ❤️ Customer Satisfaction: We’re here to help with any questions or
            concerns.
          </li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Featured Products
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg"
                alt="HomeElectronics"
                className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 transform hover:scale-105"
              />
              <h4 className="text-lg font-semibold">Home Electronics</h4>
              <p className="text-sm text-gray-500">
                Upgrade your home with cutting-edge electronics designed for
                comfort, efficiency, and style.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pinimg.com/736x/a1/5b/09/a15b09d307117ae369a24d4a955694f1.jpg"
                alt="Phones"
                className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 transform hover:scale-105"
              />
              <h4 className="text-lg font-semibold">Phones</h4>
              <p className="text-sm text-gray-500">
                Trade-in your phone to a new one!
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://quickee.com/wp-content/uploads/2022/12/Untitled-design-39.png"
                alt="Accesories"
                className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 transform hover:scale-105"
              />
              <h4 className="text-lg font-semibold">Accessories</h4>
              <p className="text-sm text-gray-500">
                Best accessories in stock at the best prices.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://img.freepik.com/free-vector/many-medical-equipments-medicine-white-background_1308-43339.jpg"
                alt="HealthCare"
                className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 transform hover:scale-105"
              />
              <h4 className="text-lg font-semibold">Health Care</h4>
              <p className="text-sm text-gray-500">
                Take care of yourself at any time and everywhere!
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200">
          Start browsing now
        </button>

        <div className="mt-12  bg-black bg-opacity-60 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl text-white mb-4">Stay Updated!</h3>
          <p className="text-gray-300 mb-4">
            Sign up for our newsletter and get the latest offers and updates
            directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg w-2/3 text-black"
            />
            <button className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
