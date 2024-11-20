import React , {useEffect, useState}from 'react';
import Header from './Header'
import NavBar from './NavBar';
import Home from './Home';
import NewPost from './NewPost';
import About from './About';
import {format} from "date-fns";
import {Routes,Route, useNavigate} from 'react-router-dom'
import Missing from './Missing';
import PostPage from './PostPage'
import api from "./api/posts"
import Search from './Search'
import Editpost from './Editpost';
import confetti from 'canvas-confetti';


const App = () => {

  const [posts, setPosts] = useState([])
  const [images,setImages]= useState('')
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle]= useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle , setEditTitle]= useState('')
  const [editBody, setEditBody] = useState('');
  const [isLoading,setIsLoading]= useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
   
    const fetchApi = async ()=>{ 
      try{
      const response = await api.get('/posts');
      setPosts(response.data)
      } catch(err){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>fetchApi(),2000);
  },[])
  // useEffect(()=>{
  //   const fetchImageData = async()=>{
  //    try{
  //     const fetchImage = await axios.get("https://api.slingacademy.com/v1/sample-data/photos");
  //     setImages(fetchImage.data.photos)
  //    }catch(err){
  //     console.log(err.message)
  //    }
  //   }
  //   fetchImageData()
  // },[])
   
  useEffect(()=>{
    const filteredPost = posts.filter((post)=>
      ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))

      setSearchResult(filteredPost.reverse())
},[posts,search])

 
  const handleSubmit =async (e)=>{
    e.preventDefault()
    
    const id = posts.length>=1 ? posts[posts.length - 1].id + 1 :1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    console.log(images)
    const newPost ={ id,title:postTitle,url:images,date:dateTime,body:postBody}
    confetti({
      particleCount:150,
      spread:800
    })
    try{
      const response = await api.post('/posts',newPost)
      const allNewPost = [...posts, response.data];
      setPosts(allNewPost)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    }catch(err){
      console.log(err)
    }
 }
 const handleDelete =async(id)=>{
   try{
    await api.delete(`/posts/${id}`); 
    const postsList = posts.filter(post => post.id !== id);  
    setPosts(postsList)
    navigate('/')
   } catch(err){
    console.log(err.message)
  }
 }
 

 const handleEdit = async (id)=>{
  const dateTime = format(new Date(), 'MMMM dd,yy pp')
  const updatedPost= {id, title: editTitle,date:dateTime,body:editBody}
  try{
    const response = await api.put(`/posts/${id}`,updatedPost)
    const result = response.data
    setPosts(posts.map(post=> post.id === id ? 
      {... result}:post));;
    setEditBody('');
    setEditTitle('');
    navigate('/');

  }catch(err){
    console.log(err.message )
    console.log("welcome")
  }
 }
  return (
    <section>
      
      <Header
        title="glance"
        search ={search}
        setSearch={setSearch}
        setPostBody={setPostBody}
        setPostTitle={setPostTitle}
        postBody={postBody}
        postTitle={postTitle}
        handleSubmit={handleSubmit}
        searchResult = {searchResult}
      />
      <section className="hcontent-section-app">
        <NavBar
          
        />
        <div className='for-line-app'></div>
        <section className='main-section-app'>
          <Routes>
            <Route path='/' element={
              <Home posts={searchResult} 
                isLoading={isLoading}
            />}/>
            <Route path='/post'>
              <Route index element={
                <NewPost
                  postTitle = {postTitle}
                  postBody = {postBody}
                  handleSubmit={handleSubmit}
                  setPostTitle = {setPostTitle}
                  setPostBody = {setPostBody}
                  images={images}
                  setImages={setImages}
                  
                />
              }/>
              <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} images={images}/>}/>
            </Route> 
            <Route path='/edit/:id' element={
              <Editpost
                posts={posts}
                setEditBody={setEditBody}
                setEditTitle={setEditTitle}
                editTitle={editTitle}
                editBody={editBody}
                handleEdit={handleEdit}
              />}/>
            <Route path='/search' element ={<Search/>}/>
            <Route path='/about' element = {<About/>} />
            <Route path= "*" element= {<Missing/>}/>
          </Routes>
        </section>
      </section>
      
    </section>
  )
}

export default App