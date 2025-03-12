import axios from 'axios';

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    try {
      const response = await axios.get('https://reqres.in/api/users/2');
      return response.data; // Ensure only data is returned
    } catch (error : any) {
      throw createError({
        statusCode: error.response?.status || 500,
        message: error.response?.data || 'Failed to fetch data',
      });
    }
  }
});
