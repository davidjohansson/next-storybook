import React from "react";

import DashboardLayout from '../layout/DashboardLayout'
import ReturnsView from '../views/ReturnsView'


export default function Returns() {
  return <DashboardLayout render={<ReturnsView/>}/>;
}
