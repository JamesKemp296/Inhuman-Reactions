import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth"

interface Props {
  component: any
  path: any
  rest?: any
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  path,
  ...rest
}) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} exact path={path} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
}

export default PrivateRoute
