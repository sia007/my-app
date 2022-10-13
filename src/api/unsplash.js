import Axios from "axios";

 export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: "Client-ID knOiSzuUqm3Oo65846x2V1mn5h1f8gEsjC9ngrl1xFM",
        },
        
        params: {
        part: 'snippet',
        maxResults: 7
        }

    }
);
