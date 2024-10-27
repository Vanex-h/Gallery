import React from "react";
import  { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa"; // Import icons

const images = [
  "https://i.ibb.co/DYDx3fd/IMG-1879.jpg",
  "https://i.ibb.co/HDgxyvL/IMG-1880.jpg",
  "https://i.ibb.co/LJCzWB9/IMG-1882.jpg",
  "https://i.ibb.co/rkJTFtg/IMG-1883.jpg",
  "https://i.ibb.co/9NB5Z8q/IMG-1884.jpg",
  "https://i.ibb.co/LCCz8rk/IMG-1885.jpg",
  "https://i.ibb.co/88n0pct/IMG-1886.jpg",
  "https://i.ibb.co/pJCq4wM/IMG-1887.jpg",
  "https://i.ibb.co/w0wZZR9/IMG-1888-1.jpg",
  "https://i.ibb.co/NrYcGFj/IMG-1890.jpg",
  "https://i.ibb.co/HtzkMJH/IMG-1891.jpg",
  "https://i.ibb.co/ynRWJrH/IMG-1892.jpg",
  "https://i.ibb.co/f1ZTPFX/IMG-1893.jpg",
  "https://i.ibb.co/TwHjrsR/IMG-1894.jpg",
  "https://i.ibb.co/xDqHCky/IMG-1895.jpg",
  "https://i.ibb.co/xLj8JNt/IMG-1896.jpg",
  "https://i.ibb.co/2NCBM60/IMG-1897.jpg",
  "https://i.ibb.co/Nm33jhj/IMG-1898.jpg",
  "https://i.ibb.co/JsV7cmY/IMG-1899-1.jpg",
  "https://i.ibb.co/p3JV4kZ/IMG-1900.jpg",
  "https://i.ibb.co/DCLpng4/IMG-1901.jpg",
  "https://i.ibb.co/gF3xXPg/IMG-1902.jpg",
  "https://i.ibb.co/h70Dskb/IMG-1903.jpg",
  "https://i.ibb.co/D7xyg7Q/IMG-1904.jpg",
  "https://i.ibb.co/FxfJkgW/IMG-1905.jpg",
  "https://i.ibb.co/B4QVMWq/IMG-1906.jpg",
  "https://i.ibb.co/gzJYVQT/IMG-1907.jpg",
  "https://i.ibb.co/686HPtx/IMG-1909.jpg",
  "https://i.ibb.co/WfpkCm6/IMG-1910.jpg",
  "https://i.ibb.co/564X8hF/IMG-1911.jpg",
  "https://i.ibb.co/dPn9PxJ/IMG-1912.jpg",
  "https://i.ibb.co/S3T2Dv6/IMG-1913.jpg",
  "https://i.ibb.co/HNh38Hj/IMG-1914.jpg",
  "https://i.ibb.co/JRG74ss/IMG-1915.jpg",
  "https://i.ibb.co/LP0JfB5/IMG-1916.jpg",
  "https://i.ibb.co/PDcLrFs/IMG-1917.jpg",
  "https://i.ibb.co/3kD7tQB/IMG-1918.jpg",
  "https://i.ibb.co/jGT1tQD/IMG-1919.jpg",
  "https://i.ibb.co/HBPY0G4/IMG-1920.jpg",
  "https://i.ibb.co/BwZVfZd/IMG-1921.jpg",
  "https://i.ibb.co/D8x102N/IMG-1922.jpg",
  "https://i.ibb.co/yNWDpxL/IMG-1923.jpg",
  "https://i.ibb.co/VTcXT94/IMG-1924.jpg",
  "https://i.ibb.co/cvZ3X9c/IMG-1925.jpg",
  "https://i.ibb.co/hYYgMsk/IMG-1926.jpg",
  "https://i.ibb.co/KVDsCr4/IMG-1927.jpg",
  "https://i.ibb.co/M5NJ9W4/IMG-1928.jpg",
  "https://i.ibb.co/cgQdht5/Whats-App-Image-2024-10-26-at-00-46-00.jpg",
  "https://i.ibb.co/Jz7mFj0/IMG-723-png.jpg",
  "https://i.ibb.co/Y7LHm7g/IMG-1929.jpg",
  "https://i.ibb.co/8MqJFDc/IMG-1930.jpg",
  "https://i.ibb.co/Y0F9xLV/IMG-744.jpg",
];


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="image/:index" element={<ImagePopup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

// Layout Component for Header and Navigation
const Layout = () => (
  <div className="container mx-auto p-4">
    <header className="flex items-center justify-between p-4 bg-white text-black border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="https://i.ibb.co/p3kHsSx/Whats-App-Image-2024-10-28-at-00-11-39-6d8e8661.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </Link>
        <h1 className="text-xl font-bold">Image Gallery</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/contact" className="text-blue-500">
          Contact
        </Link>
      </div>
    </header>
    <Outlet />
  </div>
);

// Gallery Component
const Gallery = () => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
    {images.map((imageUrl, index) => (
      <div key={index} className="ml-2 mt-2">
        <Link to={`/image/${index}`}>
          <img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageUrl}
            alt={`Gallery Image ${index + 1}`}
          />
        </Link>
      </div>
    ))}
  </div>
);

// Contact Page Component with Icons
const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""; // Reset overflow when component unmounts
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-[67vh]  bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/N6Qdm0w/Whats-App-Image-2024-10-28-at-00-11-39-871ec12b.jpg')",
      }}
    >
      {/* Dark overlay layer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main content */}
      <div className="relative flex bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Left Section - Contact Information */}
        <div className="w-1/2 p-6 space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex items-start mb-4">
            <FaHome className="text-2xl text-teal-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-teal-400">Address</h4>
              <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <FaPhone className="text-2xl text-teal-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-teal-400">Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-2xl text-teal-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-teal-400">Email</h4>
              <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>

        {/* Right Section - Message Form */}
        <div className="w-1/2 p-6 bg-white text-gray-800 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-center">Send Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Type your Message..."
              className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Image Popup Component
const ImagePopup = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const currentIndex = index ? parseInt(index, 10) : 0;

  const closePopup = () => navigate("/", { replace: true });


  const showPrevImage = () => {
    navigate(`/image/${currentIndex === 0 ? images.length - 1 : currentIndex - 1}`);
  };

  const showNextImage = () => {
    navigate(`/image/${currentIndex === images.length - 1 ? 0 : currentIndex + 1}`);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === "ArrowLeft") {
        showPrevImage();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40"
      onClick={closePopup}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closePopup}
      >
        &times;
      </button>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl"
        onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
      >
        &#8249;
      </button>
      <img
        className="max-w-full max-h-screen rounded-lg"
        src={images[currentIndex]}
        alt={`Popup Image ${currentIndex + 1}`}
        onClick={(event) => event.stopPropagation()}
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl"
        onClick={(e) => { e.stopPropagation(); showNextImage(); }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default App;
