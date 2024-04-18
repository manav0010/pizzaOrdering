"use client";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const handleLogout = () => {
    window.localStorage.setItem('jwt', null);
    window.localStorage.setItem('user', null);
    window.localStorage.setItem("isAuthenticated", "false");
    window.location.pathname = "/";
  };
  return (
    <nav>
      <div className="lftSide">
        <motion.h2 animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
          <Link to="/">Pizza Ordering</Link>
        </motion.h2>
      </div>
      <motion.div
        className="rgtSide"
        animate={{ x: [200, 0] }}
        transition={{ duration: 2 }}
      >
      </motion.div>
    </nav>
  );
};

export default Navbar;
