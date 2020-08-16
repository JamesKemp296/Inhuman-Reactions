import React, { useContext, useCallback } from "react"
import { Link } from "react-router-dom"
import app from "../../firebase"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

// Context
import { AuthContext } from "../../contexts/Auth"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  navLink: {
    fontSize: 20,
    textTransform: "capitalize",
    borderRadius: 0,
  },
  toolbar: {
    maxWidth: 960,
    width: "100%",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
}))

const DesktopHeader: React.FC<Props> = () => {
  const { currentUser } = useContext(AuthContext)
  const classes = useStyles()

  const SignOut = () => {
    app.auth().signOut()
  }

  const renderNavActions = useCallback((): React.ReactNode => {
    if (currentUser) {
      return (
        <Button onClick={SignOut} className={classes.navLink}>
          Log Out
        </Button>
      )
    }
    return (
      <Box display="flex">
        <Button className={classes.navLink} component={Link} to="/signup">
          Sign Up
        </Button>
        <Button className={classes.navLink} component={Link} to="/login">
          Login
        </Button>
      </Box>
    )
  }, [currentUser])

  const renderDashboardLink = useCallback((): React.ReactNode => {
    if (!currentUser) return null
    return (
      <Button className={classes.navLink} component={Link} to="/dashboard">
        Dashboard
      </Button>
    )
  }, [currentUser])

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Button className={classes.navLink} component={Link} to="/">
            Inhuman Reactions
          </Button>
          {renderDashboardLink()}
        </Box>
        {renderNavActions()}
      </Toolbar>
    </AppBar>
  )
}

export default DesktopHeader
