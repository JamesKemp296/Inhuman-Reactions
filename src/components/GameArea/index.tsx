import React from "react"
import { Link } from "react-router-dom"
import { BLUE } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

// Material UI Icons
import SpeedIcon from "@material-ui/icons/Speed"

interface Props {
  title: string
  subTitle: string
}

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
      fontSize: 150,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 180,
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

const GameArea: React.FC<Props> = ({ title, subTitle }) => {
  const classes = useStyles()

  return (
    <Box className={classes.gameContainer}>
      <SpeedIcon className={classes.icon} />
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h5" className={classes.subTitle}>
        {subTitle}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.getStartedButton}
        component={Link}
        to="/tests/reaction-time"
      >
        Get Started
      </Button>
    </Box>
  )
}

export default GameArea
