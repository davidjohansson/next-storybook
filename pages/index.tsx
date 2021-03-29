import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DashboardLayout from '../layout/DashboardLayout'
import ReturnsView from '../views/ReturnsView'
import HomeView from '../views/HomeView'
import SettingsView from '../views/SettingsView'

function SafeHydrate({children}) {
  return (
      <div suppressHydrationWarning>
        {typeof document === 'undefined' ? null : children}
      </div>
  )
}

export default function App() {
  return (
      <SafeHydrate>
        <Router>
            <Switch>
              <Route path="/returns">
                <DashboardLayout render={<ReturnsView />}/>
              </Route>
              <Route path="/settings">
                <DashboardLayout render={<SettingsView />}/>
              </Route>
              <Route path="/">
                <DashboardLayout render={<HomeView />}/>
              </Route>
            </Switch>
        </Router></SafeHydrate>
  );
}
