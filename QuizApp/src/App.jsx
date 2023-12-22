import { useContext } from "react";
import { AppContext } from "./ParentContext.jsx";
import "./App.css"

import Final from "./final.jsx";

const App = () => {
  const { isDark } = useContext(AppContext);
  return (
    <div className= {isDark ? "dark":"light"}>
      <Final />
    </div>
  );
};

export default App;
