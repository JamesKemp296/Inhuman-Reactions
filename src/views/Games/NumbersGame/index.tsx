import React, { useState, useEffect } from "react"
import { BLUE, NumbersGameData } from "../../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

// Material UI Icons
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"

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
  getStartedButton: {
    marginTop: theme.spacing(3),
  },
}))

const initialGameData: NumbersGameData = {
  currentNumberLength: 1,
  currentNumber: Math.floor(Math.random() * 10),
  isGameStarted: false,
  isRoundStarted: false,
}

const NumbersGame: React.FC<Props> = () => {
  const classes = useStyles()
  const [gameData, setGameData] = useState<NumbersGameData>(initialGameData)
  const { currentNumber, isGameStarted } = gameData

  const handleGameStartClick = (): void => {
    console.log("Game Started")
    setGameData({ ...gameData, isGameStarted: true })
  }

  const InitialNumbersGameScreen = (): React.ReactElement => {
    return (
      <Box className={classes.gameContainer}>
        <FormatListNumberedIcon className={classes.icon} />
        <Typography variant="h1" className={classes.title}>
          Number Memory
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          The average human can remember 7 numbers at once. Are you inhuman?
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          Click anywhere to start.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.getStartedButton}
          onClick={handleGameStartClick}
        >
          Start
        </Button>
      </Box>
    )
  }

  const NumbersGameInProgress = (): React.ReactElement => {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
      const timer = setInterval(() => {
        console.log("This is the timer running")
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            console.log("Timer cleared")
            clearInterval(timer)
            return 100
          }
          const newProgress = oldProgress + 5
          return newProgress
        })
      }, 100)
      return (): void => {
        clearInterval(timer)
      }
    }, [])

    return (
      <>
        <Box className={classes.gameContainer}>
          <Typography variant="h1" className={classes.title} gutterBottom>
            {currentNumber}
          </Typography>
          <Box width="50%">
            <LinearProgress
              variant="determinate"
              value={progress}
              color="secondary"
            />
          </Box>
        </Box>
      </>
    )
  }

  return (
    <>
      {isGameStarted ? <NumbersGameInProgress /> : <InitialNumbersGameScreen />}
    </>
  )
}

export default NumbersGame
