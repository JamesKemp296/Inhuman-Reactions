import React from "react"
import app from "../../firebase"

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const SignOut = () => {
    app.auth().signOut()
  }

  return (
    <div>
      <h1>This is the dashboard page</h1>
      <button onClick={SignOut}>SignOut</button>
    </div>
  )
}

export default Dashboard
