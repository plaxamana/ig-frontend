import Post from './components/Post'
import React, { useState, useEffect } from 'react'

function App() {

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const getPosts = async () => {

      try {
        const res = await fetch('http://localhost:1330/posts')
        const data = await res.json()
        setPosts(data)
      }
      catch (e){
        console.log(e)
      }
    }
    getPosts()
  }, [])

  return (
    <div className="container mx-auto p-20 flex flex-col space-y-8">
      { posts.map(post => (
          <Post
            image={post.image[0]}  
            description={post.description}
            likes={post.likes}
          />
        )
      )}
    </div>
  );
}

export default App;
