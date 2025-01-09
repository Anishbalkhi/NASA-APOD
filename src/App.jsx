import { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import Page from './Components/Page'
import Footer from './Components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showModel, setShowModel] = useState(false)
  const [data, setData] = useState(null)
  
  function handleToggleModel(){
    setShowModel(!showModel)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = 'ps0Dj2xJO678ILWWRMW7vtGtPypPjJ9hv9adtdRD'
      const url = 'https://api.nasa.gov/planetary/apod' + 
      `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }

      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData  = await res.json()
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData();

  }, [])

  
  return (
    <>
      {data ? (<Page data={data}/>) : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>

        </div>
      )}
      {showModel &&
        (<Sidebar data={data} handleToggleModel={handleToggleModel} />)
      }
      {data && (<Footer data={data} handleToggleModel={handleToggleModel}/>)
    }
      </>
  )
}

export default App
