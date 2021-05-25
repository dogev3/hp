import { useState, useEffect } from 'react';
import axios from 'axios';
 
export const useFetch = <T>(url: string): T | undefined => {
  const [data, setData] = useState<T>(undefined);

  useEffect(() => {
    axios(url).then((result) => setData(result.data));
  }, [url, setData]);

  return data;
}