import { Home } from './pages/Home'
import{Route, Routes} from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div  className='bg-black h-screen w-full text-white p-4 gap-2 overflow-y-auto'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>

      </Routes>
      <ToastContainer/>  
    </div>
  )
}


export default App
