import { useEffect, useState } from "react";


const useFetch = (url, options) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getAPIResponse = async () => { 
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
    }
    getAPIResponse()
  }, [url, options])
  


  return data
}


export default useFetch