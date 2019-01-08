import axios from 'axios';

// allows us to create customized instance of axios client
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 26f1d9b70bf982834a7201fbe35c7ce31778d119cb22c7922e5d8098bf273c3f'
    }
});
