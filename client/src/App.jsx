import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";

const App = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    const res = await axios.post("http://localhost:8080/ai/review", {
      code,
    });
    const { data } = res;
    setReview(data);
  };

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
            placeholder="Enter your code here..."
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
        <button
          onClick={reviewCode}
          className="absolute bottom-4 right-4 py-2 px-8 rounded cursor-pointer text-zinc-200 font-semibold bg-zinc-900"
        >
          Review
        </button>
      </section>
      <section className="h-full flex basis-1/2 bg-zinc-700 rounded text-white p-4 overflow-auto flex-col gap-4">
        <Markdown>{review}</Markdown>
      </section>
    </main>
  );
};

export default App;
