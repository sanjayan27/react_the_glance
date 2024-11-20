import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './components/Editpost.css'

const Editpost = ({posts,setEditTitle,setEditBody,editTitle,editBody,handleEdit}) => {
  const {id} = useParams();
  const  post = posts.find(post => (post.id).toString() === id);
 
  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post,setEditTitle,setEditBody])
  return (
    <main className='main-editpost'>
      {editTitle &&
        <section className='section1-editpost'>
          <h2 className='h2-editpost'>Edit Post</h2>
          <form className='form-section-edit' onSubmit={(e)=> e.preventDefault()}>
            <label className='label1-edit' htmlFor='input-edit'>Title:</label>

              
            <input 
              type="text" 
              id='input-edit'
              required
              value={editTitle} 
              onChange={(e)=>setEditTitle(e.target.value)}
            />
            
            <label htmlFor='textarea-edit'>Content:</label>
            <textarea 
              id="textarea-edit" 
              required
              value={editBody} 
              onChange={(e)=> setEditBody(e.target.value)}
            
            />
              <button type='submit' className ="btn-form-edit" onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
        </section>
      
      }

      {!editTitle &&
       <>
        <section>
          <h2>sorry for the inconvineans</h2>
          <h1>please reload the app</h1>
        </section>
       </>
      }
    </main>
  )
}

export default Editpost