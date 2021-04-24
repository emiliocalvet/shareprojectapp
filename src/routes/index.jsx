import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Route'
import AdmHomePage from '../pages/AdmHomePage'
import AdmCreateProjectPage from '../pages/AdmCreateProjectPage'
import AdmListProjectPage from '../pages/AdmListProjectPage'
import AdmProjectPage from '../pages/AdmProjectPage'
import ClientHomePage from '../pages/ClientHomePage'
import ClientSearchProjectPage from '../pages/ClientSearchProjectPage'
import ClientProjectPage from '../pages/ClientProjectPage'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ClientHomePage} />
        <Route path="/search" exact component={ClientSearchProjectPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/client/project/:id" exact component={ClientProjectPage} />

        <Route path={`/adm`} exact component={AdmHomePage} isPrivate />
        <Route path={`/adm/project/create`} exact component={AdmCreateProjectPage} isPrivate={true} />
        <Route path={`/adm/project/list`} exact component={AdmListProjectPage} isPrivate={true} />
        <Route path={`/adm/project/:id`} exact component={AdmProjectPage} isPrivate={true} />

        <Route path={`/:trash`} component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
