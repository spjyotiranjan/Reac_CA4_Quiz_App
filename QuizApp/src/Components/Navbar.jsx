
import { useContext } from 'react'
import { AppContext } from '../ParentContext'
import DarkThemeLogo from "./../assets/logoDarkTheme.png"
import LightThemeLogo from "./../assets/logoLightTheme.png"
import "./Navbar.css"

const Navbar = () => {
    const {isDark,setIsDark} = useContext(AppContext)
  return (
    <div className='main'>
        <img src={isDark? DarkThemeLogo:LightThemeLogo} alt="" />
        <button className='themeButton' style={{
            background: `${isDark? "linear-gradient(95deg, rgba(65, 186, 238, 0.00) 0%, rgba(65, 186, 238, 0.31) 99.57%)":"linear-gradient(95deg, rgba(65, 186, 238, 0.31) 0%, rgba(0, 73, 105, 0.31) 99.57%)"}`,
            border: `${isDark? "1px solid rgba(255, 255, 255, 0.34)":"1px solid rgba(0, 0, 0, 0.34)"}`,
            color: `${isDark? "white":"black"}`,
            boxShadow: `${isDark? "0px 0px 2vw -10px #002593":"0px 0px 2vw -10px #C44700"}`,
        }}
        
        onClick={() => {
            setIsDark(!isDark);
          }}
        >
            {isDark?<span><b>Dark</b></span>:<span style={{fontWeight: "400"}}>Dark</span>}
            <span><b> / </b></span>
            {isDark?<span style={{fontWeight: "400"}}>Light</span>:<span><b>Light</b></span>}
        </button>
    </div>
  )
}

export default Navbar