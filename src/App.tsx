import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Views
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"

// Componetns
import Header from "./components/Header"

// Contexts
import { AuthProvider } from "./contexts/Auth"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
