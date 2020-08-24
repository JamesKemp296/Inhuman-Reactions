import React, { useContext } from "react"
import app from "../../firebase"
import { SM_MEDIA_QUERY } from "../../utils"

// Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery"

// Components
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

// Context
import { AuthContext } from "../../contexts/Auth"

interface Props {}

const Header: React.FC<Props> = () => {
  const { currentUser } = useContext(AuthContext)
  const isSmallScreen = useMediaQuery(SM_MEDIA_QUERY)

  const handleSignOut = (): void => {
    app.auth().signOut()
  }

  return (
    <>
      {isSmallScreen ? (
        <MobileHeader currentUser={currentUser} onSignOut={handleSignOut} />
      ) : (
        <DesktopHeader currentUser={currentUser} onSignOut={handleSignOut} />
      )}
    </>
  )
}

export default Header
