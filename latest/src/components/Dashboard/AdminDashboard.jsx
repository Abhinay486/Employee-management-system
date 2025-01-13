import React, { useContext, useState } from "react";
import Header from "../other/Header.jsx";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { array, func } from "prop-types";
import EmployeeDetails from "../other/EmployeeDetails.jsx";
import { Link } from "react-router-dom";

const AdminDashboard = (props) => {
  const authData = useContext(AuthContext);
  const dataa = authData[0];
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignempName, setAssignEmpName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [userTasks, setUserTasks] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    setUserTasks({
      taskTitle,
      date,
      assignempName,
      category,
      description,
      active: true,
      failed: false,
      completed: false,
      newTask: true,
    });
    const data1 = JSON.parse(localStorage.getItem("employee"));
    // console.log('sdfdfd', data1)
    // //
    //  console.log(userTasks)
    // data.forEach(function (elem) {
      //   if (assignempName == elem.name) {
        // console.log(elem.tasks);
        // console.log("A");
        //     elem.tasks.push(userTasks);
        // console.log("B");
        //   }
    // });
    // localStorage.setItem("employee", JSON.stringify(data));
    // console.log(data);
    setTaskTitle("");
    setDate("");
    setAssignEmpName("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className="h-screen w-full text-white">
      <Header changeUser={props.changeUser} />
      <div>
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          action=""
          className="p-3 pl-4 bg-transparent bg-[#1c1c1c] w-full flex justify-between items-start"
        >
          <div className="w-1/2 flex flex-col p-2 mr-12">
            <div className="pb-4">
              <h3>Task Title</h3>
              <input
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                placeholder="Make UI"
                className="p-1 mt-1 w-[80%] rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            <div className="pb-4">
              <h3>Date</h3>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                placeholder="Make UI"
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            <div className="pb-4">
              <h3>Assign to</h3>
              <input
                onChange={(e) => {
                  setAssignEmpName(e.target.value);
                }}
                type="text"
                placeholder="Enter employee name"
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
            <div className="pb-4">
              <h3>Category</h3>
              <input
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                placeholder="Design, Development, etc..."
                className="p-1 w-[80%] mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <h3 className="m-2">Description</h3>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="p-2 w-full mt-1 rounded bg-[#1c1c1c] border-2 border-emerald-600"
              name=""
              id=""
              placeholder="Description of task"
            ></textarea>
            <button className="bg-green-500 p-2 rounded m-2 font-bold">
              Create Task
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 bg-[#1c1c1c] w-full sroll overflow-y-auto scrollDiv p-5">
        <div className="flex w-full p-4">
          <h2 className="font-bold text-[1.04rem] w-1/5">Employee name</h2>
          <h2 className="w-1/5 text-orange-400">Active</h2>
          <h2 className="w-1/5 text-green-400">Completed</h2>
          <h2 className="w-1/5 text-blue-400">Newtasks</h2>
          <h2 className="w-1/5 text-red-400">Failed</h2>
        </div>
        {dataa.employee.map(function (e, idx) {
          return (
            <div
              key={idx}
              className="border-red-400 border-2 h-12 flex items-center justify-center rounded-xl mb-2"
            >
              <div className="flex p-4 w-full">
                <h2 className="font-bold text-[1.04rem] w-1/5">{e.name}</h2>
                <h2 className="w-1/5 text-orange-400">{e.taskCount.active}</h2>
                <h2 className="w-1/5 text-green-400">
                  {e.taskCount.completed}
                </h2>
                <h2 className="w-1/5 text-blue-400">{e.taskCount.newTask}</h2>
                <h2 className="w-1/5 text-red-400">{e.taskCount.failed}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
