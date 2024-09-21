import React from 'react';
import './Header.css';  // Import the CSS file
import { CiSearch } from "react-icons/ci";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#community">Community</a></li>
        <li><a href="#recipes">Recipe Finder</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#popular">Popular</a></li>
      </ul>
      <ul className="auth-links">
        <div className='register' >
          <img src="register.png" alt="" loading='lazy' />
        <li><a href="#register">Register</a></li>
        </div>
        <div className='login' >
          <img src="login.png" alt="" loading='lazy' />
        <li><a href="#login">Login</a></li>
        </div>
      </ul>
    </nav>
  );
};
const SearchBar: React.FC = () => {
  return (
    <>
      <div className='searchbar'>
        <img src="./Footer-logo.png" alt="" className='logo' />
        <button className='searchbar-btn-1'>All Categories</button>
        <input placeholder='Search' className='search-input' />
        <button className='searchbar-btn-2'>
          <CiSearch />
        </button>
      </div>
    </>
  );
};

const HeaderImg: React.FC = () => {
  return (
    <>
     <img src="./header-img.png" className='header-img' loading='lazy' />
    </>
  );
};

const Header = () => {
  return (
    <>
    <Navbar/>
    <SearchBar/>
    <HeaderImg/>
    </>
  )
}
export default Header