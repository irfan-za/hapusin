"use client";
import { useState, Fragment } from "react";
import {
  Cog6ToothIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Title } from "@components/title";
import { ErrorMessage } from "@components/error";
import { set } from "zod";

export default function Start() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [removeChar, setRemoveChar] = useState("");

  const [result, setResult] = useState("");

  const onSubmit = async () => {
    try {
      setLoading(true);
      let newtxt = "";
      for (const char of text) {
        if (!removeChar.includes(char)) {
          newtxt += char;
        }
      }
      setText(newtxt);

      setCopied(false);
      setResult(text);
    } catch (e) {
      console.error(e);
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-8 mx-auto mt-16 lg:mt-32 ">
      {error ? <ErrorMessage message={error} /> : null}

      <form
        className="max-w-3xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (text.length <= 0) return;
          onSubmit();
        }}
      >
        <Title>Remove Unwanted Characters</Title>
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4 sm:flex-row">
          <div className="w-full h-16 px-3 py-2 duration-150 border rounded hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 flex flex-col">
            <label
              htmlFor="reads"
              className="block text-xs font-medium text-zinc-100"
            >
              Character list
            </label>
            <input
              type="text"
              name="reads"
              id="reads"
              className="w-full p-0 text-base bg-transparent border-0 appearance-none text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              value={removeChar}
              onChange={(e) => setRemoveChar(e.target.value.trim())}
            />
            <span className="mt-6 text-xs font-medium text-zinc-100">
              Specify any characters that you want to be deleted
            </span>
          </div>
        </div>

        <pre className="px-4 py-3 mt-8 font-mono text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100">
          <div className="flex items-start px-1 text-sm relative ">
            <button
              type="button"
              className="has-tooltip bg-gray-700 rounded-sm p-2 right-0 top-0 absolute"
              onClick={() => {
                navigator.clipboard.writeText(text);
                setCopied(true);
              }}
            >
              <span className="tooltip rounded shadow-lg p-1 bg-gray-600 text-gray-200 -mt-10 -ml-10">
                {copied ? "Copied!" : "Click to Copy"}
              </span>
              <ClipboardDocumentIcon className="w-5 h-5" />
            </button>
            <div
              aria-hidden="true"
              className="pr-4 font-mono border-r select-none border-zinc-300/5 text-zinc-700"
            >
              {Array.from({
                length: Math.min(50, text.split("\n").length),
              }).map((_, index) => (
                <Fragment key={index}>
                  {(index + 1).toString().padStart(2, "0")}
                  <br />
                </Fragment>
              ))}
            </div>

            <textarea
              id="text"
              name="text"
              value={text}
              minLength={1}
              onChange={(e) => setText(e.target.value)}
              rows={Math.max(5, text.split("\n").length)}
              placeholder="Type or paste your text here..."
              className="w-full p-0 text-base bg-transparent border-0 appearance-none resize-none hover:resize text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
            />
          </div>
        </pre>

        <button
          type="submit"
          disabled={loading || text.length <= 0}
          className={`mt-6 w-full h-12 inline-flex justify-center items-center  transition-all  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7    bg-zinc-200 ring-1 ring-transparent duration-150   ${
            text.length <= 0
              ? "text-zinc-400 cursor-not-allowed"
              : "text-zinc-900 hover:text-zinc-100 hover:ring-zinc-600/80  hover:bg-zinc-900/20"
          } ${loading ? "animate-pulse" : ""}`}
        >
          <span>
            {loading ? (
              <Cog6ToothIcon className="w-5 h-5 animate-spin" />
            ) : (
              "Remove"
            )}
          </span>
        </button>
      </form>
    </div>
  );
}
