"use client";
import { Router } from "next/router";
import React, { useState } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdCropDin } from "react-icons/md";

export default function Page() {
  const [quiz] = useState([
    {
      quizname: "What is the correct command to create a new React project?",
      quizoption1: "npm create-react-app myReactApp",
      quizoption2: "npx create-react-app myReac",
      quizoption3: "npm init react-app",
      quizoption4: "npx create-react-app myReactApp",
    },
    {
      quizname: "What is JSX in React?",
      quizoption1: "A JavaScript library",
      quizoption2: "A syntax extension",
      quizoption3: "A CSS framework",
      quizoption4: "A type of data",
    },
    {
      quizname: "How do you handle state in React?",
      quizoption1: "Using HTML tags",
      quizoption2: "Using the `useState` hook",
      quizoption3: "Using CSS selectors",
      quizoption4: "By calling external APIs",
    },
    {
      quizname: "What is a React component?",
      quizoption1: "A JavaScript function or class",
      quizoption2: "A type of HTTP request",
      quizoption3: "A JSON file",
      quizoption4: "A database object",
    },
    {
      quizname: "What is React used for?",
      quizoption1: "Building mobile apps",
      quizoption2: "Building user interfaces",
      quizoption3: "Managing databases",
      quizoption4: "Handling HTTP requests",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); 
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); 
    }

  };

  return (
    <>
      <div className="w-[70%] m-auto py-5">
        <h3 className="text-[30px]">React Quiz</h3>
        <h5 className="text-[20px]">
          Question {currentQuestion + 1} of {quiz.length}
        </h5>

        <div>
          <h4 className="my-4">{quiz[currentQuestion].quizname}</h4>
          <div>
            <ul>
              {[
                quiz[currentQuestion].quizoption1,
                quiz[currentQuestion].quizoption2,
                quiz[currentQuestion].quizoption3,
                quiz[currentQuestion].quizoption4,
              ].map((option, index) => (
                <li
                  key={index}
                  className={`mb-2 p-2 hover:bg-slate-500 cursor-pointer flex gap-3 ${
                    selectedOption === option
                      ? "bg-green-500" // Highlight selected option
                      : "bg-slate-400"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {selectedOption === option ? <FaRegSquareCheck /> : <MdCropDin />}{" "}
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="bg-black inline-block px-4 py-2 text-white mt-4"
          onClick={handleNextQuestion}
          disabled={currentQuestion >= quiz.length - 1} // Disable button on the last question
        >
          Next
        </button>
      </div>
    </>
  );
}
