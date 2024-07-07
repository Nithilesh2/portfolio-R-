import React, { useContext, useEffect, useState } from "react"
import styles from "../styles/TaskBar.module.css"
import { IoCloseOutline } from "react-icons/io5"
import moment from "moment"
import AppContext from "../context/AppContext"

const TaskBar = (props) => {
  const {
    closeResume,
    taskBarResumeClose,
    minimizeResume,
    setMinimizeResume,
    closeSkills,
    taskBarSkillsClose,
    minimizeSkills,
    setMinimizeSkills,
  } = useContext(AppContext)

  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm A"))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("hh:mm A"))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className={styles.taskBarMain}>
        <div className={styles.windowsLeft}>
          <button className={styles.windowsStart}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/206ea28b-5f34-4284-af5c-299ce7027b6f/dfff8o3-f3c7b155-c2ca-4419-80c1-5129123f3c66.png/v1/fill/w_894,h_894/windows_nt_4_0_logo_png_by_love16love24_dfff8o3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIwNmVhMjhiLTVmMzQtNDI4NC1hZjVjLTI5OWNlNzAyN2I2ZlwvZGZmZjhvMy1mM2M3YjE1NS1jMmNhLTQ0MTktODBjMS01MTI5MTIzZjNjNjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fS0eP7y4lNpfDXcwuPvvOqU0Dj8NZqK_u9YbK7YSv7M"
              alt="windows logo"
            />
            Start
          </button>

          {closeResume ? (
            ""
          ) : (
            <>
              <div
                className={styles.windowsStart}
                onClick={() => setMinimizeResume(!minimizeResume)}
              >
                <img src={props.source} alt="ima" />
                <button className={styles.closeTaskBar}>
                  <IoCloseOutline onClick={taskBarResumeClose} />
                </button>
              </div>
            </>
          )}

          {closeSkills ? (
            ""
          ) : (
            <>
              <div
                className={styles.windowsStart}
                onClick={() => setMinimizeSkills(!minimizeSkills)}
              >
                <img src={props.source} alt="ima" />
                <button className={styles.closeTaskBar}>
                  <IoCloseOutline onClick={taskBarSkillsClose} />
                </button>
              </div>
            </>
          )}
        </div>
        <div className={styles.windowsRight}>
          <div className={styles.windowsStart}>{currentTime}</div>
        </div>
      </div>
    </>
  )
}

export default TaskBar
