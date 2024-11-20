import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts,handleDelete}) => {

  const {id} =useParams();
  const post = posts.find(post=>(post.id).toString() === id)
  return (
    <main className="main-postpage">
      {post && 
        <>
          <h2 className='h2-postpage'>{post.title}</h2>
          <p className='para2-postpage'>{post.body}</p>
          <figure>
          <img src={post.url} alt="" />
          
          </figure>
          <Link to={`/edit/${post.id}`}><button className='btn-form-postpage'> Edit Post</button></Link>

          <button className='delete-button' onClick={()=>handleDelete(post.id)}>
            delete
          </button>
        </>
      }
      {!post && 
        <>
          <p>
            your post is not available
          </p>
          <Link to='/'>
          <p>go to home page</p></Link>
        </>

      }
    </main>


  )
}

export default PostPage