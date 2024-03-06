"use client";
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const questions = [
  {
    text: "1. How often do you feel overwhelmed?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "2. How often do individuals experience déjà vu?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "3. Do you often experience the \"fight or flight\" response in stressful situations?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "4. Do you sometimes exhibit signs of learned helplessness?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "5. How often do you engage in self-sabotaging behaviors?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "6. How common is it for you to experience intrusive thoughts?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "7. Do you sometimes exhibit signs of OCD",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "8. How often do you engage in risk-taking behaviors under peer pressure?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },
  {
    text: "9. Are you an introvert according to MBTI?",
    scores: {
      yes: 1,
      no : -1,
      // sometimes: 0,
      // rarely: -1,
      // no: -2,
    },
  },
  {
    text: "10. How often do you engage in risk-taking behaviors under peer pressure?",
    scores: {
      always: 2,
      often: 1,
      sometimes: 0,
      rarely: -1,
      'not at all': -2,
    },
  },

];

const Faram = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionValue) => {
    const score = currentQuestion.scores[optionValue];

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentScore((prevScore) => prevScore + score);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
      setCurrentScore((prevScore) => prevScore + score);
    }
  };

  return (
    <div className="bg-gray-100">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 flex items-center justify-center py-8">
    Mental Health Test
  </h1>
  <div className="h-1 bg-indigo-500 rounded flex justify-center align-middle w-72 my-8"></div>
    <div className={styles.container}>

      <main className={styles.main}>

        <form>
          <div className={styles.questionContainer}>
            <p className={styles.question}>{currentQuestion.text}</p>
            <div className={styles.options}>
              {Object.entries(currentQuestion.scores).map(([option, score]) => (
                <label key={option} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    className={styles.radioInput}
                    onClick={() => handleOptionClick(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {showScore && (
            <div className={styles.result}>
              Your total score is: {currentScore}
              <h1 style={{fontWeight: "bold"}}>
              {(() => {
                let res = "";
                if (currentScore <= -15) {
                res = "You are mentally healthy";
                } 
                else if (currentScore <= -5) {
                res = "You are almost mentally healthy, checkout Resources...";
                } 
                else if (currentScore <= 5) {
                res = "You are mentally stable";
                } 
                else if (currentScore <= 15) {
                res = "You need psychological support";
                } 
                else if (currentScore <= 20) {
                res = "You need immediate Consultation";
                }
                return res;
              })()}
              </h1>
            </div>
          )}
        </form>
      </main>
    </div>
    </div>
  );
};

export default Faram;