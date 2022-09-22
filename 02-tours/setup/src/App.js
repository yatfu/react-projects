import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json();
      setTours(tours)
      //console.log(tours) // DEBUG
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }

    console.log(tours)
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  else return <main>
    <Tours />
  </main>
}

export default App
