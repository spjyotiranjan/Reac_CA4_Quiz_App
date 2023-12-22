import React, { useContext } from "react";
import "./Home.css"
import { AppContext } from "../ParentContext";
import ReactLogo from "./../assets/React-Logo.png"
import CSSLogo from "./../assets/CSS-Logo.png"
import HTMLLogo from "./../assets/HTML-Logo.png"
import JSLogo from "./../assets/JS-Logo.png"

// const imgStyle = {
//   height: "20vh",
//   margin: "auto",
// }

const Home = () => {
  const { isDark,setCategory,setPage } = useContext(AppContext);
  return (
    <div className="homeBody">
      {/* tagline  */}
      <div>
        <div
          style={{
            background:
              "linear-gradient(92deg, #FF007A -24.98%, #00C7FF 125.41%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <h1 className="mainTag">
            Unleash Your Mind
          </h1>
        </div>

        {/* sub-tagline  */}
        <p className="subTag"
          style={{
            color: `${isDark ? "white" : "black"}`,
            fontWeight:"100"
          }}
        >
          Elevate Knowledge, Spark Curiosity, Conquer Quizzes!
        </p>
      </div>


      {/* quizOption */}
      <div className="homeDiv"
        style={{
          background: `${isDark?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.3)"}`,
        }}
      >
        <h2 className="selectQuiz">Select Quiz</h2>
        <div className="optionList">
          <div className="option" id="React" onClick={()=>{setPage("Quiz");setCategory("React")}}>
            <img src={ReactLogo} alt="" />
            <h2 className="optionText">R e a c t</h2>
          </div>
          <div className="option" id="HTML" onClick={()=>{setPage("Quiz");setCategory("HTML")}}>
            <img src={HTMLLogo} alt="" />
            <h2 className="optionText">H T M L</h2>
          </div>
          <div className="option" id="CSS" onClick={()=>{setPage("Quiz");setCategory("CSS")}}>
            <img src={CSSLogo} alt="" />
            <h2 className="optionText">C S S</h2>
          </div>
          <div className="option" id="JS" onClick={()=>{setPage("Quiz");setCategory("JS")}}>
            <img src={JSLogo} alt="" />
            <h2 className="optionText">J S</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
