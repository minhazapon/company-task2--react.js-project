import { NavLink } from "react-router-dom";




const Nav = () => {

    const navs = <>
    
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/info" >Officer Information</NavLink></li>
    
    
    </>



    return (
        <div className=" ml-5 mr-5 ">

<div className="navbar bg-base-100">
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
        {navs}
      </ul>
    </div>
    <img className=" h-[70px]" src="https://img.freepik.com/premium-vector/minimalist-logo-design-featuring-blue-orange-colors-with-city-skyline-background-minimalist-logo-inspired-by-beauty-manufacturing-processes-machinery_538213-63985.jpg?w=740" alt="" />
    <a className=" text-4xl font-serif text-blue-950 ">ParkSea</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navs}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign In</a>
  </div>
</div>
            
        </div>
    );
};

export default Nav;