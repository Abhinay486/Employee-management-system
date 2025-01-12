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
  const authData = useContext(AuthContext);
  const [luserData, setLuserData] = useState(null);
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedIn");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLuserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "marvel@avenger.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const e = authData.employee.find(
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
  );
};

export default App;
