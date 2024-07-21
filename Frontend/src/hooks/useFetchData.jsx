import { useEffect, useState } from "react";
import {  getToken } from "../config";
import {toast } from 'react-toastify';




const useFetchData = (url) => {
  const [data, setData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token=getToken()
      setLoading(true);

     

//now try block is running
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}`},
        });
        
        
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }
        
        // console.log(result)
        
        setData(result.data);
        setLoading(false);
      } 
      
      catch (error) {
        setLoading(false);
        setError(error.message);
        return toast.error(error);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
