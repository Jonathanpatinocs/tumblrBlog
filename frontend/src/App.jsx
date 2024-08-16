import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  
  const [posts, setPosts] = useState([])

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
      {posts.map((post, index) => (
        <span key={index}>{post}
        <br />
         </span>
      ))}
    </div>
  )
}

export default App
