import React from 'react'
import {Link} from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";

const NavBar = () => {
  return (
      <section className='section-nav'>
        <section className='section-ul-nav'>
          <ul className='ul-nav'>
            <li className='li-nav'><Link to="/">  <IoMdHome className='icons-nav'/> <span> Home</span></Link></li>
            <li className='li-nav'><Link to="/search"><IoSearchSharp className='icons-nav'/><span>Search</span></Link></li>
            <li className='li-nav'><Link to="/post "><CgAddR className='icons-nav'/><span>Create</span></Link></li>
            <li className='li-nav'><Link to="/about"><IoIosContact className='icons-nav'/><span>profile</span></Link></li>
          </ul>
        </section>
      </section>
  )
}

export default NavBar