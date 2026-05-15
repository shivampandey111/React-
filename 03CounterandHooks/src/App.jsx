import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {

//useState()  //Used to propogates the changes in the UI
//()  This expects a default value, can be anything
//const [] = useState()   useState gives two values as an output in an array format, first is the name of the variable and second is the method
const [counter, setCounter] = useState(0) //counter is the variable and setCounter is the method responsible for updating the variable
const [para, setPara] = useState('')
 // let counter = 15;
  const d = ()=> {
    if(counter===20){
      setPara('20 Plwease stop')
    }
    else{

        console.log(counter)

        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)       //The final value would still be one. useState sends the updates to ui or even variable in batches. It sends all the tasks one time and in this case it would see the tasks are same, so only one time, it would get executed. So, only last statement runs and it overwrites previous ones. The last setCounter is using counter which is defined outside this function and is not recieveing the previous counter as the callback. setCounter provides a callback. 
      //To update this, use callback. 
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
        setCounter(prevCounter=>prevCounter+1)
    }
    
  }
  const e = ()=>{
    if(counter===0){
       setPara('0, plwease stop')
      
    }
    else{
      
    setCounter(counter-1)
    }
    
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={d}
      >Add</button>
      <p>{para}</p>
      <button
      onClick={e}
      >Decrease</button>
    </div>
  )
}

export default App
