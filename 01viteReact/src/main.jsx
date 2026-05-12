import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'

// import { createRoot } from 'react-dom/client'
import './index.css'
import Hello from './App'
import World from './Ex'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click'
    //This is the react element which defines the type of element that would be injected, its properties etc.
    //Basically react expects a function and then it converts that into object according to its own syntax, we can not define our own 
}

function Hellooo(){
  return (
    <div>
      <h1>
        Hello !!!
      </h1>
    </div>
  )
}
const Google = <a href="https://google.com" target='_blank'>Visit Google</a>


const create = React.createElement(
  //As we have imported react, so we have to use react syntax to create element, first it expects element type, then attributes and then text
  'a',
  {href: 'https://google.com', target: '_blank'},  //Attribute setting, empty if no attributes but this has to be passed
  'click' //Now the whole tree is completed, after this comes variable injections
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //So react creates its own dom and changes it and compares it to the browser dom and update it?? 
  //reactElement won't work becuase render expects a function with syntax of react

  //Now x in jsx is the html part, to insert js part we can write the js in the respective file
  <>
    {/* JSX, implement hmtl elements through js */ }
    <Hello />
    <World />
    <Hellooo />

    
    
 </>
 
)

 