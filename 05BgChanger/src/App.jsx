import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  
  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap px-2  bottom-12 inset-x-0 justify-center'>
        <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl'>
          <button className='outline-none pd-4 bg-red-500 rounded-2xl' onClick={()=>{setColor('red')}} >Red</button> 
          <button className='outline-none pd-4 bg-green-500 rounded-2xl' onClick={()=>{setColor('green')}}>Green</button>
          <button className='outline-none pd-4 bg-blue-500 rounded-2xl' onClick={()=>{setColor('blue')}}>Blue</button>
          <button className='outline-none pd-4 bg-orange-500 rounded-2xl' onClick={()=>{setColor('orange')}}>Orange</button>

        </div>
      </div>

    </div>
  )
}

export default App
