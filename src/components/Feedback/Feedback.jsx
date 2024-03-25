import { Notification } from "../Notification/Notification";

export const Feedback = ({
  good,
  neutral,
  bad,
  positiveFeedbacks,
  totalFeedback,
}) => {
  if (totalFeedback === 0) {
    return <Notification />;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbacks}%</p>
    </div>
  );
};

export default Feedback;
