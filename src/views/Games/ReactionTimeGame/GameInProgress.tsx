import React, { useEffect } from "react"
import { RED, GREEN, ReactionTimeGameData } from "../../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

// Material UI Icons
import SpeedIcon from "@material-ui/icons/Speed"

interface Props {
  gameData: ReactionTimeGameData
  setGameData: any
  onGameClick: any
  onResetGameClick: any
}

const ReactionTimeTest: React.FC<Props> = ({
  gameData,
  setGameData,
  onGameClick,
  onResetGameClick,
}) => {
  const { isRoundStarted } = gameData
  const useStyles = makeStyles((theme: Theme) => ({
    gameContainer: {
      width: "100%",
      backgroundColor: isRoundStarted ? GREEN : RED,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: 400,
      },
      [theme.breakpoints.up("sm")]: {
        height: 450,
      },
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
    icon: {
      color: "white",
      [theme.breakpoints.down("sm")]: {
        fontSize: 120,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 140,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 160,
      },
    },
    title: {
      color: "white",
      fontWeight: 500,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 40,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 60,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 80,
      },
    },
    subTitle: {
      color: "white",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 24,
      },
    },
    getStartedButton: {
      marginTop: theme.spacing(3),
    },
  }))
  const classes = useStyles()

  useEffect(() => {
    console.log("component loaded")
    setTimeout(function () {
      const nowInMs = new Date().getTime()
      setGameData({ ...gameData, startTime: nowInMs, isRoundStarted: true })
    }, 3000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isRoundStarted ? (
        <Box className={classes.gameContainer} onClick={onGameClick}>
          <SpeedIcon className={classes.icon} />
          <Typography variant="h1" className={classes.title}>
            Click Now!
          </Typography>
        </Box>
      ) : (
        <Box className={classes.gameContainer} onClick={onResetGameClick}>
          <SpeedIcon className={classes.icon} />
          <Typography variant="h1" className={classes.title}>
            Wait for green.
          </Typography>
        </Box>
      )}
    </>
  )
}

export default ReactionTimeTest
