import React from "react"
// import { Link } from "react-router-dom"
// import app from "../../firebase"

// // Material UI
// import { makeStyles, Theme } from "@material-ui/core/styles"
// import AppBar from "@material-ui/core/AppBar"
// import Toolbar from "@material-ui/core/Toolbar"
// import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"
// import Button from "@material-ui/core/Button"

// Components
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <>
      <MobileHeader />
    </>
  )
}

export default Header
