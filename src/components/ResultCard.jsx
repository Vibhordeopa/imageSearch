import React from 'react'
import { addCollection, addedToast } from '../redux/features/collectionSlice';
import {useDispatch} from 'react-redux'
export const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item)=>{
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className="relative w-[16vw] h-80 bg-white rounded overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        {item.type === 'photo' && (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        )}
        {item.type === 'video' && (
          <video muted autoPlay loop className="h-full w-full object-cover" src={item.src} />
        )}
        {item.type === 'gif' && (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        )}
      </a>

      {/* Overlay */}
      <div className="z-50 absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h2 className="text-sm font-semibold capitalize line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={(e) => {
            e.stopPropagation();  
            e.preventDefault();   
            addToCollection(item);
           
          }}
          className="bg-indigo-600 rounded px-3 py-1 font-medium cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};
