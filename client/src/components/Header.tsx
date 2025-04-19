import React from "react";
import { Link } from "wouter";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-[#FF0050] text-3xl font-bold">Tik</span>
          <span className="text-[#00F2EA] text-3xl font-bold">Save</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="text-gray-600 hover:text-[#FF0050] transition">Home</a>
              </Link>
            </li>
            <li>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#FF0050] transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-[#FF0050] transition">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
