import React, { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa"; // Import icons
import emailjs from "emailjs-com"; // Import emailjs

const normal_images = [
  "https://i.ibb.co/yNWDpxL/IMG-1923.jpg",
  "https://i.ibb.co/TwHjrsR/IMG-1894.jpg",
  "https://i.ibb.co/3kD7tQB/IMG-1918.jpg",
  "https://i.ibb.co/HBPY0G4/IMG-1920.jpg",
  "https://i.ibb.co/gzJYVQT/IMG-1907.jpg",
  "https://i.ibb.co/f1ZTPFX/IMG-1893.jpg",
  "https://i.ibb.co/LCCz8rk/IMG-1885.jpg",
  "https://i.ibb.co/2NCBM60/IMG-1897.jpg",
  "https://i.ibb.co/NrYcGFj/IMG-1890.jpg",
  "https://i.ibb.co/cgQdht5/Whats-App-Image-2024-10-26-at-00-46-00.jpg",
  "https://i.ibb.co/w0wZZR9/IMG-1888-1.jpg",
  "https://i.ibb.co/8MqJFDc/IMG-1930.jpg",
  "https://i.ibb.co/D7xyg7Q/IMG-1904.jpg",
  "https://i.ibb.co/FxfJkgW/IMG-1905.jpg",
  "https://i.ibb.co/88n0pct/IMG-1886.jpg",
  "https://i.ibb.co/jGT1tQD/IMG-1919.jpg",
  "https://i.ibb.co/B4QVMWq/IMG-1906.jpg",
  "https://i.ibb.co/xLj8JNt/IMG-1896.jpg",
  "https://i.ibb.co/KVDsCr4/IMG-1927.jpg",
  "https://i.ibb.co/HDgxyvL/IMG-1880.jpg",
  "https://i.ibb.co/9NB5Z8q/IMG-1884.jpg",
  "https://i.ibb.co/BwZVfZd/IMG-1921.jpg",
  "https://i.ibb.co/pJCq4wM/IMG-1887.jpg",
  "https://i.ibb.co/DCLpng4/IMG-1901.jpg",
  "https://i.ibb.co/JRG74ss/IMG-1915.jpg",
  "https://i.ibb.co/gF3xXPg/IMG-1902.jpg",
  "https://i.ibb.co/WfpkCm6/IMG-1910.jpg",
  "https://i.ibb.co/HBh1FmW/IMG-2181.jpg",
  "https://i.ibb.co/564X8hF/IMG-1911.jpg",
  "https://i.ibb.co/VTcXT94/IMG-1924.jpg",
  "https://i.ibb.co/S3T2Dv6/IMG-1913.jpg",
  "https://i.ibb.co/M5NJ9W4/IMG-1928.jpg",
  "https://i.ibb.co/D8x102N/IMG-1922.jpg",
  "https://i.ibb.co/rkJTFtg/IMG-1883.jpg",
  "https://i.ibb.co/DYDx3fd/IMG-1879.jpg",
  "https://i.ibb.co/PDcLrFs/IMG-1917.jpg",
  "https://i.ibb.co/Y7LHm7g/IMG-1929.jpg",
  "https://i.ibb.co/xDqHCky/IMG-1895.jpg",
  "https://i.ibb.co/Jz7mFj0/IMG-723-png.jpg",
  "https://i.ibb.co/JsV7cmY/IMG-1899-1.jpg",
  "https://i.ibb.co/hYYgMsk/IMG-1926.jpg",
  "https://i.ibb.co/h70Dskb/IMG-1903.jpg",
  "https://i.ibb.co/p3JV4kZ/IMG-1900.jpg",
  "https://i.ibb.co/cvZ3X9c/IMG-1925.jpg",
  "https://i.ibb.co/686HPtx/IMG-1909.jpg",
  "https://i.ibb.co/LP0JfB5/IMG-1916.jpg",
  "https://i.ibb.co/HtzkMJH/IMG-1891.jpg",
  "https://i.ibb.co/dPn9PxJ/IMG-1912.jpg",
  "https://i.ibb.co/HNh38Hj/IMG-1914.jpg",
  "https://i.ibb.co/LJCzWB9/IMG-1882.jpg",
  "https://i.ibb.co/ynRWJrH/IMG-1892.jpg",
  "https://i.ibb.co/Y0F9xLV/IMG-744.jpg",
  "https://i.ibb.co/ssWFPQg/IMG-6069-2.jpg",
  "https://i.ibb.co/DPJJDd8/IMG-6271-2.jpg",
  "https://i.ibb.co/BNjH8Sx/IMG-6692-2.jpg",
  "https://i.ibb.co/BsXB2V7/IMG-6597-2.jpg",
  "https://i.ibb.co/NLc2cFw/IMG-7069-2.jpg",
  "https://i.ibb.co/k0pcZyQ/IMG-7175.jpg",
  "https://i.ibb.co/YLTzSrf/IMG-6911-2.jpg",
  "https://i.ibb.co/Pjcvh43/IMG-6433-2.jpg",
];
const bw_images = [
  "https://i.ibb.co/K5DFyX0/IMG-4145.jpg",
  "https://i.ibb.co/hyC34pn/IMG-4212.jpg",
  "https://i.ibb.co/vqn6byx/IMG-5854.jpg",
  "https://i.ibb.co/Kbzm8tT/IMG-5558.jpg",
  "https://i.ibb.co/Wch0PmW/IMG-3057.jpg",
  "https://i.ibb.co/2n5qTx9/IMG-3697.jpg",
  "https://i.ibb.co/Hpq0nDY/IMG-2349.jpg",
  "https://i.ibb.co/ZcntBnW/IMG-4909.jpg",
  "https://i.ibb.co/RpY5W2F/IMG-4627.jpg",
  "https://i.ibb.co/rySFrXC/IMG-3520.jpg",
  "https://i.ibb.co/MZFnZFj/IMG-2209.jpg",
  "https://i.ibb.co/LQXsBYQ/IMG-4118.jpg",
  "https://i.ibb.co/MRcvrkp/IMG-2724.jpg",
  "https://i.ibb.co/VVW5jMt/IMG-4470.jpg",
  "https://i.ibb.co/jW08V5Q/IMG-2971.jpg",
  "https://i.ibb.co/pnMsjcz/IMG-2883.jpg",
  "https://i.ibb.co/wp1HNk9/IMG-1699.jpg",
  "https://i.ibb.co/jZ1Nvq1/IMG-3024.jpg",
  "https://i.ibb.co/ssPhvtj/20-DDA23-E-C8-C1-4-AA4-AF65-6099-DA8-EF1-CA.jpg",
  "https://i.ibb.co/YLrgd5j/IMG-2715.jpg",
  "https://i.ibb.co/hcB95kY/IMG-4113.jpg",
  "https://i.ibb.co/hgc44JW/IMG-5845.jpg",
  "https://i.ibb.co/kMtDZqm/IMG-3672.jpg",
  "https://i.ibb.co/wCR8g2h/IMG-2326.jpg",
  "https://i.ibb.co/VmNsVHW/IMG-4989.jpg",
  "https://i.ibb.co/FsM5B32/IMG-4825.jpg",
  "https://i.ibb.co/gZLnkKR/IMG-3033.jpg",
  "https://i.ibb.co/HBh1FmW/IMG-2181.jpg",
  "https://i.ibb.co/k45mFmS/IMG-3509.jpg",
  "https://i.ibb.co/7bZg2DL/IMG-4500.jpg",
  "https://i.ibb.co/k2xSq4y/IMG-3014.jpg",
  "https://i.ibb.co/nbYhVPF/f8ff66ea-69ce-4003-b93b-6fab100c4ab6.jpg",
  "https://i.ibb.co/yqBQdCc/IMG-2936.jpg",
  "https://i.ibb.co/bbS1231/5a571eeb-e627-4e41-a0ce-2cfed671e13d.jpg",
  "https://i.ibb.co/b1Z3DRV/IMG-4215.jpg",
  "https://i.ibb.co/XVDtxLd/IMG-2803.jpg",
  "https://i.ibb.co/rGQNkGn/IMG-4123.jpg",
  "https://i.ibb.co/gTg8WsK/IMG-3588.jpg",
  "https://i.ibb.co/dDVxfrt/IMG-3699.jpg",
  "https://i.ibb.co/sQrK347/IMG-4913.jpg",
  "https://i.ibb.co/w0cc7w3/IMG-5833.jpg",
  "https://i.ibb.co/4K9vtp4/IMG-1963.jpg",
  "https://i.ibb.co/1JXzB4P/IMG-2655.jpg",
  "https://i.ibb.co/1JpXpvY/IMG-2261.jpg",
  "https://i.ibb.co/v3BqBRn/IMG-3156.jpg",
  "https://i.ibb.co/HzPWZsM/IMG-2977.jpg",
  "https://i.ibb.co/GRnDPgf/50431f25-dab4-4208-9700-a64a623a9d3a.jpg",
  "https://i.ibb.co/sJj9RbG/IMG-4821.jpg",
  "https://i.ibb.co/72JvpCH/IMG-3032.jpg",
  "https://i.ibb.co/Kyjc7sL/IMG-4497.jpg",
  "https://i.ibb.co/dmRhmQr/IMG-2890.jpg",
  "https://i.ibb.co/wMMcBFc/IMG-744-BW.jpg",
  "https://i.ibb.co/ySsJc6y/IMG-6069.jpg",
  "https://i.ibb.co/KrsvCLh/IMG-6271.jpg",
  "https://i.ibb.co/rk1wxmL/IMG-6692.jpg",
  "https://i.ibb.co/xswYXbV/IMG-6597.jpg",
  "https://i.ibb.co/yhhcBmL/IMG-7069.jpg",
  "https://i.ibb.co/wLSSFsr/IMG-7175-2.jpg",
  "https://i.ibb.co/fMwpQ8K/IMG-6911.jpg",
  "https://i.ibb.co/kD0gr1X/IMG-6433.jpg",
];

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="image/:index" element={<ImagePopup />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

// Layout Component for Header and Navigation
const Layout = () => (
  <div className="container mx-auto p-4">
    <header className="flex items-center justify-between border-b border-gray-300 bg-white p-4 text-black">
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
        <Link to="/contact" className="text-xl font-bold text-black">
          Contact
        </Link>
      </div>
    </header>
    <Outlet />
    <Footer /> {/* Add Footer component here */}
  </div>
);

// Gallery Component
const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      {bw_images.map((imageUrl, index) => (
        <div
          key={index}
          className="ml-2 mt-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link to={`/image/${index}`}>
            <img
              className="h-auto max-w-full cursor-pointer rounded-lg"
              src={hoveredIndex === index ? normal_images[index] : imageUrl}
              alt={`Gallery Image ${index + 1}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

// Contact Page Component with Icons
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    message?: string;
  }>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      document.body.style.overflow =
        window.innerWidth < 768 ? "auto" : "hidden";
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
    const newErrors: { fullName?: string; email?: string; message?: string } =
      {};
    if (!fullName) newErrors.fullName = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_6cwp7dd",
          "template_6gt6q1r",
          {
            from_name: formData.fullName,
            from_email: formData.email,
            message: formData.message,
          },
          "RqXDuvjjoe4wI0juE",
        )
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
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 text-white md:px-8"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/N6Qdm0w/Whats-App-Image-2024-10-28-at-00-11-39-871ec12b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex w-full max-w-4xl flex-col space-y-6 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg md:p-8 lg:flex-row lg:space-y-0">
        <div className="space-y-6 p-6 lg:w-1/2 ">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Contact Us</h2>
          <p className="mb-6 text-gray-300">
            If you need help, have questions or just want to say hello, feel
            free to get in touch.
          </p>
          <div className="mb-4 flex items-start">
            <FaHome className="mr-4 mt-1 text-2xl text-white" />
            <div>
              <h4 className="text-lg font-semibold text-white lg:text-xl">
                Address
              </h4>
              <p className="text-gray-300">Kigali, Rwanda</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <FaPhone className="mr-4 mt-2 text-2xl text-white" />
            <div>
              <h4 className="text-lg font-semibold text-white lg:text-xl">
                Phone
              </h4>
              <p className="text-gray-300">+250788780718</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="mr-4 mt-1 text-2xl text-white" />
            <div>
              <h4 className="text-lg font-semibold text-white lg:text-xl">
                Email
              </h4>
              <p className="text-gray-300">vanessahirwa5@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 text-gray-800 shadow-lg lg:w-1/2">
          <h3 className="mb-6 text-center text-2xl font-semibold lg:text-3xl">
            Send Message
          </h3>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`w-full rounded border-0 border-b-2 p-3 focus:border-black focus:outline-none ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={`w-full rounded border-0 border-b-2 p-3 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your Message..."
              className={`h-24 w-full resize-none border-0 border-b-2 p-3 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <button
              type="submit"
              className="w-full rounded bg-black py-3 font-semibold text-white hover:border hover:border-black hover:bg-white hover:text-black"
            >
              Send
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-center text-green-500">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className=" mt-8 border-t-2 py-4 text-center">
    <p>Made with 🖤 by Vanessa</p>
  </footer>
);

// Image Popup Component
const ImagePopup = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const currentIndex = index ? parseInt(index, 10) : 0;

  const closePopup = () => navigate("/", { replace: true });

  const showPrevImage = () => {
    if (currentIndex > 0) {
      navigate(`/image/${currentIndex - 1}`);
    }
  };

  const showNextImage = () => {
    if (currentIndex < normal_images.length - 1) {
      navigate(`/image/${currentIndex + 1}`);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "ArrowLeft" && currentIndex > 0) {
        showPrevImage();
      } else if (
        event.key === "ArrowRight" &&
        currentIndex < normal_images.length - 1
      ) {
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
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closePopup}
    >
      <button
        className="absolute right-4 top-4 text-2xl text-white"
        onClick={closePopup}
      >
        &times;
      </button>
      {currentIndex > 0 && (
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 transform text-5xl text-white"
          onClick={(e) => {
            e.stopPropagation();
            showPrevImage();
          }}
        >
          &#8249;
        </button>
      )}
      <img
        className="max-h-screen max-w-full rounded-lg"
        src={normal_images[currentIndex]}
        alt={`Popup Image ${currentIndex + 1}`}
        onClick={(event) => event.stopPropagation()}
      />
      {currentIndex < normal_images.length - 1 && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-5xl text-white"
          onClick={(e) => {
            e.stopPropagation();
            showNextImage();
          }}
        >
          &#8250;
        </button>
      )}
    </div>
  );
};

export default App;
