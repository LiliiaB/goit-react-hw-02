import css from "./Options.module.css";

export const Options = ({ updateFeedback }) => {
  return (
    <div className={css.list}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={css.button}>Reset</button>
    </div>
  );
};

export default Options;
