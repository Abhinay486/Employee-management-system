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
      <div className="p-10 h-screen w-screen relative flex items-center justify-center bg-[uurl(https://wallpapercave.com/wp/wp5489584.jpg)] bg-cover bg-no-repeat bg-center">
        <div className="flex items-center rounded-xl justify-center border-2 border-emerald-600 p-28  backdrop-blur-[]">
          <form
            className="flex flex-col gap-5 text-white"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              required
              className="bg-black rounded-full placeholder:text-gray-400 p-[10px] pl-6 border-2 border-emerald-600"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              className="bg-black rounded-full placeholder:text-gray-400 p-[10px] pl-6 border-2 border-emerald-600"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button className="bg-emerald-600 text-black p-2 rounded-2xl">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
