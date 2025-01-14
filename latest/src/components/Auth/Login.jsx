import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail("");
    setpassword("");
  };
  return (
    <>
      
      <div className="p-10 h-screen w-screen relative flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
        <div className="flex items-center rounded-xl justify-center border-[0.2rem] border-white p-28  backdrop-blur-[3px]">
          <form
            className="flex flex-col gap-5 text-white"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              required
              className="bg-black rounded-full placeholder:text-gray-400 placeholder:text-[1.1rem] p-[10px] pl-6 border-2 border-white"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              className="bg-black rounded-full placeholder:text-gray-400 placeholder:text-[1.1rem] p-[10px] pl-6 border-2 border-white"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button className="bg-white text-black p-2 rounded-2xl">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
