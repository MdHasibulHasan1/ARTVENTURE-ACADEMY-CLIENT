import axios from 'axios';

export const saveUser = async (user) => {
  try {
    const response = await axios.post('https://summer-camp-server-hasib7143-gmailcom.vercel.app/users', user);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
