import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";

const App = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <main className="h-screen w-full p-5 flex items-center gap-4 bg-zinc-900">
      <section className="h-full  basis-1/2 bg-zinc-800 rounded relative">
        <div className="h-full">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: "100%",
              overflow: "auto",
              width: "100%",
              borderRadius: "5px",
              color: "white",
            }}
          />
        </div>
        <button className="absolute bottom-4 right-4 py-2 px-8 rounded cursor-pointer text-zinc-200 font-semibold bg-zinc-900">
          Review
        </button>
      </section>
      <section className="h-full flex basis-1/2 bg-zinc-500 rounded"></section>
    </main>
  );
};

export default App;
