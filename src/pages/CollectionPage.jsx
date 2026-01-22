import React from 'react'
import {useSelector} from "react-redux"
import CollectionCard from '../components/CollectionCard'
const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)
  return (
    <div className='flex flex-wrap gap-3 overflow-y-auto pl-11  '>
      {collection.map((item, idx)=>{
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}


    </div>
  )
}

export default CollectionPage