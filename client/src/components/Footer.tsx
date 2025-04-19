import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-[#FF0050] text-2xl font-bold">Tik</span>
              <span className="text-[#00F2EA] text-2xl font-bold">Save</span>
            </div>
            <p className="text-gray-400 mt-2">Download TikTok videos without watermark</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TikSave. All rights reserved.</p>
          <p className="mt-2">This service is not affiliated with TikTok or ByteDance Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
