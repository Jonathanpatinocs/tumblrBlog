import  { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'

function App() {
  
  
  const [posts, setPosts] = useState([{}])
  const [dates, setDates] = useState([{}])

  const fetchAPI = async () => {
    const postsContainer = document.getElementById('posts-container')
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response.data.posts[1])
    


    setPosts(response.data.posts[0].trail[0].content)
    setDates(response.data.posts[0].date)

    let postBlock = document.createElement('div')
    postBlock.classList.add('post-block')
    let post = document.createElement('div')
    let date = document.createElement('p')

    post.innerHTML = response.data.posts[0].trail[0].content
    date.innerText = response.data.posts[0].date
    postBlock.append(post)
    postBlock.append(date)
    postsContainer.append(postBlock)

    for (let i = 1; i < response.data.posts.length; i++) {
      posts.push(response.data.posts[i].trail[0].content)
      dates.push(response.data.posts[i].date)

      let postBlock = document.createElement('div')
      postBlock.classList.add('post-block')
      let post = document.createElement('div')
      let date = document.createElement('p')

      date.innerText = dates[i]
      post.classList.add('post')
      post.innerHTML = posts[i]

      postBlock.append(post)
      postBlock.append(date)
      postsContainer.append(postBlock)
      
    }
    
    
    console.log(posts)
    

    
    
  }
  
  useEffect(() => {
    fetchAPI()
    
  },[])



  return (
    <div>
      <div id='header'>
        
      </div>
      <div id='links'>
        <ul>
          <li><a href="https://johnyyy0-0.tumblr.com/archive">archive</a></li>
          <li><a href="https://open.spotify.com/user/johnypatino?si=e27bb26d99714cfd">music</a></li>
        </ul>
      </div>
      <div id='posts-container'></div>
      
      
    </div>
  )
}

export default App
