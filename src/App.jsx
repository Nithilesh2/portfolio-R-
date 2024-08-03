import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LogonPage from "./components/LogonPage"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogonPage />} />
          <Route path="/main" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
