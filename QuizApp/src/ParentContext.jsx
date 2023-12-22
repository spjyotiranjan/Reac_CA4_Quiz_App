import { createContext,useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [page,setPage] = useState("Home")
  const [category,setCategory] = useState("")
  const [score,setScore] = useState(0)
  const [isDark,setIsDark] = useState(true)

  return <AppContext.Provider value={{isDark,setIsDark,page,setPage,category,setCategory,score,setScore}}>{children}</AppContext.Provider>;
};

export default ParentContext;