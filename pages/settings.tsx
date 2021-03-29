import React from "react";

import DashboardLayout from '../layout/DashboardLayout'
import SettingsView from '../views/SettingsView'

export default function Settings() {
  return <DashboardLayout render={<SettingsView/>}/>;
}
