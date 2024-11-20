import React from 'react'

const NewPost = ({handleSubmit,setPostBody, setPostTitle, postTitle, postBody , setImages}) => {

 
  return (
    <section className='section-newpost'>
      <h2 className='h2-newpost'>New Post</h2>
      <form onSubmit={handleSubmit} className='form-newpost'>
        <section className='section2-newpost'>
          <label htmlFor="posttitle">
            Title:
          </label>
          <input 
            required
            type="text" 
            value={postTitle}
            placeholder='Enter Your Title'
            onChange={(e)=>setPostTitle(e.target.value)}
          />
        </section>
        <section>
          <label>Images:</label>
          <input type="file" 
          onChange={(e)=>setImages(e.target.files[0])} name='file'
          />
        </section>
        <section className='section2-newpost'>
          <label htmlFor="postBody">Content:</label>
          <textarea 
          placeholder='Enter Your Content'
            required
            name="text"
            value={postBody}
            onChange={(e)=>setPostBody(e.target.value)}

          ></textarea>
        </section>
        <button className='btn-newpost'>Submit</button>
      </form>
    </section>
  )
}

export default NewPost