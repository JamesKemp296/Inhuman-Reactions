import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Views
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Dashboard from "./views/Dashboard"
import ReactionTimeTest from "./views/ReactionTimeTest"

// Componetns
import View from "./components/View"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

// Contexts
import { AuthProvider } from "./contexts/Auth"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <View>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route
              exact
              path="/tests/reaction-time"
              component={ReactionTimeTest}
            />
            <PrivateRoute component={Dashboard} path="/dashboard" />
          </Switch>
        </View>
      </Router>
    </AuthProvider>
  )
}

export default App
