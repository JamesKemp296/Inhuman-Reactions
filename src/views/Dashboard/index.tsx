import React from "react"
import app from "../../firebase"

// Material UI
import Container from "@material-ui/core/Container"

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const SignOut = () => {
    app.auth().signOut()
  }

  return (
    <Container maxWidth="md">
      <h1>This is the dashboard page</h1>
      <button onClick={SignOut}>SignOut</button>
    </Container>
  )
}

export default Dashboard
