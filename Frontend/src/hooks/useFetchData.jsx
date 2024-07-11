import { useEffect, useState } from "react";
import { token } from "../config";
import {toast } from 'react-toastify';

const useFetchData = (url) => {
  const [data, setData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);


//try block not running
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}`},
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }
        console.log();
        setData(result.data);
        setLoading(false);
      } 
      
      catch (error) {
        setLoading(true);
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
