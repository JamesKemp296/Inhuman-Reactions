import React from "react"
import "./App.css"

// Views
import Home from "./views/Home"

// Componetns
import Header from "./components/Header"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
