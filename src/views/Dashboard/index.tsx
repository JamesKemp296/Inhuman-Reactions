import React, { useContext } from "react"
import { DARK_GREY } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

// Context
import { AuthContext } from "../../contexts/Auth"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  userSubTitle: {
    color: DARK_GREY,
  },
  title: {
    fontWeight: 600,
  },
  useCard: {
    width: "100%",
    padding: theme.spacing(3),
  },
  leaderBoardCard: {
    width: "100%",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}))

const Dashboard: React.FC<Props> = () => {
  const { currentUser } = useContext(AuthContext)
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <Card className={classes.useCard} elevation={2}>
        <Typography variant="body1" className={classes.userSubTitle}>
          Email
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          {currentUser?.email}
        </Typography>
        <Typography variant="body1" className={classes.userSubTitle}>
          Joined
        </Typography>
        <Typography variant="h6" className={classes.title}>
          4 days ago
        </Typography>
      </Card>
      <Card className={classes.leaderBoardCard} elevation={2}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Leaderboard
        </Typography>
      </Card>
    </Container>
  )
}

export default Dashboard
