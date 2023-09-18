"use client";
import Score from "../score/Score";
import questions from "@/constants/CreQuestions";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function Cre() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // First Step -- Sets the current question to be 0 when the app loads at the first time.

  const singleQuestion = questions[currentQuestion]; // Second Step -- Imports the questions and sets a single question to be the current question.

  const [selectedOption, setSelectedOption] = useState(""); // Third Step -- This step sets the selected option to be nothing when the app loads.

  const [showAnswer, setShowAnswer] = useState(false); // Fourth Step -- This step sets the selected answer(option) to show a deferent CSS styling. Basically in this case we have to show three colors: 1.Correct Answer, 2.Wrong Answer, 3.All Answers. This state helps us to handle it. Check Line 59-85

  const [score, setScore] = useState(0); // Fifth Step -- Since we want to award the player some score(marks) after completion of the quiz, we will use this state to handle that to set score according to the right answer chosen. The if statement is added to the handleOptionSelection function since it is also handled when the player selects an option. Check Line 28-30

  const [showResults, setShowResults] = useState(false); // Sixth Step -- Since we want to show the results, we need to have this state to handle it. Basically we need to run this function to show the results at the end of the quiz. Check Line 47

  const [answered, setAnswered] = useState(false); // Seventh Step -- This state variable keeps track of whether the current question has been answered or not. Initially, it's set to false to indicate that the question hasn't been answered.
  // console.log(score);

  function handleOptionSelection(option) {
    // This function handles the selected option and sets it to be the option... This function is called when the options(answers) are selected
    setSelectedOption(option);
    setShowAnswer(true);
    setAnswered(true); // Mark the question as answered
    if (option === singleQuestion.correct_option) {
      // console.log("option Is Right 100%", option);
      setScore((option) => option + 1);
    }
  }

  function handleNextQuestion() {
    setShowAnswer(false);
    setAnswered(false); // Reset the answered state for the next question
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    }
  }
  function handlePreviousQuestion() {
    setShowAnswer(false);
    setCurrentQuestion((currentQuestion) => currentQuestion - 1);
    setAnswered(true); // Reset the answered state when moving back to a previous question
  }

  return (
    <>
      {showResults ? (
        <Score score={score} />
      ) : (
        <div className='p-[2rem]'>
          <div className='flex flex-col gap-6'>
            <span className='font-bold text-2xl text-center uppercase'>
              {singleQuestion.id}. {singleQuestion.question}
            </span>
            <div className='flex flex-col gap-4'>
              {singleQuestion.options.map((option, id) => {
                return (
                  <>
                    {showAnswer && option === singleQuestion.correct_option ? (
                      <button
                        key={id}
                        disabled={answered}
                        onClick={() => handleOptionSelection(option)}
                        className='flex justify-between items-center px-[1.3rem] font-bold py-[1.3rem] text-slate-50 bg-primary rounded-md'
                      >
                        {option}
                        <FaCheck size={15} />
                      </button>
                    ) : showAnswer && option === selectedOption ? (
                      <button
                        key={id}
                        disabled={answered}
                        onClick={() => handleOptionSelection(option)}
                        className='flex justify-between items-center px-[1.3rem] font-bold py-[1.3rem] text-slate-50 bg-red-600/80  rounded-md '
                      >
                        {option}
                        <ImCross size={15} />
                      </button>
                    ) : (
                      <button
                        key={id}
                        disabled={answered}
                        onClick={() => handleOptionSelection(option)}
                        className='px-[1.3rem] text-left font-bold py-[1.3rem] text-slate-50 bg-[#1f2041] rounded-md'
                      >
                        {option}
                      </button>
                    )}
                  </>
                );
              })}
            </div>
            <div className='flex justify-between'>
              <button className='bg-primary text-slate-50 px-[1rem] py-[.5rem] font-bold rounded-md'>
                {currentQuestion + 1} <span>Out Of {questions.length}</span>
              </button>
              <div className='flex gap-3'>
                <button
                  onClick={handlePreviousQuestion}
                  className='bg-secondary px-[1rem] py-[.5rem] font-bold rounded-md'
                >
                  <GrFormPreviousLink size={20} />
                </button>
                <button
                  onClick={handleNextQuestion}
                  className='bg-secondary px-[1rem] py-[.5rem] font-bold rounded-md'
                >
                  <GrFormNextLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
