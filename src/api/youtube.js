import axios from 'axios';
const KEY = 'AIzaSyCQqlJWrq6ox1DsvDYb3-sy2_vKA8TGwgk';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
   
    
    params: {
        part: 'snippet',
        maxResults: 2,
        key: KEY
    }
    })
