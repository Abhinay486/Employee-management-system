import React from 'react'

const CompleteTask = ({data}) => {
  // console.log(data.category)
  return (
    <div className="w-[20%] flex-shrink-0  rounded h-full bg-blue-400 p-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="bg-red-600 rounded py-1 px-2 font-bold">{data.category}</h2>
          <h3 className="font-bold">{data.date}</h3>
        </div>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="mt-2 text-[16px]">
          {data.description}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 p-2 text-sm rounded'>complete</button>
            
        </div>
      </div>
  )
}

export default CompleteTask