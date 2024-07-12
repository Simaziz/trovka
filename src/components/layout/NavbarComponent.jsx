import React, { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { CiLight } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuList = [
    {
      path: '/',
      title: 'Service',
    },
    {
      path: '/category',
      title: 'Category',
    },
    {
      path: '/contact',
      title: 'Contact',
    },
    {
      path: '/about',
      title: 'About Us',
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      
      <div className='w-full bg-[#022278] h-8 flex items-center justify-center'>
        <p className='text-white text-center text-[15px]'>Provide the best service</p>
      </div>

      <nav className='bg-slate-300 w-full'>
        <div className='container mx-auto flex items-center justify-between h-[75px] p-4 md:p-0'>
        
          <img className='w-40 ml-14' src='./src/assets/image/logo.png' alt='Logo' />

          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black'>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul
            className={`fixed top-0 left-0 w-full h-full bg-slate-300 transform ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out md:relative md:flex md:items-center md:space-x-6 md:w-auto md:transform-none md:h-auto md:bg-transparent`}
          >
            {menuList.map((menu, index) => (
              <li key={index} className='mt-10 md:mt-0'>
                <NavLink
                  to={menu.path}
                  className='block text-black py-2 px-4 md:p-0 hover:text-[#022278] transition-colors duration-300'
                  activeClassName='text-[#022278]'
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Other navbar elements */}
          <div className='hidden md:flex md:items-center mr-20'>
            <div className='w-10 h-9 border-[#FFB600] border rounded-xl ml-4 flex justify-center items-center'>
              <img className='w-6 h-6' src='./src/assets/image/englang.png' alt='Language' />
            </div>

            <div className='w-48 h-9 bg-[#FFB600] rounded-xl ml-4 flex justify-center items-center text-white text-[18px]'>
              <AiOutlineDashboard className='mr-3 text-[20px]' />
              <p>Dashboard</p>
            </div>

            <div className='flex items-center ml-4'>
              <CiLight className='text-[22px] text-[#FFB600]' />
              <img src='./src/assets/image/profile.png' alt='Profile' className='w-12 h-12 ml-2 rounded-full' />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
