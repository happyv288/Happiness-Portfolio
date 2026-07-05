import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full bg-slate-800 p-1 transition"
    >
      <motion.div
        animate={{
          x: theme === "dark" ? 0 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white"
      >
        {theme === "dark" ? <FaMoon size={14} /> : <FaSun size={14} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
