import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import{setQuery} from '../redux/features/searchSlice' 
const SearchBar = () => {

    const[text, setText] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    }
  return (
    <div>
        <form onSubmit={(e)=>{submitHandler(e)}}
            
            className='flex bg-gray-900 gap-5 py-10 px-14'>
            <input 
            value = {text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
           
            required
            className='w-full border-2 px-6 py-3 text-xl'
            type="text " placeholder='Search Anything....' />
            <button  className='border-2 px-6 py-3 text-xl '>Search</button>
        </form>

    </div>
  )
}

export default SearchBar