import React, { useState } from "react"
import { BLUE } from "../../utils"

// Material UI
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

// Components
import GameArea from "../../components/GameArea"

interface Props {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundColor: "white",
    },
  }),
)

const Home: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <GameArea
        title="Inhuman Reactions"
        subTitle="Compare your abilities to other humans. Are you inhuman?"
      />
      <Container maxWidth="lg">
        <Typography>THIS IS THE GOME PAGE WITHAS AFSKNASDnasd asdk</Typography>
      </Container>
    </Box>
  )
}

export default Home
