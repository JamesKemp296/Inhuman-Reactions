import React, { useState } from "react"
import { Link } from "react-router-dom"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import Typography from "@material-ui/core/Typography"

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard"

interface Props {
  isDrawerOpen: boolean
  onToggleDrawer: any
  currentUser: any
}

const useStyles = makeStyles({
  navList: {
    width: 240,
  },
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
})

const Drawer: React.FC<Props> = ({
  isDrawerOpen,
  onToggleDrawer,
  currentUser,
}) => {
  const classes = useStyles()

  const list = () => (
    <div
      role="presentation"
      onClick={onToggleDrawer}
      onKeyDown={onToggleDrawer}
    >
      <List className={classes.navList}>
        <ListItem button component={Link} to="/">
          <Typography>Inhuman Reactions</Typography>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={onToggleDrawer}
        onOpen={onToggleDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
