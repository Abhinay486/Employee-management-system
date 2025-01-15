import React, { useContext } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/other/header";

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import EmployeeDetails from "./components/other/EmployeeDetails";
const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [luserData, setLuserData] = useState(null);
  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("loggedIn");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setUser(parsedData.role); // Set the role (admin or employee)
      if (parsedData.data) {
        setLuserData(parsedData.data); // Set additional user data if available
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "marvel@avenger.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const e = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (e) {
        setUser("employee");
        setLuserData(e);
        localStorage.setItem(
          "loggedIn",
          JSON.stringify({ role: "employee", data: e })
        );
      }
    } else alert("Enter Valid credentials");
  };

  return (
    <>
      {user ? (
        user === "admin" ? (
          <AdminDashboard changeUser={setUser} />
        ) : user == "employee" ? (
          <EmployeeDashboard changeUser={setUser} data={luserData} />
        ) : null
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  )
};

export default App;
