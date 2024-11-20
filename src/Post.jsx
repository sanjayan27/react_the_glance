import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";

const Post = ({post,images}) => {
  
  return (
    <section className='section-post'>
      <Link to={`post/${post.id}`}>
       
        <h2 className='heading-post'> <IoIosContact className='icons-nav'/> {post.title}</h2>
        </Link>
        <figure>
          <img src={post.url} alt="" />
        </figure>
        <p className='para1-post'>{post.date}</p>
      
      
      <p className='para2-post'>
        {
          (post.body).length <=25 ?  (post.body) : `${(post.body).slice(0,25)}.....`}
        
      </p>
    </section>
  )
}

export default Post