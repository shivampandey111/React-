import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
   // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shivampandey111')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
        
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-400 p-4 text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    try{
        const response = await fetch('https://api.github.com/users/shivampandey111')
        return response.json()
    }
    catch(error){
        console.log('error')
    }
}