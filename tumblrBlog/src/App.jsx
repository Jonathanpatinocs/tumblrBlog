
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("https://api.tumblr.com/v2/blog/johnyyy0-0.tumblr.com/posts/photo?api_key=I55g8wzJz8ABvAtEQWkGEsOr3IMZsKY4OvDsnHebXne2KI9aeX")
    .then(res => res.json())
    .then(data => setData(data))
    
    
  }, [])
  console.log(data);
  

  
  return (
    <div>
      {}
    </div>
  )
}

export default App
