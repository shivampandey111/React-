import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../Components/Card' //Card is a component that we can use multiple times, like instead of writing html, css and js traditionally in different files for a card, write it into one place and make it a component so that it can be used later
function App() {
  let myArr = [1,2,3,4]
  let myObj = {
    username: 'Hello'
  }
  let name = ['shivam', 'hello', 'pandey']
  let role = ['cs', 'css', 'csss']
  let desc = ['d1', 'd2', 'd3']
  return (
    <>
     <h1 className='bg-green-400 text-black p-5  rounded-xl  '>Tailwind test</h1>
      <Card username = {name[0]} desc = {desc[0]} role = {role[0]}/> {/* Properties are defined here     */}
      <Card username = {name[1]} desc = {desc[1]} role = {role[1]}/>
      <Card username = {name[2]} desc = {desc[2]} role = {role[2]}/> 


    
    </>
  )
}

export default App
