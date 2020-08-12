import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth"

interface Props {
  component: any
  rest: any
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  ...rest
}): any => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(routeProps: any): any => {
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }}
    />
  )
}

export default PrivateRoute
