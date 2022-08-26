import react, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [err, setError] = useState<boolean>(false);
  const [formerr, setFormerr] = useState<boolean>(false);
  // console.log(`email: ${email}, err: ${err}`);

  console.log(username, pass);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "" || pass === "") {
      console.log("supply username & password");
    }
    axios
      .post(`http://localhost:5001/api/login`, {
        username: username,
        password: pass,
      })
      .then((res) => {
        {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
        }
        window.location.href = "/dashboard";
      })

      .catch((e) => {
        setFormerr(true);
        console.log(e);
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br  from-yellow-300  to-green-400  drop-shadow-sm">
      <form
        className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-semibold capitalize">
          Xelpmoc Login
        </h1>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="email">
            {" "}
            Username
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400   "
            type="text"
            placeholder="Your Email"
            name="username"
            id="password"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {err && (
            <div>
              <p className="text-red-500 text-sm">
                Please type Correct Email ID
              </p>
            </div>
          )}
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
            className="mr-2"
          />
          <label className="text-sm font-light" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button
          className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duraiton-300 ease-in"
          type="submit"
        >
          Sign In
        </button>
        <hr className="" />
        <button
          className="w-full px-2 py-2 bg-gray-400 text-white text-xs rounded-md hover:bg-gray-500 hover:drop-shadow-md duraiton-300 ease-in"
          type="submit"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Register Now
        </button>

        {formerr && (
          <div className="text-red-400 -mt-[4rem]">Invalid Credentials</div>
        )}
      </form>
    </div>
  );
};

export default Login;
