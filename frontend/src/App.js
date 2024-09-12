//Made this using the following tutorial: https://www.youtube.com/watch?v=w3vs4a03y3I
//-Ian 9/9/2024
import React, {useEffect, useState} from 'react'

function App(){

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api")
  .then(response => response.json())
  .then(data => {
      setBackendData(data.users)
    }
  )
}, [])

  return (
    <div>

    {(typeof backendData.length === 'undefined') ? (
      <p>Loading...</p>
    ): (
      backendData.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}

    </div>
  )
}

export default App
