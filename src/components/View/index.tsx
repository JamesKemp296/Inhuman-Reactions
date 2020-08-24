import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"

interface Props {
  children: any
}

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
  },
})

const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return <Box className={classes.root}>{children}</Box>
}

export default Header
