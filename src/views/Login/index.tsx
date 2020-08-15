import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../../firebase"
import { AuthContext } from "../../contexts/Auth"

// Material UI
import Container from "@material-ui/core/Container"

interface Props {
  history: any
}

const Login: React.FC<Props> = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push("/dashboard")
      } catch (error) {
        alert(error)
      }
    },
    [history],
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <Container maxWidth="md">
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </Container>
  )
}

export default withRouter(Login)
