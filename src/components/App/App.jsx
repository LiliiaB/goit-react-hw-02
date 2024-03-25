import "./App.css";
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";
import { Notification } from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbacks = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFeedbacks={positiveFeedbacks}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}
