import React from "react";

const page = () => {
  return (
    <>
    <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
    Aman's Todo list</h1>
    <form>
      <input type="text" className="text-2xl border-zinc-800 
        border-2 m-5 px-4 py-2"
        placeholder="Enter Task Here"
      />
      <input type="text" className="text-2xl border-zinc-800 
        border-2 m-5 px-4 py-2"
        placeholder="Enter Description Here"
      />
      <button className="bg-black text-white px-4 py-3 
        text-2xl font-bold rounded m-5">Add Task
      </button>
    </form>
    </>
  )
}

export default page