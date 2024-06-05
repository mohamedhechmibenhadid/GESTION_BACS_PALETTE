import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
function changePage(){
  console.log('page changed');
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
          <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/dash"   className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Dashboard" />
      </NavLink>
    </ListItemButton>
    <NavLink to="/dashboard/article"   className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
    <ListItemButton>
      <ListItemIcon>
        <InventoryIcon />
      </ListItemIcon>

      <ListItemText primary="Articles" />
    </ListItemButton>
    </NavLink>

    <NavLink to="/dashboard/fournisseur"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>

      <ListItemText primary="Fournisseurs" />
    </ListItemButton>
    </NavLink>
    <NavLink  to="/dashboard/users"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>

      <ListItemText primary="Users" />
    </ListItemButton>
    </NavLink>
    <NavLink  to="/dashboard/groups"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
    <ListItemButton>
      <ListItemIcon>
        <GroupsIcon />
      </ListItemIcon>

      <ListItemText primary="Groups" />
    </ListItemButton>
    </NavLink>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/report"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Reports" />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/integration"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Integrations" />
      </NavLink>
    </ListItemButton>
  </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/month"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Current month" />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/quarter"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Last quarter" />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/end"  className={({ isActive}) =>
    isActive ? "active" : "pending"
  }>
      <ListItemText primary="Year-end sale" />
      </NavLink>
    </ListItemButton>
  </React.Fragment>
          </List>
        </Drawer>
        </>
  );
}