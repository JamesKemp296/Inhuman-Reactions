import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Views
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Dashboard from "./views/Dashboard"

// Componetns
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

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
            <PrivateRoute component={Dashboard} path="/dashboard" />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
