import { useState } from 'react'
import './App.css'
import data from './data.js' 
import Tours from './components/Tours.jsx'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id != id);
    setTours(newTour); 
  }

  if(tours.length === 0) {
    return(
        <div className='refresh'>
          <h2>No Tour Left</h2>
          <button className='btn-white' onClick={ ()=> setTours(data)}>Refresh</button>
        </div>
    )
  }
  return (
    <>
      <div className='App'>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
      
    </>
  )
}

export default App
