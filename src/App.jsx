import React, { useContext } from "react"
import styles from "./App.module.css"
import CustomCursor from "./components/CustomCursor"
import {
  IoCloseOutline,
  IoPerson,
  IoRemoveOutline,
  IoSquareOutline,
} from "react-icons/io5"
import TaskBar from "./components/TaskBar"
import AppContext from "./context/AppContext"
import UiSkills from "./components/UiSkills"

const App = () => {
  const {
    resumeDoubleClick,
    closeResume,
    screenSizeResume,
    setScreenSizeResume,
    setCloseResume,
    fileIconUrl,
    resumeDownload,
    setMinimizeResume,
    minimizeResume,
    minimizeSkills,
    closeSkills,
    setCloseSkills,
    setMinimizeSkills,
    screenSizeSkills,
    setScreenSizeSkills,
    skillsDoubleClick,
    name,
  } = useContext(AppContext)

  return (
    <>
      <CustomCursor />
      <div className={styles.desktop}>
        <div className={styles.leftOne}>
          <div
            className={styles.resumeFolder}
            onDoubleClick={resumeDoubleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="resume"
            />
            <div className={styles.resume}>My Resume</div>
          </div>
          {minimizeResume ? (
            ""
          ) : (
            <div
              className={
                closeResume
                  ? styles.myResumeBoxDeActive
                  : screenSizeResume
                  ? styles.myResumeBoxActiveBig
                  : styles.myResumeBoxActiveSmall
              }
            >
              <div className={styles.myResumeTop}>
                <div className={styles.myResumeTopLeft}>
                  <IoPerson className={styles.myResumeTopLeftUser} />
                  <p>Nithilesh's Resume</p>
                </div>
                <div className={styles.myResumeTopRight}>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => {
                      setMinimizeResume(!minimizeResume)
                    }}
                  >
                    <IoRemoveOutline />
                  </button>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => setScreenSizeResume(!screenSizeResume)}
                  >
                    <IoSquareOutline />
                  </button>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => {
                      setCloseResume(true)
                    }}
                  >
                    <IoCloseOutline />
                  </button>
                </div>
              </div>
              <div className={styles.myResumeCenter}>
                <div className={styles.resumeDownload}>
                  <img
                    src={fileIconUrl}
                    alt="i"
                    title="Click to download"
                    onClick={resumeDownload}
                  />
                  <div>Resume</div>
                </div>
              </div>
              <div className={styles.myResumeBottom}>
                <p>1 Object(s)</p>
              </div>
            </div>
          )}
        </div>

        <div className={styles.leftTwo}>
          <div
            className={styles.resumeFolder}
            onDoubleClick={skillsDoubleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="resume"
            />
            <div className={styles.resume}>Skills</div>
          </div>

          {minimizeSkills ? (
            ""
          ) : (
            <div
              className={
                closeSkills
                  ? styles.myResumeBoxDeActive
                  : screenSizeSkills
                  ? styles.myResumeBoxActiveBig
                  : styles.myResumeBoxActiveSmall
              }
            >
              <div className={styles.myResumeTop}>
                <div className={styles.myResumeTopLeft}>
                  <IoPerson className={styles.myResumeTopLeftUser} />
                  <p>Skills</p>
                </div>
                <div className={styles.myResumeTopRight}>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => {
                      setMinimizeSkills(!minimizeSkills)
                    }}
                  >
                    <IoRemoveOutline />
                  </button>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => setScreenSizeSkills(!screenSizeSkills)}
                  >
                    <IoSquareOutline />
                  </button>
                  <button
                    className={styles.myResumeTopRightButton}
                    onClick={() => {
                      setCloseSkills(true)
                    }}
                  >
                    <IoCloseOutline />
                  </button>
                </div>
              </div>
              <div className={styles.myResumeCenter}>
                <div className={styles.skillsBox}>
                  <h2>Skills</h2>
                  <UiSkills />
                </div>
              </div>
              <div className={styles.myResumeBottom}>
                <p>1 Object(s)</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {name.map((data) => (
        <TaskBar key="index" source={fileIconUrl} />
      ))}
    </>
  )
}

export default App
