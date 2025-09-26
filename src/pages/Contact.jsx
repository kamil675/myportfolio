import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  // Container animation for staggering children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Item animation for each element (from top to bottom)
  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Infinite bounce animation for heading
  const headingVariants = {
    animate: {
      y: [0, -15, 0], // up and down
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold mb-8 text-center tracking-wider"
        variants={headingVariants}
        animate="animate"
      >
        Contact Me
      </motion.h1>

      {/* Personal Details */}
      <motion.div
        className="text-center space-y-6 md:space-y-8"
        variants={containerVariants}
      >
        <motion.p
          className="text-2xl md:text-4xl font-semibold"
          variants={itemVariants}
        >
          <strong>Name:</strong> Kamil Malik
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl flex items-center justify-center gap-4 hover:text-blue-400 transition-colors"
          variants={itemVariants}
        >
          <FaEnvelope className="text-blue-400 text-3xl md:text-5xl" />
          <a href="mailto:kamil@example.com" className="underline">
            kamil@example.com
          </a>
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl flex items-center justify-center gap-4 hover:text-green-400 transition-colors"
          variants={itemVariants}
        >
          <FaDownload className="text-green-400 text-3xl md:text-5xl" />
          <a href="/resume.pdf" download className="underline">
            Download Resume
          </a>
        </motion.p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex gap-12 text-4xl md:text-5xl mt-12"
        variants={containerVariants}
      >
        <motion.a
          href="https://github.com/kamil675"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
          variants={itemVariants}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kamilcoder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          variants={itemVariants}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://t.me/Kami111l"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          variants={itemVariants}
        >
          <FaTelegram />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="mt-16 text-gray-400 text-lg md:text-xl"
        variants={itemVariants}
      >
        © 2025 Kamil Malik. All Rights Reserved.
      </motion.p>
    </motion.div>
  );
};

export default Contact;
