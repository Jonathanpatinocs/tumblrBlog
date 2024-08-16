import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostBlock from './components/PostBlock'

import './App.css'

function App() {
  
  const [posts, setPosts] = useState({})

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response.data.posts)
    setPosts(response.data.posts)
  }
  useEffect(() => {
    fetchAPI()
  },[])


  return (
    <div>
      <img src="https://64.media.tumblr.com/9f3ad1f44f4e0808e88532087dd288bc/b744750790624d6b-8f/s640x960/424df352e43c1006eb63ac65f79c9bc4eaba95e5.jpg" alt="" />
    </div>
  )
}

export default App
