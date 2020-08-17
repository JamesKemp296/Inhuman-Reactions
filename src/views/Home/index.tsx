import React, { useState } from "react"
import { cardSelectionArray } from "../../utils"

// Material UI
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

// Components
import GameArea from "../../components/GameArea"
import GameSelectionCard from "../../components/GameSelectionCard"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    marginTop: theme.spacing(5),
    width: "100%",
    display: "grid",
    gridGap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "none",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
}))

const Home: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <GameArea
        title="Inhuman Reactions"
        subTitle="Compare your abilities to other humans. Are you inhuman?"
      />
      <Container maxWidth="md">
        <Box className={classes.cardContainer}>
          {cardSelectionArray.map((card, index) => (
            <GameSelectionCard
              key={index}
              title={card.title}
              subTitle={card.subTitle}
              icon={card.icon}
              isAvailable={card.isAvailable}
              link={card.link}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Home
