import React from 'react'

function Card({username='Default Value', desc, role})  {//Properties are passed here
  
  return (
    <div className="max-w-xs rounded-md shadow-md  text-gray-100 ">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8 bg-green">
        <div className="space-y-2 bg-red">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>  {/*Properties are handled here*/ }
          <p className="text-gray-400">
            {desc}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-400 text-gray-200"
        >
          {role}
        </button>
      </div>
    </div>
  )
}

export default Card