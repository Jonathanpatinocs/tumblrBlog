import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostBlock from './components/PostBlock'

import './App.css'

function App() {
  
  const [posts, setPosts] = useState([{}])
  const displayPosts = []

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response.data.posts[0].trail[0].content)
    displayPosts.push(response.data.posts[0].trail[0].content)
    setPosts(response.data.posts[0].trail[0].content)
    for (let i = 1; i < response.data.posts.length; i++) {
      posts.push(response.data.posts[i].trail[0].content)
      displayPosts.push(response.data.posts[i].trail[0].content)
    }
    
    
    console.log(posts)
    console.log(displayPosts)

    
    
  }
  useEffect(() => {
    fetchAPI()
  },[])



  return (
    <div>
     {displayPosts.map(post => {
      <div>{post}</div>
     })}
    </div>
  )
}

export default App
