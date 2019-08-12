import axios from 'axios';
const API_KEY = 'AIzaSyBwxY_5Kp0zIuyZ9aGd_WRYJfnOXwv8Lsw';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const SearchYoutube = (keywords) => {
    const params = {
        part: 'snippet',
        maxResults: 25,
        q: keywords,
        key: API_KEY,
        type: 'video'
    };

    return axios.get(BASE_URL, {params});

};

export default SearchYoutube;