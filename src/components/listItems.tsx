import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Dashboard from "./Dashboard";
import Demo from "./Demo";
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

const createLinks = (routes: any) => {
  return routes.map((prop: any, key: any) => {
    return (
      <ListItem
        key={key}
        button
        component={NavLink}
        to={prop.layout + prop.path}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={prop.name} />
      </ListItem>
    );
  });
};
export const mainListItems = (
  <div>
    {createLinks(routes)}
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Search Movies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved searches</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Favorite movies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Best of 2020" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Best of 2019" />
    </ListItem>
  </div>
);
