import React, { useRef } from "react"
import styles from "../styles/LogonPage.module.css"
import { useNavigate } from "react-router-dom"

const LogonPage = () => {
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const okBtnClicked = () => {
    if (userNameRef.current.value === "admin") {
      if (passwordRef.current.value === "123") {
        navigate("/main")
      }
      if (passwordRef.current.value !== "123") {
        alert("Wrong password...")
      }
    }
    if (userNameRef.current.value !== "admin") {
      alert("Wrong user name...")
    }
  }

  return (
    <>
      <div className={styles.logonPage}>
        <div className={styles.logonBox}>
          <div className={styles.logonBoxTop}>Enter Password</div>
          <div className={styles.logonBoxCenter}>
            <img
              src="https://cdn2.steamgriddb.com/logo/72750ee512b0ef9c77aa7e84765a8173.png"
              alt="windows nt 5.0"
              className={styles.LogonBoxCenterIcon}
            />
          </div>
          <div className={styles.logonBoxBottom}>
            <div className={styles.logonBoxBottomUserNameBox}>
              <label className={styles.logonBoxBottomUserName}>
                User name :
              </label>
              <input
                type="text"
                className={styles.userName}
                ref={userNameRef}
              />
            </div>
            <div className={styles.logonBoxBottomPasswordBox}>
              <label className={styles.logonBoxBottomPassword}>
                Password :
              </label>
              <input
                type="password"
                className={styles.password}
                ref={passwordRef}
              />
            </div>
          </div>
          <div className={styles.bottomDown}>
            <button className={styles.bottomDownOk} onClick={okBtnClicked}>
              Ok
            </button>
            <button className={styles.bottomDownCancel}>Cancel</button>
            <button className={styles.bottomDownShutdown}>Shutdown...</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogonPage
