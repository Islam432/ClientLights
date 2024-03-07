import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BiLogoJoomla } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import { PiCpu } from "react-icons/pi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import Footer from '../Footer/Footer';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const linksTwo = [
  {
    path:"/map",
    title: 'Traffic',
    icon: <HiOutlineMapPin />,
  },
  {
    path: "/profile",
    title: 'Profile',
    icon: <RxAvatar />
  },
  {
    
    
    path: "/setting",
    title: 'Setting',
    icon: <LuSettings />
  }


 ]
 const linksThree = [
  {
    path: "/signin",
    title: 'Sign In',
    icon: <FaHome/>,
  },

 ]
const links = [
{
  path:"/homepage",
  title: 'Home',
  icon: <FaHome />,
},
{
  path: "/systems",
  title: 'Systems',
  icon: <PiCpu />
}
]

export function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', margin:'0px', padding:'0px'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{border:'none'}}>
        <DrawerHeader  sx={{border:'none',marginBottom:'0px',paddingBottom:'0px'}} >
        <img style={{paddingRight:'30px',}} src="/public/logo.jpg" alt="" />

      
          <IconButton style={{color:'#86C232',}}  onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            
            sx={{
              marginRight: 0.4,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon style={{color:'#86C232',}} />
          </IconButton>
        </DrawerHeader >
   
        <List sx={{marginTop:'0px', paddingBottom:'0px'}}>
          {links.map((data, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block',  }}>
             <ListItemButton
  selected={data.path === location.pathname.slice(0, data.path.length)}
  component={NavLink}
  to={data.path}
  sx={{
   
    minHeight: 68,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
    
    "&.Mui-selected": {
      backgroundColor: "transparent",

    },
    "&.active": {
      backgroundColor: "#222629",
    },
    "&.active .MuiListItemIcon-root, &.active .MuiTypography-root": {
      color: "#86C232",
    },
    "&:hover": {
      backgroundColor: "transparent", 
      border:'none'
     
    },
    
  }}
>
  <ListItemIcon
    sx={{
      
      fontSize:'26px',
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center',
    }}
  >
    {data.icon}
  </ListItemIcon>
  <ListItemText primary={data.title} sx={{ opacity: open ? 1 : 0,  }} />
</ListItemButton>

            </ListItem>
          ))}
       
          {linksTwo.map((data, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
  selected={data.path === location.pathname.slice(0, data.path.length)}
  component={NavLink}
  to={data.path}
  sx={{
    borderRight:'none',
    
    minHeight: 68,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
     "&.Mui-selected": {
      backgroundColor: "transparent",

    },
    "&.active": {
      backgroundColor: "#222629", // Устанавливаем цвет фона для активной кнопки
    },
    "&.active .MuiListItemIcon-root, &.active .MuiTypography-root": {
      color: "#86C232",
    },
    "&:hover": {
      border:'none'
     
    },
  }}
>
  <ListItemIcon
    sx={{
      fontSize:'26px',
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center',
    }}
  >
    {data.icon}
  </ListItemIcon>
  <ListItemText primary={data.title} sx={{ opacity: open ? 1 : 0 }} />
</ListItemButton>

            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, }}>
        <Outlet/>
        <Footer/>
       
      </Box>
    </Box>
  );
}
