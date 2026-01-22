import axios from 'axios';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_API_KEY = import.meta.env.VITE_TENOR_KEY;

export const fetchUnsplashPhotos = async (query, page=1, per_page=20)=>{
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page, per_page},
        headers:{Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`}
    })
    return res.data;
    
}

export const fetchPexelsVideos = async (query, page=1, per_page= 20)=>{
    const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,page, per_page},
        headers:{Authorization: PEXELS_API_KEY}

    })
   return res.data;
}

export const fetchTenorGifs = async (query, limit = 20)=>{
    const res = await axios.get('https://tenor.googleapis.com/v2/search',{
        params:{q: query, key: TENOR_API_KEY, limit},
    })

    return res.data;
}