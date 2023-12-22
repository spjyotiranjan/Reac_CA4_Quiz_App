import { useContext, useState } from "react";
import { AppContext } from "../ParentContext";
import "./Quiz.css";
import CSSQuestions from "../Questions/CSSQuestions";
import HTMLQuestions from "../Questions/HTMLQuestions";
import JSQuestions from "../Questions/JSQuestions";
import ReactQuestions from "../Questions/ReactQuestions";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [isHighlight, setisHighlight] = useState(false);
  const { setPage,setCategory, category, isDark, score, setScore } = useContext(AppContext);
  let Questions;
  switch (category) {
    case "React":
      Questions = ReactQuestions;
      break;
    case "HTML":
      Questions = HTMLQuestions;
      break;
    case "CSS":
      Questions = CSSQuestions;
      break;
    case "JS":
      Questions = JSQuestions;
      break;
  }

  console.log(Questions);
  console.log(score);
  return (
    <div
      className="quizBody"
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
      <h3 className="QuestionCount">
        {currQuestion + 1} of {Questions.length}
      </h3>
      <h2
        style={{
          color: `${isHighlight ? "#07D880" : "white"}`,
        }}
        className="Question"
      >
        {Questions[currQuestion].text}
      </h2>
      <div className="buttonDiv">
        <button onClick={()=>{
            if(Questions[currQuestion].options[0].isCorrect){
                setScore((prev)=>prev+1)
            }
            if (currQuestion<Questions.length-1) {
                setCurrQuestion((prev)=>prev+1)
                
            } else {
                setisHighlight(false)
                setCurrQuestion(0)
                setPage("")
            }
        }}
          style={{
            border: `${
              isDark
                ? "2px solid rgba(255, 255, 255, 0.10)"
                : "2px solid rgba(0, 0, 0, 0.10)"
            }`,
          }}
        >
          A. {Questions[currQuestion].options[0].text}
        </button>
        <button onClick={()=>{
            if(Questions[currQuestion].options[1].isCorrect){
                setScore((prev)=>prev+1)
            }
            if (currQuestion<Questions.length - 1) {
                setCurrQuestion((prev)=>prev+1)
                
            } else {
                setisHighlight(false)
                setCurrQuestion(0)
                setPage("")
            }
        }}
          style={{
            border: `${
              isDark
                ? "2px solid rgba(255, 255, 255, 0.10)"
                : "2px solid rgba(0, 0, 0, 0.10)"
            }`,
          }}
        >
          B. {Questions[currQuestion].options[1].text}
        </button>
        <button onClick={()=>{
            if(Questions[currQuestion].options[2].isCorrect){
                setScore((prev)=>prev+1)
            }
            if (currQuestion<Questions.length - 1) {
                setCurrQuestion((prev)=>prev+1)
                
            } else {
                setisHighlight(false)
                setCurrQuestion(0)
                setPage("")
            }
        }}
          style={{
            border: `${
              isDark
                ? "2px solid rgba(255, 255, 255, 0.10)"
                : "2px solid rgba(0, 0, 0, 0.10)"
            }`,
          }}
        >
          C. {Questions[currQuestion].options[2].text}
        </button>
        <button onClick={()=>{
            if(Questions[currQuestion].options[3].isCorrect){
                setScore((prev)=>prev+1)
            }
            if (currQuestion<Questions.length - 1) {
                setCurrQuestion((prev)=>prev+1)
                
            } else {
                setisHighlight(false)
                setCurrQuestion(0)
                setPage("")
            }
        }}
          style={{
            border: `${
              isDark
                ? "2px solid rgba(255, 255, 255, 0.10)"
                : "2px solid rgba(0, 0, 0, 0.10)"
            }`,
          }}
        >
          D. {Questions[currQuestion].options[3].text}
        </button>
      </div>
      <div className="actionButton">
        <button
          style={{
            background: isHighlight
              ? "linear-gradient(97deg, #07D880 -23.09%, #006B6B 89.5%, rgba(205, 24, 133, 0.00) 157.91%)"
              : "linear-gradient(97deg, rgba(7, 216, 128, 0.70) -23.09%, rgba(0, 107, 107, 0.70) 89.5%, rgba(205, 24, 133, 0.00) 157.91%)",
              boxShadow: `${isHighlight?"0px 0px 40px 8px rgba(5, 181, 122, 0.35)":"0px 0px 40px 8px rgba(5, 181, 122, 0.20)"}`
          }}
          onClick={() => {
            setisHighlight(!isHighlight);
          }}
        >
          {isHighlight ? "Unhighlight" : "Highlight"}
        </button>
        <button onClick={()=>{
            setisHighlight(false)
            setScore(0)
            setCategory("")
            setPage("Home")
        }}>Quit</button>
      </div>
    </div>
  );
};

export default Quiz;
