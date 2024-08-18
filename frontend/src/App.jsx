import  { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'

function App() {
  
  const [posts, setPosts] = useState([{}])
  const [dates, setDates] = useState([{}])

  const fetchAPI = async () => {
    const postsContainer = document.getElementById('posts-container')
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response.data.posts[1].date)


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
      <div id='posts-container'></div>
      <img src="http://api.tumblr.com/v2/blog/johnyyy0-0.tumblr.com/avatar/48" alt="" />
    </div>
  )
}

export default App
