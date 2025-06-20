import React from 'react';

const Navbar = () => {
    const items = <>
      <li><a>Home</a></li>
      
        <li><a>Contact Us</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Our Menu</a></li>
        <li><a>Our Shop</a></li>



    
    </>
    return (
       <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl mx-auto  bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {items}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-blue-700">KhanaPina</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {items}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign Out</a>
  </div>
</div>
    );
};

export default Navbar;