import React from "react"
import styles from "./App.module.css"
import CustomCursor from "./components/CustomCursor"

const App = () => {
  return (
    <>
      <CustomCursor />
      <div className={styles.desktop}>
        <div className={styles.left}>
          <div className={styles.folder}>
            <img src="./assets/folder.svg" alt="folder" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
