import React, { useContext, useCallback, useState } from "react"
import { Link } from "react-router-dom"
import app from "../../firebase"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

// Components
import Drawer from "./drawer"

// Context
import { AuthContext } from "../../contexts/Auth"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  navLink: {
    color: "black",
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
  menuButton: {
    color: "black",
    marginRight: theme.spacing(1),
  },
}))

const MobileHeader: React.FC<Props> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const { currentUser } = useContext(AuthContext)
  const classes = useStyles()

  const handleToggleDrawer = (event: any): void => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setIsDrawerOpen(!isDrawerOpen)
  }

  const SignOut = () => {
    app.auth().signOut()
  }

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={handleToggleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.navLink}>
            Inhuman Reactions
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={handleToggleDrawer}
        currentUser={currentUser}
      />
    </>
  )
}

export default MobileHeader
