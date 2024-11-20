import React from 'react'

const Search = () => {
  return (
    <form className='form-nav' onSubmit={(e)=>e.preventDefault()}>
          <label className='label-nav'>search post</label>
          <input 
            className='input-nav'
            type="text" 
            placeholder='Search Post'
            // value={search}
            // onChange ={(e)=>setSearch(e.target.value)}
          />
    </form>
  )
}

export default Search