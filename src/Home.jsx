import React from 'react'
import Feed  from './Feed'

const Home = ({posts,images,isLoading}) => {
  return (
    <main className='main-home'>
      
      {isLoading && <p className='para-isloading-home'>your data is getting loading...</p>}
      {!isLoading && 
        (posts.length) ? (
          <Feed posts = {posts} images={images}/> 
        ): (
         <p></p>
        )
      }
  
    </main>
)
}
export default Home