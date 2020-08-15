import React, { useCallback } from "react"
import { withRouter } from "react-router"
import app from "../../firebase"

// Material UI
import Container from "@material-ui/core/Container"

interface Props {
  history: any
}

const SignUp: React.FC<Props> = ({ history }) => {
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
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Container>
  )
}

export default withRouter(SignUp)
