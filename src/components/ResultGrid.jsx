import React from 'react'
import{fetchUnsplashPhotos, fetchPexelsVideos, fetchTenorGifs} from '../api/mediaApi'
import{useSelector, useDispatch} from 'react-redux'
import{ setLoading, setError, setResults} from '../redux/features/searchSlice'
import{useEffect} from 'react'
import { ResultCard } from './ResultCard'

export const ResultGrid = () => {
    const {query, activeTab,results} = useSelector((store)=>store.search)
        
    const dispatch = useDispatch(); 
    useEffect(function(){
            const getData = async()=>{
            try{
                dispatch(setLoading(true));
                let data = [];
                if(!query)return;
                if(activeTab == 'photos'){
                let response = await fetchUnsplashPhotos(query)
                data = response.results.map((photo)=>({
                    id:photo.id,
                    type:'photo',
                    title:photo.alt_description,
                    thumbnail: photo.urls.small,
                    src: photo.urls.full,
                    url: photo.links.html,
                })
                )}
                if(activeTab == 'videos'){
                let response = await fetchPexelsVideos(query)
                
                data = response.videos.map((video)=>({
                    id:video.id,
                    type:'video',
                    title: video.user.name || 'video',
                    thumbnail:video.image,
                    src:video.video_files[0].link,
                    url: video.url
                }))
                
            }
            if(activeTab == 'gifs'){
                let response = await fetchTenorGifs(query);
                  
                data = response.results.map((gif)=>({
                    id:gif.id,
                    type:'gif',
                    title:gif.title||'gif',
                    thumbnail:gif.media_formats.tinygif.url,
                    src:gif.media_formats.gif.url,
                    url: gif.itemurl
                }))
            }

            dispatch(setResults(data));
            } catch(err){
            dispatch(setError(err.message || 'Something went wrong'));
        }   
          
        }
        getData();
    },[query, activeTab,dispatch])
    
    


  return (
 
  <div className='flex flex-wrap gap-3 overflow-y-auto pl-11  '>
    {results.map((item) => (
      <ResultCard  key= {`${item.type}-${item.id}`} item={item}/>
        
    ))}
  </div>
    );

  
}
