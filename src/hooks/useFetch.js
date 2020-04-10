import {useEffect, useState} from "react"
// import useLocalStorage from "./useLocalStorage"

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const FetchData = async () => {
        try {
          const res = await fetch(url, options);
          console.log("res", res)
          const json = await res.json();
          console.log(json)
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      FetchData();
    }, []);
    return { response, error };
  };

  export default useFetch