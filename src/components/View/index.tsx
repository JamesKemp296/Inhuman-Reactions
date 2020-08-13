import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"

interface Props {
  children: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      maxWidth: 1010,
      width: "100%",
      margin: "0px auto",
    },
  }),
)

const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return <Box className={classes.root}>{children}</Box>
}

export default Header
