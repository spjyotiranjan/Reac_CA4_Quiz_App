import { useContext } from "react";
import { AppContext } from "../ParentContext";
import "./Result.css";

const Result = () => {
  const { isDark, setPage, score, setScore, category, setCategory } =
    useContext(AppContext);
  const scorePercentage = Math.floor((score / 5) * 100);
  return (
    <div
      className="resultBody"
      style={{
        background: `${
          isDark ? "rgba(255, 255, 255, 0.13)" : "rgba(0, 0, 0, 0.6)"
        }`,
        border: `${
          isDark
            ? "2px solid rgba(255, 255, 255, 0.10)"
            : "2px solid rgba(0, 0, 0, 0.10)"
        }`,
      }}
    >
      <div
        style={{
          background: `${
            score < 3
              ? "linear-gradient(90deg, rgba(255, 170, 170, 0.69) 0%, #C31E1E 0.01%, #DF9135 99.83%)"
              : score < 5
              ? "linear-gradient(90deg, rgba(253, 255, 170, 0.69) 0%, #C3A91E 0.01%, #C7DF35 99.83%)"
              : "linear-gradient(90deg, rgba(170, 250, 255, 0.69) 0%, #1EBAC3 0.01%, #35DF65 99.83%)"
          }`,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <h1 className="Comment">
          {score < 3
            ? `Please Practice! You have serious skill issues in ${category}`
            : score >= 3 && score < 5
            ? `You did well in ${category}, but You can improve`
            : `I didn't know that You are brilliant in ${category}! Keep it up`}
        </h1>
      </div>
      <h2 className="Score">You answered {score} questions correctly out of 5.</h2>
      <div
        className="resultBar"
        style={{
          backgroundColor: `${
            isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"
          }`,
        }}
      >
        <div
          className="resultBarCompleted"
          style={{
            background: `${
              score < 3
                ? "linear-gradient(90deg, rgba(255, 170, 170, 0.69) 0%, #C31E1E 0.01%, #DF9135 99.83%)"
                : score < 5
                ? "linear-gradient(90deg, rgba(253, 255, 170, 0.69) 0%, #C3A91E 0.01%, #C7DF35 99.83%)"
                : "linear-gradient(90deg, rgba(170, 250, 255, 0.69) 0%, #1EBAC3 0.01%, #35DF65 99.83%)"
            }`,
            width: `${scorePercentage}%`,
          }}
        >
          <p>{scorePercentage} %</p>
        </div>
      </div>
      <button
        style={{
          background: `${
            isDark
              ? "linear-gradient(95deg, rgba(65, 186, 238, 0.00) 0%, rgba(65, 186, 238, 0.31) 99.57%)"
              : "linear-gradient(95deg, rgba(65, 186, 238, 0.31) 0%, rgba(0, 73, 105, 0.31) 99.57%)"
          }`,
          border: `${
            isDark
              ? "1px solid rgba(255, 255, 255, 0.34)"
              : "1px solid rgba(0, 0, 0, 0.34)"
          }`,
          color: `${isDark ? "white" : "black"}`,
          boxShadow: `${
            isDark ? "0px 0px 2vw -10px #002593" : "0px 0px 2vw -10px #C44700"
          }`,
        }}
        className="themeButton"
        onClick={() => {
          setPage("Home");
          setScore(0);
          setCategory("");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Result;
