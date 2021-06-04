import {useState} from 'react';

function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const fetchApi = async (api, ...args) => {
    setLoading(true);
    setError('');
    const response = await fetch(
      `https://ecommerce-backend100.herokuapp.com/api/${api}`,
      ...args,
    );

    const data = await response.json();
    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }
    setData(data);
    setLoading(false);
    console.log(data);
  };

  return {loading, error, data, fetchApi};
}

export default useApi;
