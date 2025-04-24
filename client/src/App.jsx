import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const App = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  // useEffect(() => {
  //   prism.highlightAll();
  // }, []);

  const reviewCode = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:8080/ai/review", {
      code,
    });
    const { data } = res;
    setReview(data);
    setLoading(false);
  };

  return (
    <main className="h-screen w-full p-4 flex items-center gap-4 bg-zinc-900">
      <section className="h-full basis-1/2 rounded-xl bg-zinc-800 relative">
        <div className="h-full">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            placeholder="To review your code, Enter or paste here..."
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: "100%",
              overflow: "auto",
              width: "100%",
              borderRadius: "10px",
              color: "white",
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          className="absolute bottom-4 right-4 py-2 px-8 rounded cursor-pointer text-zinc-200 font-semibold bg-zinc-900"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full size-5 border border-t-2 border-t-white"></div>
              <span className="ml-2">Reviewing...</span>
            </div>
          ) : (
            "Review"
          )}
        </button>
      </section>

      {review ? (
        <section className="h-full flex basis-1/2 text-justify bg-zinc-700 rounded text-white p-4 overflow-auto flex-col gap-4">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </section>
      ) : (
        <section className="h-full basis-1/2 text-8xl flex items-center justify-center text-zinc-800 font-bold text-center">
          Your AI Code Reviewer.
        </section>
      )}
    </main>
  );
};

export default App;
