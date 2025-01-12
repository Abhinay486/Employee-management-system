import React from "react";
const Header = (props) => {
  const logout = () => {
    localStorage.setItem("loggedIn", "");
    //  window.location.reload()
    props.changeUser("");
  };
  return (
    <header className="text-white m-6">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl">
          Hi <br />
          <span className="text-2xl">data.name</span>👋{" "}
        </h1>
        <button
          onClick={logout}
          className="bg-emerald-600 px-5 h-10 rounded-xl hover:bg-emerald-400"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
