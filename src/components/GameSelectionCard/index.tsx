import React from "react"
import { BLUE, Icon, ORANGE } from "../../utils"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

// Material UI Icons
import SpeedIcon from "@material-ui/icons/Speed"
import AdjustIcon from "@material-ui/icons/Adjust"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import HearingIcon from "@material-ui/icons/Hearing"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import MenuBookIcon from "@material-ui/icons/MenuBook"

interface Props {
  title?: string
  subTitle?: string
  icon?: Icon
  isAvailable: boolean
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 250,
    transition: "transform 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      "& $icon": {
        color: ORANGE,
      },
    },
  },
  actionArea: {
    height: "100%",
    padding: 30,
    "&:hover": {},
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    fontSize: 70,
    color: BLUE,
  },
})

const GameSelectionCard: React.FC<Props> = ({
  title,
  subTitle,
  icon,
  isAvailable,
}) => {
  const classes = useStyles()

  const renderIcon = () => {
    switch (icon) {
      case Icon.Speed:
        return <SpeedIcon className={classes.icon} />
        break
      case Icon.Target:
        return <AdjustIcon className={classes.icon} />
        break
      case Icon.Squares:
        return <ViewModuleIcon className={classes.icon} />
        break
      case Icon.Hearing:
        return <HearingIcon className={classes.icon} />
        break
      case Icon.Keyboard:
        return <KeyboardIcon className={classes.icon} />
        break
      case Icon.Numbers:
        return <FormatListNumberedIcon className={classes.icon} />
        break
      case Icon.Book:
        return <MenuBookIcon className={classes.icon} />
        break
      default:
        return <AdjustIcon className={classes.icon} />
    }
  }

  return (
    <Card className={classes.root} variant="elevation" elevation={2}>
      <CardActionArea className={classes.actionArea} disabled={!isAvailable}>
        <CardContent className={classes.cardContent}>
          {/* <SpeedIcon className={classes.icon} /> */}
          {renderIcon()}
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.subTitle}>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameSelectionCard
