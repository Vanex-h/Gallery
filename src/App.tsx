import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa"; // Import icons
import emailjs from 'emailjs-com'; // Import emailjs

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
        <Link to="/">
          <h1 className="text-xl font-bold">My Gallery</h1>
        </Link>
       
        
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/contact" className="text-black text-xl font-bold">
          Contact
        </Link>
      </div>
    </header>
    <Outlet />
    <Footer /> {/* Add Footer component here */}
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string; message?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      document.body.style.overflow = window.innerWidth < 768 ? "auto" : "hidden";
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validateForm = () => {
    const { fullName, email, message } = formData;
    const newErrors: { fullName?: string; email?: string; message?: string } = {};
    if (!fullName) newErrors.fullName = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send("service_6cwp7dd", "template_6gt6q1r", {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message,
      }, "RqXDuvjjoe4wI0juE")
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        console.log("Email successfully sent!");
      })
      .catch((error) => {
        setSuccessMessage("Failed to send the message, please try again.");
        console.error("Error sending email:", error);
      });
      
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white px-4 md:px-8"
      style={{
        backgroundImage: "url('https://i.ibb.co/N6Qdm0w/Whats-App-Image-2024-10-28-at-00-11-39-871ec12b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col lg:flex-row bg-black bg-opacity-50 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl w-full space-y-6 lg:space-y-0">
        <div className="lg:w-1/2 p-6 space-y-6 ">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you need help, have questions or just want to say hello, feel free to get in touch.
          </p>
          <div className="flex items-start mb-4">
            <FaHome className="text-2xl text-white mr-4 mt-1" />
            <div>
              <h4 className="text-lg lg:text-xl font-semibold text-white">Address</h4>
              <p className="text-gray-300">Kigali, Rwanda</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <FaPhone className="text-2xl text-white mr-4 mt-2" />
            <div>
              <h4 className="text-lg lg:text-xl font-semibold text-white">Phone</h4>
              <p className="text-gray-300">+250788780718</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-2xl text-white mr-4 mt-1" />
            <div>
              <h4 className="text-lg lg:text-xl font-semibold text-white">Email</h4>
              <p className="text-gray-300">vanessahirwa5@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-6 bg-white text-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">Send Message</h3>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`w-full p-3 border-0 border-b-2 rounded focus:outline-none focus:border-black ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={`w-full p-3 border-0 border-b-2 rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your Message..."
              className={`w-full p-3 border-0 border-b-2 h-24 resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Send
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};


const Footer = () => (
  <footer className=" border-t-2 text-center py-4 mt-8">
    <p>Made with 🖤  by Vanessa</p>
  </footer>
);



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
