import { useNavigate } from "react-router";

const AboutAs = () => {
  const navigate = useNavigate();
  return (
    // bg set !!!
    <div className="relative min-h-screen bg-[url(src/images/NEUMORPHIC_CIRCLES_BACKGROUND.jpg)] bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      <div className="relative z-10 text-left max-w-4xl mx-auto px-6 py-16 sm:py-24 md:py-32">
        <h1 className="text-4xl  text-left  sm:text-5xl font-extrabold text-white mb-4 leading-tight">About Us</h1>

        <p className="  text-gray-200 ">
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="text-4xl sm:text-5xl font-extrabold  text-black mb-4 leading-tight"
          >
            Welcome to Ulim Wolfs!
          </h1>
          At Ulim Wolfs, we are passionate about technology, especially application development and software. Discover
          a world of high-quality products, specially selected for you. Shopping has become easy, safe and enjoyable.
          Our mission is . We believe in innovation, sustainability and a grateful and satisfied customer, and these
          principles guide everything we do. We are distinguished by our commitment to offerings such as quality,
          creativity or a customer-centric approach. Whether you are a target audience such as a business owner, a
          student or an enthusiast, we are here to meet your needs, solve your problems or inspire you to the right
          path. Our team consists of experienced professionals, creative people or industry experts. Together, we
          strive to change the world for the better, push the boundaries or provide excellence. Thank you for choosing
          Ulim Wolfs! We are excited to have you on this journey with us and look forward to engaging with our
          audience, being of service to you, and working with you to grow together and discover new horizons!"
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          Let's discover new horizons together!"
        </h1>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200">
          Home page
        </button>
      </div>
    </div>
  );
};

export default AboutAs;
