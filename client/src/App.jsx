import React from "react";

const App = () => {
  return (
    <main className="h-screen w-full p-5 flex items-center gap-4 bg-zinc-900">
      <section className="h-full  basis-1/2 bg-zinc-800 rounded relative">
        <div></div>
        <button className="absolute bottom-4 right-4 py-2 px-8 rounded cursor-pointer text-zinc-200 font-semibold bg-zinc-900">
          Review
        </button>
      </section>
      <section className="h-full flex basis-1/2 bg-zinc-500 rounded"></section>
    </main>
  );
};

export default App;
