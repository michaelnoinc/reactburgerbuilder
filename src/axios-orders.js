import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-329b2.firebaseio.com/'
});

export default instance;