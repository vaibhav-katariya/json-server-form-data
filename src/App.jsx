import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message , setMessage] = useState(' ')

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/data", { data });
      console.log(res);
      setMessage('user created successfully')
    } catch (error) {
      console.log("datasend error", error);
    }
  };

  return (
    <div className="h-screen w-full text-white bg-zinc-900 flex flex-col justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="border-[1px] md:w-1/2 border-zinc-800 md:p-10 rounded-lg p-5"
      >
        <h2 className="text-center mb-3 text-2xl text-zinc-600">Sign up</h2>
        <div>
          <input
            className="w-full px-3 focus:bg-zinc-800 py-2 placeholder:text-lg my-3 rounded-lg bg-zinc-800 outline-none"
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={data.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <input
            className="w-full px-3 focus:bg-zinc-800 py-2 placeholder:text-lg my-3 rounded-lg bg-zinc-800 outline-none"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={data.email}
            onChange={inputHandler}
          />
        </div>
        <div>
          <input
            className="w-full focus:bg-zinc-800 px-3 py-2 placeholder:text-lg my-3 rounded-lg bg-zinc-800 outline-none"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={data.password}
            onChange={inputHandler}
          />
        </div>
        <button
          type="submit"
          className="py-2 w-full px-3 rounded-lg text-md mt-5 bg-blue-500"
        >
          Submit
        </button>
        <p className="text-center mt-6 text-xl text-green-300">{message}</p>
      </form>
    </div>
  );
};

export default App;
