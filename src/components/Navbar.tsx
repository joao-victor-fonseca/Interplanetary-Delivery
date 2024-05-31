import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <div className="flex items-center gap-1">
        <img
          src="/image/logo.png"
          alt="Beyond the Bytes Logo"
          className="h-10 mr-3"
        />
        <p className="text-lg font-extrabold text-white hidden lg:block">
          Beyond the Bytes
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
