import React, { useContext, useEffect, useState } from "react"
import styles from "../styles/TaskBar.module.css"
import { IoCloseOutline, IoLockClosed, IoPower } from "react-icons/io5"
import {
  FaBirthdayCake,
  FaCaretRight,
  FaGamepad,
  FaMotorcycle,
  FaUser,
} from "react-icons/fa"
import { GiSpades } from "react-icons/gi"
import moment from "moment"
import AppContext from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const TaskBar = (props) => {
  const navigate = useNavigate()

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
  const [battery, setBattery] = useState({ level: 1 })
  const [menu, setMenu] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("hh:mm A"))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let batteryObject = null

    const updateBatteryInfo = (battery) => {
      setBattery({
        level: Math.floor(battery.level * 100),
      })
    }

    navigator.getBattery().then((batt) => {
      batteryObject = batt
      updateBatteryInfo(batteryObject)

      batteryObject.addEventListener("levelchange", () =>
        updateBatteryInfo(batteryObject)
      )
    })

    return () => {
      if (batteryObject) {
        batteryObject.removeEventListener("levelchange", () =>
          updateBatteryInfo(batteryObject)
        )
      }
    }
  }, [])

  const startMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={styles.taskBarMain}>
      {menu ? (
        ""
      ) : (
        <div className={styles.windowsTop}>
          <ul className={styles.windowsTopStartMenu}>
            <li>
              <FaUser /> <p>Admin</p>
            </li>
            <hr />
            <li className={styles.gameBox}>
              <div className={styles.gameBoxLeft}>
                <FaGamepad />
                <p>
                  Games
                  <ul className={styles.gamesAll}>
                    <li>
                      <FaMotorcycle /> Road Rash
                    </li>
                    <hr />
                    <li>
                      <FaBirthdayCake /> Cake Factory
                    </li>
                    <hr />
                    <li>
                      <GiSpades /> Cards
                    </li>
                  </ul>
                </p>
              </div>
              <FaCaretRight />
            </li>
            <hr />
            <li onClick={() => navigate("/")}>
              <IoLockClosed /> <p>Lock</p>
            </li>
            <hr />
            <li>
              <IoPower /> <p>Shut Down</p>
            </li>
            <hr />
          </ul>
        </div>
      )}
      <div className={styles.windowsLeft}>
        <button className={styles.windowsStart} onClick={startMenu}>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/206ea28b-5f34-4284-af5c-299ce7027b6f/dfff8o3-f3c7b155-c2ca-4419-80c1-5129123f3c66.png/v1/fill/w_894,h_894/windows_nt_4_0_logo_png_by_love16love24_dfff8o3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIwNmVhMjhiLTVmMzQtNDI4NC1hZjVjLTI5OWNlNzAyN2I2ZlwvZGZmZjhvMy1mM2M3YjE1NS1jMmNhLTQ0MTktODBjMS01MTI5MTIzZjNjNjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fS0eP7y4lNpfDXcwuPvvOqU0Dj8NZqK_u9YbK7YSv7M"
            alt="windows logo"
          />
          Start
        </button>

        {!closeResume && (
          <div
            className={styles.windowsStart}
            onClick={() => setMinimizeResume(!minimizeResume)}
          >
            <img src={props.source} alt="ima" />
            <button className={styles.closeTaskBar}>
              <IoCloseOutline onClick={taskBarResumeClose} />
            </button>
          </div>
        )}

        {!closeSkills && (
          <div
            className={styles.windowsStart}
            onClick={() => setMinimizeSkills(!minimizeSkills)}
          >
            <img src={props.source} alt="ima" />
            <button className={styles.closeTaskBar}>
              <IoCloseOutline onClick={taskBarSkillsClose} />
            </button>
          </div>
        )}
      </div>
      <div className={styles.windowsRight}>
        <div className={styles.windowsStart}>{currentTime}</div>
        <p className={styles.windowsBattery}>Level: {battery.level}%</p>
      </div>
    </div>
  )
}

export default TaskBar
