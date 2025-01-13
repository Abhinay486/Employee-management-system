import React, { useContext, useState } from "react";
import Header from "../other/Header.jsx";
import { AuthContext } from "../../context/AuthProvider.jsx";

const AdminDashboard = (props) => {
  const authData = useContext(AuthContext);
  
  const [formState, setFormState] = useState({
    title: "",
    date: "",
    assignempName: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    const { title, date, assignempName, category, description } = formState;
    if (!title || !date || !assignempName || !category || !description) {
      alert("All fields are required!");
      return;
    }
    const data = JSON.parse(localStorage.getItem("employee"));
    if (Array.isArray(data)) {
      data.forEach((elem) => {
        if (assignempName === elem.name) {
          const newTask = {
            title,
            description,
            date,
            assignempName,
            category,
            active: true,
            failed: false,
            completed: false,
            newTask: true,
          };
          if (Array.isArray(elem.tasks)) {
            elem.tasks.push(newTask);
          } else {
            elem.tasks = [newTask];
          }
          elem.taskCount.active += 1;
          localStorage.setItem("employee", JSON.stringify(data)); 
          console.log(`Task added for ${assignempName}:`, newTask);
        }
      });
    }

    // Reset form
    setFormState({
      title: "",
      date: "",
      assignempName: "",
      category: "",
      description: "",
    });
  };
  const dataa = authData[0];
  return (
    <div className="h-screen w-full text-white">
      <Header changeUser={props.changeUser} />
      <div>
        <form
          onSubmit={formHandler}
          className="p-3 pl-4 bg-transparent bg-[#1c1c1c] w-full flex justify-between items-start"
        >
          <div className="w-1/2 flex flex-col p-2 mr-12">
            {/* Task Title */}
            <div className="pb-4">
              <h3>Task Title</h3>
              <input
                name="title"
                value={formState.title}
                onChange={handleChange}
                type="text"
                placeholder="Task Title"
                className="p-1 mt-1 w-[80%] rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            {/* Date */}
            <div className="pb-4">
              <h3>Date</h3>
              <input
                name="date"
                value={formState.date}
                onChange={handleChange}
                type="date"
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            {/* Assign to */}
            <div className="pb-4">
              <h3>Assign to</h3>
              <input
                name="assignempName"
                value={formState.assignempName}
                onChange={handleChange}
                type="text"
                placeholder="Employee Name"
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            {/* Category */}
            <div className="pb-4">
              <h3>Category</h3>
              <input
                name="category"
                value={formState.category}
                onChange={handleChange}
                type="text"
                placeholder="Task Category"
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            {/* Description */}
            <h3 className="m-2">Description</h3>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              className="p-2 w-full mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              placeholder="Task Description"
            ></textarea>
            {/* Submit Button */}
            <button className="bg-green-500 p-2 rounded m-2 font-bold">
              Create Task
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 bg-[#1c1c1c] w-full scroll overflow-y-auto scrollDiv p-5">
        {/* Employee List Header */}
        <div className="flex w-full p-4">
          <h2 className="font-bold text-[1.04rem] w-1/5">Employee Name</h2>
          <h2 className="w-1/5 text-orange-400">Active</h2>
          <h2 className="w-1/5 text-green-400">Completed</h2>
          <h2 className="w-1/5 text-blue-400">New Tasks</h2>
          <h2 className="w-1/5 text-red-400">Failed</h2>
        </div>
        {/* Employee Task Counts */}
        {dataa.employee.map((e, idx) => (
          <div
            key={idx}
            className="border-red-400 border-2 h-12 flex items-center justify-center rounded-xl mb-2"
          >
            <div className="flex p-4 w-full">
              <h2 className="font-bold text-[1.04rem] w-1/5">{e.name}</h2>
              <h2 className="w-1/5 text-orange-400">{e.taskCount.active}</h2>
              <h2 className="w-1/5 text-green-400">{e.taskCount.completed}</h2>
              <h2 className="w-1/5 text-blue-400">{e.taskCount.newTask}</h2>
              <h2 className="w-1/5 text-red-400">{e.taskCount.failed}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
