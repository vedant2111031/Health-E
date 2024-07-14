import { useEffect, useState } from "react";
import { token } from "../config";
import {toast } from 'react-toastify';

const useFetchData = (url) => {
  const [data, setData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(url)
  useEffect(() => {
    const fetchData = async () => {
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
