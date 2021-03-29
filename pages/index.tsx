import React from "react";

import DashboardLayout from '../layout/DashboardLayout'
import HomeView from '../views/HomeView'

export default function Home() {
  return <DashboardLayout render={<HomeView/>}/>;
}
