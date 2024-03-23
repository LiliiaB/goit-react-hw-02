import "./App.css";
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";
import { useState } from "react";

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbacks = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback
        feedbackTypes={feedbackTypes}
        positiveFeedbacks={positiveFeedbacks}
      />
    </>
  );
}
