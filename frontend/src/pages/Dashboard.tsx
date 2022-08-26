import { addListener } from "process";
import react, { useState, useEffect } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState<string | null>("");
  const [fab, setFab] = useState<any>([]);

  const [no, setNo] = useState<number | null>();

  let data: any = [];
  function handleSubmit(no: any) {
    let fib = [0, 1];
    let data = [];

    for (let i = 2; i <= no; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];

      data.push(fib[i]);
    }
  }

  function doing() {}

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-green-200 to-blue-300">
      <h1 className="text-center text-xl font-semibold text-gray-600 pt-10">
        Welcome {username}
      </h1>
      <form className="flex flex-row gap-5 justify-center items-center py-10">
        <div
          className=" absolute right-0 top-0 p-2 bg-slate-800 text-white cursor-pointer"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </div>
        <div className="flex flex-col gap-2 w-20">
          <label htmlFor="noone">Input No. 1</label>
          <input
            type="number"
            name="noone"
            id="noone"
            onChange={(e: any) => setNo(e.target.value)}
          />
        </div>
        {/* <div className="flex flex-col gap-2 w-20">
          <label htmlFor="notwo">Input No. 1</label>
          <input type="number" id="notwo" name="notwo" />
        </div> */}
        {data.map((val: any) => {
          return <div>{val}</div>;
        })}
        <button onClick={doing}>Print the Series</button>
        <button
          type="submit"
          className="bg-green-400 px-3 py-1 rounded mt-5"
          onClick={handleSubmit}
        >
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
