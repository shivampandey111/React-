import { use, useCallback, useEffect, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [len, setLen] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState('')


  //Use ref hook
  const passwordRef = useRef(null)
//useCallback basically memoizes the function, stores it in memory (cache), use whatever can be used from the memory, previous part
//passes two things: function and dependencies



  const Passsword = useCallback(()=>{
    let pas = ""
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    if(numAllowed) str += '1234567890'
    if(charAllowed)  str += "!@#$%^&*()_+=-~`"
    for (let i = 1; i <=len; i++) {
      let element = Math.floor(Math.random()*str.length +1);
      pas += str.charAt(element)
    }
    setPass(pas)
  }, [numAllowed, charAllowed, len, setPass]) //If these dependencies changes, optimize the method


  const PasstoClip = useCallback(()=>{
    //with passwordRef we can tell more optimize result to the user, selectable or not, accessable or not etc..
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(()=>{Passsword()}, [len, numAllowed, charAllowed, setPass]) //If these changes, re run the method again


  return (
    <>
    <div className='mx-auto shadow-md w-full max-w-md rounded-lg my-8 text-orange-500 bg-gray-700'>

       <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4  '>
           <input type="text"
                  value={pass}
                  className='outline-none w-full py-1 px-3 '
                  placeholder='Enter passsword'
                  readOnly
                  ref={passwordRef}
            />
            <button className='bg-blue-500 px-3 py-0.5 outline-none'
            onClick={PasstoClip}
            >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={20}
       
        className='cursor-pointer'
        onChange={(e)=>{setLen(e.target.value)}}
        />
        <label> length: {len}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={()=>{
          setNumAllowed((prev)=>!prev);
        }}
        />
        <label> Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }}
        />
        <label>Char </label>
      </div>


    </div>

     </div>
    </>
  )
}

export default App
