import { Notification } from "../Notification/Notification";

export const Feedback = ({ feedbackTypes, positiveFeedbacks }) => {
  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;

  if (!totalFeedback) {
    return <Notification />;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div>
        {totalFeedback === 0 && <Notification />}
        <p>Total: {totalFeedback}</p>
      </div>
      <p>Positive: {positiveFeedbacks}%</p>
    </div>
  );
};

export default Feedback;
