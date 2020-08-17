import React, { useState } from "react"
import { Link } from "react-router-dom"

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
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
    borderRadius: 0,
    textDecoration: "none",
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

const MobileHeader: React.FC<Props> = ({ currentUser, onSignOut }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
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
          <Typography
            variant="h6"
            className={classes.navLink}
            component={Link}
            to="/"
          >
            Inhuman Reactions
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={handleToggleDrawer}
        currentUser={currentUser}
        onSignOut={onSignOut}
      />
    </>
  )
}

export default MobileHeader
