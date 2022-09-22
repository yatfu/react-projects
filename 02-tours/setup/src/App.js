import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]); // holds json data

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id) // filters all tours w/ given id
    setTours(newTours)
  }

  const resetTours = () => {
    console.log('Reset Tours')
    fetchTours()
  }

  const fetchTours = async () => { // fetches data onto tours useState value
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json();
      setTours(tours)
      // console.log(tours) // DEBUG
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
    <Tours tours={tours} removeTour={removeTour} resetTours={resetTours}/>
  </main>
}

export default App
