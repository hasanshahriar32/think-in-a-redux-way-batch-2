import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },

  {
    id: 2,
    count: 2,
  },
];

export default function App() {
  const [state, setState] = useState(initialState);
  const totalCount = (init) => {
    return state.reduce((acc, curr) => acc + curr.count, init);
  };
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Applications
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter />
        <Counter />
        <Stats count={totalCount(4)} />
      </div>
    </div>
  );
}

// Path: src\components\Counter.js
