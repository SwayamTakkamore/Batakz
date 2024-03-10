// import Link from 'next/link';
// import React from 'react';
// import Sidebar from './sidebar';

// export default function Navbar(): JSX.Element {
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">Jijivisha</span>
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900">First Link</a>
//           <a className="mr-5 hover:text-gray-900">Second Link</a>
//           <a className="mr-5 hover:text-gray-900">Third Link</a>
//           <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//         </nav>
//         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Profile
//           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//         <Sidebar />
//       </div>
//     </header>
//   );
// }

// Navbar.tsx
"use client";
import React, { useState } from 'react';
import Sidebar from './sidebar';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" onClick={toggleSidebar}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full cursor-pointer" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <div className="mx-auto">
            <Image
              className="rounded-full  border-2 border-yellow-200"
              src="/logo1.png"
              width={45}
              height={45}
              alt="Picture of the author"
              draggable="false"
            />
          </div>
          <Link href="/" className="ml-3 text-xl">Jijivisha</Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/resources" className="mr-5 hover:text-gray-900">Resources</Link>
          <Link href="/test" className="mr-5 hover:text-gray-900">Test</Link>
          <a href="https://swayamtakkamore.github.io/Batakz/frontend/openupthing/thoughts.html" className="mr-5 hover:text-gray-900">Open Up</a>
          <Link href="/aboutus" className="mr-5 hover:text-gray-900">About Us</Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Profile
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
        <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
          <Link href="/profile">Profile</Link>
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Navbar;
