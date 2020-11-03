import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import Dashboard from "./components/Dashboard";
import Demo from "./components/Demo";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: { DashboardIcon },
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/demo",
    name: "Demo",
    icon: { LayersIcon },
    component: Demo,
    layout: "/demo",
  },
  {
    path: "/register",
    name: "Register",
    icon: { PeopleIcon },
    component: Demo,
    layout: "/auth",
  },
];
export default routes;
