"use client";
import React, { useState } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdCropDin } from "react-icons/md";

export default function page() {
  const [quiz, setQuiz] = useState([
    {
      quizname: "What is the correct command to create a new React project?",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npm create-react-app myReactApp",
      quizoption3: "npm create-react-app myReactApp",
      quizoption4: "npm create-react-app myReactApp",
    },
    {
      quizname: "npx create-react-app myReactApp",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npm create-react-app myReactApp",
      quizoption3: "npm create-react-app myReactApp",
      quizoption4: "npm create-react-app myReactApp",
    },
    {
      quizname: "To develop and run React code, Node.js is required.",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npm create-react-app myReactApp",
      quizoption3: "npm create-react-app myReactApp",
      quizoption4: "npm create-react-app myReactApp",
    },
    {
      quizname: "What type of element will be rendered from the following code?",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npm create-react-app myReactApp",
      quizoption3: "npm create-react-app myReactApp",
      quizoption4: "npm create-react-app myReactApp",
    },
    {
      quizname: "What is the children prop?",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npm create-react-app myReactApp",
      quizoption3: "npm create-react-app myReactApp",
      quizoption4: "npm create-react-app myReactApp",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = ()=>{
    if (currentQuestion < quiz.length -1) {
        setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <>
      <div className="w-[70%] m-auto py-5">
      <h3 className="text-[30px]">React Quiz</h3>
      <h5 className="text-[20px]">Question {currentQuestion + 1} of {quiz.length}</h5>

      <div>
        <h4 className="my-4">{quiz[currentQuestion].quizname}</h4>
        <div>
          <ul>
            <li className="mb-2 bg-slate-400 p-2 hover:bg-slate-500">{quiz[currentQuestion].quizoption1}</li>
            <li className="mb-2 bg-slate-400 p-2 hover:bg-slate-500">{quiz[currentQuestion].quizoption2}</li>
            <li className="mb-2 bg-slate-400 p-2 hover:bg-slate-500">{quiz[currentQuestion].quizoption3}</li>
            <li className="mb-2 bg-slate-400 p-2 hover:bg-slate-500">{quiz[currentQuestion].quizoption4}</li>
          </ul>
        </div>
      </div>

      <button
        className="bg-black inline-block px-4 py-2 text-white mt-4"
        onClick={handleNextQuestion}
        disabled={currentQuestion >= quiz.length - 1}
      >
        Next
      </button>
    </div>
    </>
  );
}
