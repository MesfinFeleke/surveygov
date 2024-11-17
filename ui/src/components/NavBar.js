import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function NavBar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-navy-900 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-white text-xl font-bold">Survey Designer</div>
            <div className="space-x-4">
              <button
                className="bg-navy-800 hover:bg-navy-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                onClick={() => setIsSignupModalOpen(true)}
              >
                Sign Up
              </button>
              <button
                className="bg-navy-800 hover:bg-navy-700 text-white font-medium py-2 px-4 rounded transition duration-200"
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
