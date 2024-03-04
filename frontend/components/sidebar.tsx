import Link from 'next/link';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-white w-64 shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
      <div className="flex items-center justify-between px-4 py-6 border-b">
        <h2 className="text-lg font-semibold">Jijivisha</h2>
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><Link href="/test">Test</Link></li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><Link href="/services">Services</Link></li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><Link href="/">Report</Link></li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><Link href="/aboutus">About Us</Link></li>
        </ul>
      </nav>
    </div>
  );

};

export default Sidebar;