import React from 'react'
import Post from './Post'
const Feed = ({posts,images}) => {
  return (
    <section className='section-feed'>
      {posts.map(post=>(
        <Post key={post.id} post ={post} images={images}/>
      ))}
    </section>
  )
}

export default Feed