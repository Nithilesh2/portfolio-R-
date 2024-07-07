import React, { useState } from "react"
import AppContext from "./AppContext"

const AppStore = (props) => {
  const [minimizeResume, setMinimizeResume] = useState(true)
  const [closeResume, setCloseResume] = useState(true)
  const [screenSizeResume, setScreenSizeResume] = useState(true)

  const [minimizeSkills, setMinimizeSkills] = useState(true)
  const [closeSkills, setCloseSkills] = useState(true)
  const [screenSizeSkills, setScreenSizeSkills] = useState(true)

  const [name, setName] = useState([])

  const fileIconUrl =
    "https://64.media.tumblr.com/d519f7393d9ee25a0a8a0835ef93c488/8e467617da3b8b01-63/s540x810/ba5279820e44357b83ac1fdb6824e5a52ec4162f.png"

  const resumeDownload = () => {
    const link = document.createElement("a")
    link.href = "./assets/nithileshResume.pdf"
    link.setAttribute("download", "Nithilesh Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resumeDoubleClick = () => {
    setCloseResume(!closeResume)
    setMinimizeResume(false)
    setName((prev) => [{ ...prev, name: "Resume" }])
  }
  const taskBarResumeClose = () => {
    setCloseResume(true)
  }

  //Skills
  const skillsDoubleClick = () => {
    setCloseSkills(!closeSkills)
    setMinimizeSkills(false)
    setName((prev) => [{ ...prev, name: "Skills" }])
  }

  const taskBarSkillsClose = () => {
    setCloseSkills(true)
  }

  return (
    <AppContext.Provider
      value={{
        minimizeResume,
        setMinimizeResume,
        closeResume,
        setCloseResume,
        screenSizeResume,
        setScreenSizeResume,
        fileIconUrl,
        resumeDownload,
        resumeDoubleClick,
        taskBarResumeClose,
        skillsDoubleClick,
        taskBarSkillsClose,
        minimizeSkills,
        setMinimizeSkills,
        closeSkills,
        setCloseSkills,
        screenSizeSkills,
        setScreenSizeSkills,
        name,
        setName,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStore
