import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import AppStore from "./context/AppStore"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppStore>
      <App />
    </AppStore>
  </React.StrictMode>
)

reportWebVitals()
