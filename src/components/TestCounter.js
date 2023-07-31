import React, { useState } from "react";

const TestCounter = () => {
  const [counters, setCounters] = useState(0);
  const incremenet = () => {
    setCounters((previousCount) => previousCount + 1);
  };
  const decremenet = () => {
    setCounters((previousCount) => previousCount - 1);
  };
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* <!-- counters --> */}
      <div class="max-w-md mx-auto mt-10 space-y-5">
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div class="text-2xl font-semibold">{counters}</div>
          <div class="flex space-x-3">
            <button
              onClick={incremenet}
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            >
              Increment
            </button>
            <button
              onClick={decremenet}
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCounter;
