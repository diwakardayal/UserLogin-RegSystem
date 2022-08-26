import react, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [err, setError] = useState<boolean>(false);
  const [formerr, setFormerr] = useState<boolean>(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(username, email, pass);
    axios
      .post(`http://localhost:5001/api/register`, {
        username: username,
        email: email,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br  from-yellow-300  to-green-400  drop-shadow-sm">
      <form
        className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-500">
          Xelpmoc Registration Form
        </h1>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="email">
            {" "}
            Username
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400   "
            type="type"
            placeholder="Your Username"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="email">
            {" "}
            Email
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400   "
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="password">
            Password
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2 mt-5"
          />
          <label className="text-sm font-light  " htmlFor="remember">
            Remember me
          </label>
        </div>
        <button
          className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duraiton-300 ease-in"
          type="submit"
        >
          Sign Up
        </button>
        {err && <div className="text-red-400 -mt-[4rem]">Internal Error</div>}
      </form>
    </div>
  );
};

export default Register;
