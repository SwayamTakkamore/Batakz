import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div ref={sidebarRef} className={`fixed inset-y-0 left-0 z-50 bg-white w-64 shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
      <div onClick={toggleSidebar} className="flex items-center justify-between px-4 py-6 border-b">
        <h2 className="text-lg font-semibold">Eunoia</h2>
        <button className="text-gray-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          <a href="/test">
            <button className="py-2 px-4 hover:bg-gray-100 cursor-pointer w-full text-left">Test</button>
          </a>
          <a href="/services">
            <button className="py-2 px-4 hover:bg-gray-100 cursor-pointer w-full text-left">Services</button>
          </a>
          <a href="/">
            <button className="py-2 px-4 hover:bg-gray-100 cursor-pointer w-full text-left">Report</button>
          </a>
          <a href="/aboutus">
            <button className="py-2 px-4 hover:bg-gray-100 cursor-pointer w-full text-left">About Us</button>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
