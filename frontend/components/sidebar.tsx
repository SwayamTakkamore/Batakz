// // Sidebar.tsx
// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`fixed inset-y-0 left-0 z-50 bg-white w-64 shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
//       <div className="flex items-center justify-between px-4 py-6 border-b">
//         <h2 className="text-lg font-semibold">Sidebar</h2>
//         <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path d="M6 18L18 6M6 6l12 12"></path>
//             ) : (
//               <path d="M4 6h16M4 12h16m-7 6h7"></path>
//             )}
//           </svg>
//         </button>
//       </div>
//       <nav className="mt-6">
//         <ul>
//           <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 1</li>
//           <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 2</li>
//           <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 3</li>
//           <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 4</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-white w-64 shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
      <div className="flex items-center justify-between px-4 py-6 border-b">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 1</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 2</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 3</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Link 4</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

