import React from 'react'

const NewTask = ({data}) => {
  // console.log(data)
  return (
    <div className="w-[20%] flex-shrink-0 rounded h-full bg-red-500 p-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="bg-red-600 rounded py-1 px-2 font-bold">{data.category}</h2>
          <h3 className="font-bold">{data.date}</h3>
        </div>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <h3 className="mt-2 text-[16px]">
          {data.description}
        </h3>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 p-2 text-sm rounded'>mark as completed</button>
            <button className='bg-red-500 p-2 text-sm rounded'>mark as failed</button>
        </div>
      </div>
  )
}

export default NewTask