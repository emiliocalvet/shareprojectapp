import React, { useContext } from 'react'
import {
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom'

import { Context } from '../context/AuthContext'

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const auth = useContext(Context)

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === auth.authenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/adm' }} />
        )
      }}
    />
  )
}

export default Route
