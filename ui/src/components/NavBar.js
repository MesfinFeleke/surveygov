import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function NavBar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-navy-900 dark:text-white text-xl font-bold">
              Survey Designer
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-500 hover:text-navy-900 dark:text-gray-400 dark:hover:text-white rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="bg-navy-900 dark:bg-navy-700 text-white py-1.5 px-4 rounded-md hover:bg-navy-800 dark:hover:bg-navy-600 transition-colors"
                onClick={() => setIsSignupModalOpen(true)}
              >
                Sign Up
              </button>
              <button
                className="bg-navy-900 dark:bg-navy-700 text-white py-1.5 px-4 rounded-md hover:bg-navy-800 dark:hover:bg-navy-600 transition-colors"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </>
  );
}

export default NavBar;
