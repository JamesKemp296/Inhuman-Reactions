import React, { useCallback } from "react"
import { Link } from "react-router-dom"
import { LIGHT_GREY } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

// Material UI Icons
import SpeedIcon from "@material-ui/icons/Speed"

interface Props {
  currentUser: any
  onSignOut: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  navLink: {
    fontSize: 18,
    textTransform: "uppercase",
    borderRadius: 0,
  },
  icon: {
    fontSize: 22,
    marginRight: theme.spacing(1),
    color: LIGHT_GREY,
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

const DesktopHeader: React.FC<Props> = ({ currentUser, onSignOut }) => {
  const classes = useStyles()

  const renderNavActions = useCallback((): React.ReactNode => {
    if (currentUser) {
      return (
        <Button onClick={onSignOut} className={classes.navLink}>
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
    <AppBar position="static" className={classes.root} elevation={2}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Button className={classes.navLink} component={Link} to="/">
            <SpeedIcon className={classes.icon} />
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
