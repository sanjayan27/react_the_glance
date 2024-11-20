import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Header = ({search,setSearch,postTitle,postBody,handleSubmit,setPostBody,setPostTitle,searchResult,title}) => {
  return (
    <section className='section-header'>
     <h2 className='h2-header'>{title}</h2>
     <form className='form-nav' onSubmit={(e)=>e.preventDefault()}>
          <label className='label-nav'>search post</label>
          <IoSearchSharp className='icons-header'/>
          <input 
            className='input-nav'
            type="text" 
            placeholder='Search Post'
            value={search}
            onChange ={(e)=>setSearch(e.target.value)}
          />
      </form>
    </section>
    
  )
}

export default Header