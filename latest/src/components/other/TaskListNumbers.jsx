import React from 'react'

const TaskListNumbers = (props) => {
    console.log(props);
  return (
    <div className='text-white flex mt-10  justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] bg-red-500 p-6 px-9'>
            <h2 className='text-2xl font-semibold'>{props.data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl  w-[45%] bg-green-400 p-6 px-9'>
            <h2 className='text-2xl font-semibold'>{props.data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl  w-[45%] bg-blue-400 p-6 px-9'>
            <h2 className='text-2xl font-semibold'>{props.data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl  w-[45%] bg-yellow-400 p-6 px-9'>
            <h2 className='text-2xl font-semibold'>{props.data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        </div>
  )
}

export default TaskListNumbers