import React, { useState } from "react"
import { BLUE, ReactionTimeGameData } from "../../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

// Material UI Icons
import SpeedIcon from "@material-ui/icons/Speed"

// Components
import GameInProgress from "./GameInProgress"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  gameContainer: {
    width: "100%",
    backgroundColor: BLUE,
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
}))

const initialGameData: ReactionTimeGameData = {
  startTime: 0,
  isGameStarted: false,
  isRoundStarted: false,
}

const ReactionTimeTest: React.FC<Props> = () => {
  const classes = useStyles()
  const [gameData, setGameData] = useState<ReactionTimeGameData>(
    initialGameData,
  )
  const [allTimes, setAlltimes] = useState<number[]>([])
  const { startTime, isGameStarted } = gameData

  const handleGameStartClick = (): void => {
    setGameData({ ...gameData, isGameStarted: true })
  }

  const handleGameClick = (): void => {
    if (!isGameStarted) return
    const nowInMs = new Date().getTime()
    const difference = nowInMs - startTime
    console.log({ start: startTime })
    console.log({ end: nowInMs })
    console.log({ difference: nowInMs - startTime })
    setGameData({
      ...gameData,
      isRoundStarted: false,
      startTime: 0,
    })
    setAlltimes([...allTimes, difference])
    console.log({ allTimes })
    if (allTimes.length >= 4) {
      setGameData({ ...gameData, isGameStarted: false })
      return
    }
    setTimeout(function () {
      const nowInMs = new Date().getTime()
      setGameData({ ...gameData, startTime: nowInMs, isRoundStarted: true })
    }, 3000)
  }

  const handleResetGameClick = (): void => {
    setGameData({ ...gameData, isRoundStarted: false, startTime: 0 })
  }

  const InitialGameScreen = (): React.ReactElement => {
    return (
      <Box className={classes.gameContainer} onClick={handleGameStartClick}>
        <SpeedIcon className={classes.icon} />
        <Typography variant="h1" className={classes.title}>
          Reaction Time Test
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          When the red box turns green, click as quickly as you can.
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          Click anywhere to start.
        </Typography>
      </Box>
    )
  }

  return (
    <>
      {isGameStarted ? (
        <GameInProgress
          gameData={gameData}
          setGameData={setGameData}
          onGameClick={handleGameClick}
          onResetGameClick={handleResetGameClick}
        />
      ) : (
        <InitialGameScreen />
      )}
      <Container maxWidth="md">
        {allTimes.length > 0 && (
          <ul>
            {allTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        )}
      </Container>
    </>
  )
}

export default ReactionTimeTest
