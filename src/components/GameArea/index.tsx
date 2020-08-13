import React from "react"
import { BLUE } from "../../utils"

// Material UI
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

interface Props {
  title: string
  subTitle: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gameContainer: {
      height: 500,
      width: "100%",
      backgroundColor: BLUE,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 80,
      color: "white",
      fontWeight: 500,
      textAlign: "center",
    },
    subTitle: {
      color: "white",
      textAlign: "center",
    },
  }),
)

const GameArea: React.FC<Props> = ({ title, subTitle }) => {
  const classes = useStyles()

  return (
    <Box className={classes.gameContainer}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h5" className={classes.subTitle}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default GameArea
