import React, { useCallback } from "react"
import { withRouter } from "react-router"
import app from "../../firebase"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

interface Props {
  history: any
}

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
  },
  formInput: {
    width: 300,
    marginBottom: theme.spacing(3),
  },
}))

const SignUp: React.FC<Props> = ({ history }) => {
  const classes = useStyles()
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history.push("/dashboard")
      } catch (error) {
        alert(error)
      }
    },
    [history],
  )

  return (
    <Container maxWidth="md">
      <Box className={classes.formContainer}>
        <form onSubmit={handleSignUp} className={classes.form}>
          <Typography variant="h3" align="center" paragraph>
            Sign Up
          </Typography>
          <TextField
            variant="outlined"
            name="email"
            type="email"
            label="Email"
            className={classes.formInput}
          />
          <TextField
            variant="outlined"
            name="password"
            type="password"
            label="Password"
            className={classes.formInput}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default withRouter(SignUp)
