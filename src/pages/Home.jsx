import React from 'react'
import SearchBar from '../components/SearchBar'
import Tab from '../components/Tab'
import { useSelector } from 'react-redux'
import { ResultGrid } from '../components/ResultGrid'
export const Home = () => {
    const {query} = useSelector((store) => store.search)
  return (
    <div>
        <SearchBar/>

        {query != ''? <div> <Tab/>
        <ResultGrid/></div> : ''}
       
     </div>
  )
}
