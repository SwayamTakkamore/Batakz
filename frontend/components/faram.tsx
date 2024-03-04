// pages/index.js
"use client";
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const questions = [
    "How often do you feel overwhelmed?",
    "How often do you feel anxious about your work or home responsibilities?",
    "How often do you find it difficult to stop or control worrying?",
    "How often do you feel that you are unable to stop or control worrying about different things?",
    "How often do you have a positive mood",
    "How often do you have a negative mood",
    "How often do you experience feelings of loneliness or isolation?",
];

const options = ["Not at all", "Rarely", "Sometimes", "Often", "Always"];

export default function Faram() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = options[optionIndex];
    setAnswers(newAnswers);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mental Health Test</title>
        <meta name="description" content="Mental Health Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Mental Health Test</h1> */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Mental Health Test</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>

        <form>
          {questions.map((question, index) => (
            <div key={index} className={styles.questionContainer}>
              <p className={styles.question}>{question}</p>
              <div className={styles.options}>
                {options.map((option, optionIndex) => (
                  <label key={optionIndex} className={styles.optionLabel}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleOptionChange(index, optionIndex)}
                      checked={answers[index] === option}
                      className={styles.radioInput}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </form>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mental Health Test</p>
      </footer>
    </div>
  );
}
