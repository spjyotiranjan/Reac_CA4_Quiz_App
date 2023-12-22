
import { useContext, useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Quiz from './Components/Quiz'
import { AppContext } from './ParentContext'
import Result from './Components/Result'

const Final = () => {
  const {page} = useContext(AppContext)
  return (
    <div>
      <Navbar/>
      {page=="Home"?
      (<Home/>)
      :
      (page=="Quiz"?(<Quiz/>):(<Result/>))
      
      }
    </div>
  )
}

export default Final
