import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { OFF_WHTIE, BLUE } from "./utils"

// Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

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

const theme = createMuiTheme({
  palette: {
    background: {
      default: OFF_WHTIE,
    },
    primary: {
      main: BLUE,
    },
  },
})

const App: React.FC<Props> = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
