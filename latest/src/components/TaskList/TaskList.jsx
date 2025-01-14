import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthProvider";
const TaskList = (props) => {
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(props)
  return (
    <div className="text-white font-sans scrollDiv overflow-x-auto scroll-smooth h-[56%] w-full rounded-xl mt-10 py-6 flex flex-nowrap gap-5 items-center justify-start">
      {/* <AcceptTask data={data} />
      <NewTask data={data}/>
      <CompleteTask data={data}/>
      <FailedTask data={data}/> */}
      {props.data.tasks.map((elem, index) => {
  
         
        if (elem.newTask) {
          return <NewTask data={elem} key={index} nname = {props.data.name}/>;
        }
          if(elem.completed)
            return <CompleteTask key={index} data={elem} nname = {props.data.name} />;
          if (elem.active) {
            return <AcceptTask data={elem} key={index} nname = {props.data.name} />;
          }
          if (elem.failed) {
            return <FailedTask data={elem} key={index} nname = {props.data.name} />;
          }
          return null;
        
      })}
    </div>
  );
};

export default TaskList;
