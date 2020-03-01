import { ref } from 'vue';
import axios, { AxiosResponse } from 'axios';

export default function useFetchResource(
  url: string,
  params?: any,
): { fetchResource: () => Promise<void> } {
  const fetchResource = async () => {
    let response;
    try {
      response = await axios.request({
        headers: {
          Authorization: `${process.env.UNSPLASH_ACCESS_KEY}, ${process.env.UNSPLASH_SECRET_KEY}`,
        },
        method: 'GET',
        url,
        params,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    fetchResource,
  };
}
