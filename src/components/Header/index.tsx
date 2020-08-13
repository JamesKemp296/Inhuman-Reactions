import React, { useContext } from "react"
import { Link } from "react-router-dom"
import app from "../../firebase"

// Material UI
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

// Context
import { AuthContext } from "../../contexts/Auth"

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "white",
    },
    navLink: {
      color: "black",
      padding: 10,
      textDecoration: "none",
    },
    toolbar: {
      maxWidth: 1010,
      width: "100%",
      margin: "0px auto",
      display: "flex",
      justifyContent: "space-between",
    },
  }),
)

const Header: React.FC<Props> = () => {
  const { currentUser } = useContext(AuthContext)
  const classes = useStyles()

  const SignOut = () => {
    app.auth().signOut()
  }

  const renderNavActions = (): React.ReactNode => {
    if (currentUser) {
      return <Button onClick={SignOut}>Log Out</Button>
    }
    return (
      <Box display="flex">
        <Typography
          variant="h6"
          className={classes.navLink}
          component={Link}
          to="/signup"
        >
          Sign Up
        </Typography>
        <Typography
          variant="h6"
          className={classes.navLink}
          component={Link}
          to="/login"
        >
          Login
        </Typography>
      </Box>
    )
  }

  const renderDashboardLink = (): React.ReactNode => {
    if (!currentUser) return null
    return (
      <Typography
        variant="h6"
        className={classes.navLink}
        component={Link}
        to="/dashboard"
      >
        Dashboard
      </Typography>
    )
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Typography
            variant="h6"
            className={classes.navLink}
            component={Link}
            to="/"
          >
            Inhuman Reactions
          </Typography>
          {renderDashboardLink()}
        </Box>
        {renderNavActions()}
      </Toolbar>
    </AppBar>
  )
}

export default Header
