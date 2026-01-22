import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tab = () => {
    const tabs = ['photos', 'videos', 'gifs'];
    const activeTab = useSelector((state)=>state.search.activeTab);
    const dispatch = useDispatch();
  return (
    <div className='flex gap-5 p-10 mt-5 justify-center'>
        {tabs.map((tab, idx)=>{
            return (
            <button className={`px-14 py-3 cursor-pointer active:scale-95 ${activeTab === tab ? 'bg-gray-900' : 'bg-gray-700'}`}
             key={idx}
              onClick={()=>{
                dispatch(setActiveTab(tab))
             }}
             >{tab.charAt(0).toUpperCase() + tab.slice(1)}
            
            </button>)
        })}

    </div>
  )
}

export default Tab;