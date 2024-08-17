import React, { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'

function App() {
  
  const [posts, setPosts] = useState([{}])
  

  const fetchAPI = async () => {
    const postsContainer = document.getElementById('posts-container')
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response.data.posts[0].trail[0].content)

    setPosts(response.data.posts[0].trail[0].content)
    let post = document.createElement('div')
    post.innerHTML = response.data.posts[0].trail[0].content
    postsContainer.append(post)

    for (let i = 1; i < response.data.posts.length; i++) {
      posts.push(response.data.posts[i].trail[0].content)
      let post = document.createElement('div')
      post.innerHTML = response.data.posts[i].trail[0].content
      postsContainer.append(post)
      
    }
    
    
    console.log(posts)
    

    
    
  }
  useEffect(() => {
    fetchAPI()
  },[])



  return (
    <div>
      <div id='posts-container'></div>
    </div>
  )
}

export default App
