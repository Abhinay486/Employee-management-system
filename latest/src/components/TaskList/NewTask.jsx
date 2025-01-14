import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext); // Access userData and its updater function
  const [res, setRes] = useState(null);

  // Match the user when the component mounts or when `userData` or `props.nname` changes
  useEffect(() => {
    const matchedUser = userData.find((elem) => elem.name === props.nname);
    setRes(matchedUser || null); 
  }, [userData, props.nname]);

  // Update user data in the context
  const updateContextData = (updatedUser) => {
    const updatedUsers = userData.map((user) =>
      user.name === updatedUser.name ? updatedUser : user
    );
    setUserData(updatedUsers); // Update the AuthContext
  };

  return (
    <div className="w-[20%] flex-shrink-0 rounded h-full bg-red-500 p-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="bg-red-600 rounded py-1 px-2 font-bold">{props.data.category}</h2>
        <h3 className="font-bold">{props.data.date}</h3>
      </div>
      <h2 className="text-xl font-bold">{props.data.title}</h2>
      <h3 className="mt-2 text-[16px]">{props.data.description}</h3>
      <div className="flex justify-between mt-4">
        {/* Mark as Completed */}
        <button
          onClick={() => {
            if (!res) return;

            // Update the local state
            const updatedTaskCount = {
              ...res.taskCount,
              completed: res.taskCount.completed + 1,
              active: res.taskCount.active - 1,
            };
            const updatedUser = { ...res, taskCount: updatedTaskCount };
            setRes(updatedUser); // Update local state
            updateContextData(updatedUser); // Sync with context
            console.log("completed")
          }
        }
          className="bg-green-500 p-2 text-sm rounded"
        >
          Mark as Completed
        </button>
        {/* Mark as Failed */}
        <button
          onClick={() => {
            if (!res) return;

            // Update the local state
            const updatedTaskCount = {
              ...res.taskCount,
              failed: res.taskCount.failed + 1,
              active: res.taskCount.active - 1,
            };
            const updatedUser = { ...res, taskCount: updatedTaskCount };
            setRes(updatedUser); // Update local state
            updateContextData(updatedUser); // Sync with context
          }}
          className="bg-red-500 p-2 text-sm rounded"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default NewTask;
