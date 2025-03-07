import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setDarkMode(newMode);
  };

  if (darkMode === null) return null;

  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 iteams-center">
        <h3 className="text-xl font-bold text-black dark:text-white transition">PORTFOLIO.</h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
        <a href="https://www.linkedin.com/in/priyapritam" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/priyapritam" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition" />
        </a>
        <a href="https://x.com/PriyaPritam03" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-black transition" />
        </a>
        <a href="https://www.facebook.com/priyapritam03" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600 transition" />
        </a>
        <a href="https://drive.google.com/file/d/1lm2bUh4OQoweIPrnwq18Kpmr_ZvB7DVK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFilePdf className=" hover:text-red-600 transition" />
        </a>
        <div className="rounded-2xl border-4 border-neutral-800">
          <div
            className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition relative"
            onClick={toggleDarkMode}
          >

            <motion.div
              className="absolute w-6 h-6 flex items-center justify-center"
              animate={{ x: darkMode ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {darkMode ? (
                <MdLightMode className="text-yellow-400 text-lg" />
              ) : (
                <MdDarkMode className="text-gray-800 text-lg" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar