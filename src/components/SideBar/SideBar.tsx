import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { PiCpu } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import Footer from "../Footer/Footer";
import styles from "./SideBar.module.css";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { AppContext } from "../../App";



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const linksThree = [
  {
    path: "/signin",
    title: "Sign In",
    icon: <FaHome />,
  },
];
const links = [
  {
    path: "/systems",
    title: "Systems",
    icon: <PiCpu />,
  },
];

export function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { auth } = React.useContext(AppContext);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const linksTwo = [
    {
      path: "/map",
      title: "Map",
      icon:<svg className='icc'  width="1em" height="1em" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className='icc' d="M11.005 12.6186C11.6356 12.6186 12.1739 12.394 12.6198 11.9449C13.0657 11.4958 13.2886 10.9559 13.2886 10.3253C13.2886 9.69464 13.0641 9.15638 12.615 8.71051C12.1659 8.26461 11.626 8.04167 10.9953 8.04167C10.3647 8.04167 9.8264 8.26622 9.38051 8.71533C8.93463 9.16441 8.7117 9.70429 8.7117 10.335C8.7117 10.9656 8.93624 11.5039 9.38532 11.9498C9.83443 12.3956 10.3743 12.6186 11.005 12.6186ZM11.0001 23.8756C13.6627 21.5581 15.7678 19.2011 17.3152 16.8046C18.8626 14.408 19.6364 12.3353 19.6364 10.5862C19.6364 7.99444 18.8159 5.85537 17.1749 4.169C15.5339 2.48262 13.4757 1.63943 11.0001 1.63943C8.52462 1.63943 6.46636 2.48262 4.82539 4.169C3.18442 5.85537 2.36393 7.99444 2.36393 10.5862C2.36393 12.3353 3.13764 14.408 4.68507 16.8046C6.23252 19.2011 8.33754 21.5581 11.0001 23.8756ZM11.0001 25.7772C7.67098 22.8331 5.16321 20.0874 3.47683 17.5401C1.79045 14.9929 0.947266 12.6749 0.947266 10.5862C0.947266 7.58942 1.92304 5.11751 3.8746 3.17049C5.82612 1.2235 8.20131 0.25 11.0001 0.25C13.799 0.25 16.1742 1.2235 18.1257 3.17049C20.0772 5.11751 21.053 7.58942 21.053 10.5862C21.053 12.6749 20.2098 14.9929 18.5235 17.5401C16.8371 20.0874 14.3293 22.8331 11.0001 25.7772Z" fill="#474B4F"/>
  </svg>
  
      
    },
    {
      path: "/docs",
      title: "Docs",
      icon:<svg className='icc' width="1em" height="1em" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='icc'  d="M5.75065 20.7917H14.2507C14.4523 20.7917 14.6207 20.724 14.756 20.5887C14.8913 20.4534 14.959 20.2849 14.959 20.0833C14.959 19.8817 14.8913 19.7133 14.756 19.578C14.6207 19.4427 14.4523 19.375 14.2507 19.375H5.75065C5.54904 19.375 5.38058 19.4427 5.24529 19.578C5.10997 19.7133 5.04232 19.8817 5.04232 20.0833C5.04232 20.2849 5.10997 20.4534 5.24529 20.5887C5.38058 20.724 5.54904 20.7917 5.75065 20.7917ZM5.75065 15.125H14.2507C14.4523 15.125 14.6207 15.0573 14.756 14.922C14.8913 14.7867 14.959 14.6183 14.959 14.4167C14.959 14.2151 14.8913 14.0466 14.756 13.9113C14.6207 13.776 14.4523 13.7083 14.2507 13.7083H5.75065C5.54904 13.7083 5.38058 13.776 5.24529 13.9113C5.10997 14.0466 5.04232 14.2151 5.04232 14.4167C5.04232 14.6183 5.10997 14.7867 5.24529 14.922C5.38058 15.0573 5.54904 15.125 5.75065 15.125ZM2.37243 25.75C1.72041 25.75 1.176 25.5316 0.739193 25.0948C0.302387 24.658 0.0839844 24.1136 0.0839844 23.4616V2.53845C0.0839844 1.88643 0.302387 1.34201 0.739193 0.905208C1.176 0.468403 1.72041 0.25 2.37243 0.25H12.5915C12.8966 0.25 13.1931 0.311756 13.481 0.435265C13.7689 0.558751 14.0154 0.723119 14.2207 0.928371L19.2389 5.94663C19.4442 6.15188 19.6086 6.39844 19.7321 6.68631C19.8556 6.97417 19.9173 7.27067 19.9173 7.5758V23.4616C19.9173 24.1136 19.6989 24.658 19.2621 25.0948C18.8253 25.5316 18.2809 25.75 17.6289 25.75H2.37243ZM12.834 6.18913V1.66667H2.37243C2.1545 1.66667 1.95472 1.75748 1.77308 1.93909C1.59146 2.12073 1.50065 2.32052 1.50065 2.53845V23.4616C1.50065 23.6795 1.59146 23.8793 1.77308 24.0609C1.95472 24.2425 2.1545 24.3333 2.37243 24.3333H17.6289C17.8468 24.3333 18.0466 24.2425 18.2282 24.0609C18.4098 23.8793 18.5007 23.6795 18.5007 23.4616V7.33333H13.9782C13.6495 7.33333 13.3766 7.22482 13.1595 7.00778C12.9425 6.79075 12.834 6.51786 12.834 6.18913Z" fill="#474B4F"/>
      </svg>
      
  
    },
    {
      path: "/profile",
      title: "Profile",
      icon: <svg className='icc' width="1em" height="1em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='icc' d="M4.77788 20.7699C5.98205 19.9035 7.25977 19.2183 8.61106 18.7143C9.96235 18.2103 11.4253 17.9583 13 17.9583C14.5747 17.9583 16.0377 18.2103 17.3889 18.7143C18.7402 19.2183 20.018 19.9035 21.2221 20.7699C22.1575 19.8018 22.9099 18.6585 23.4793 17.3399C24.0486 16.0213 24.3333 14.5747 24.3333 13C24.3333 9.85972 23.2295 7.18576 21.0219 4.97813C18.8142 2.77049 16.1403 1.66667 13 1.66667C9.85972 1.66667 7.18576 2.77049 4.97813 4.97813C2.77049 7.18576 1.66667 9.85972 1.66667 13C1.66667 14.5747 1.95136 16.0213 2.52074 17.3399C3.09015 18.6585 3.84252 19.8018 4.77788 20.7699ZM13.0008 13.7083C11.807 13.7083 10.8001 13.2986 9.98006 12.4791C9.16002 11.6596 8.75 10.653 8.75 9.45915C8.75 8.26532 9.15974 7.2584 9.97921 6.43839C10.7987 5.61835 11.8054 5.20833 12.9992 5.20833C14.193 5.20833 15.1999 5.61808 16.0199 6.43758C16.84 7.25705 17.25 8.26369 17.25 9.45752C17.25 10.6513 16.8403 11.6583 16.0208 12.4783C15.2013 13.2983 14.1946 13.7083 13.0008 13.7083ZM13 25.75C11.2219 25.75 9.55731 25.419 8.00625 24.757C6.45519 24.095 5.10572 23.19 3.95784 22.0422C2.80999 20.8943 1.90504 19.5448 1.24301 17.9937C0.581004 16.4427 0.25 14.7781 0.25 13C0.25 11.2219 0.581004 9.55731 1.24301 8.00625C1.90504 6.45519 2.80999 5.10572 3.95784 3.95784C5.10572 2.80999 6.45519 1.90505 8.00625 1.24301C9.55731 0.581005 11.2219 0.25 13 0.25C14.7781 0.25 16.4427 0.581005 17.9937 1.24301C19.5448 1.90505 20.8943 2.80999 22.0422 3.95784C23.19 5.10572 24.095 6.45519 24.757 8.00625C25.419 9.55731 25.75 11.2219 25.75 13C25.75 14.7781 25.419 16.4427 24.757 17.9937C24.095 19.5448 23.19 20.8943 22.0422 22.0422C20.8943 23.19 19.5448 24.095 17.9937 24.757C16.4427 25.419 14.7781 25.75 13 25.75ZM13 24.3333C14.3059 24.3333 15.5909 24.1049 16.855 23.6482C18.1191 23.1914 19.2116 22.5661 20.1324 21.7724C19.2116 21.0332 18.1463 20.4489 16.9367 20.0193C15.7271 19.5898 14.4148 19.375 13 19.375C11.5852 19.375 10.2684 19.5852 9.0497 20.0057C7.83099 20.4261 6.77029 21.0151 5.86761 21.7724C6.78845 22.5661 7.88092 23.1914 9.14504 23.6482C10.4091 24.1049 11.6941 24.3333 13 24.3333ZM13 12.2917C13.7955 12.2917 14.4666 12.0183 15.0133 11.4716C15.56 10.9249 15.8333 10.2538 15.8333 9.45833C15.8333 8.66283 15.56 7.99173 15.0133 7.44504C14.4666 6.89835 13.7955 6.625 13 6.625C12.2045 6.625 11.5334 6.89835 10.9867 7.44504C10.44 7.99173 10.1667 8.66283 10.1667 9.45833C10.1667 10.2538 10.44 10.9249 10.9867 11.4716C11.5334 12.0183 12.2045 12.2917 13 12.2917Z" fill="#474B4F"/>
      </svg>
      ,
    },
    {
  
      path: "/",
      title: "Log out",
      icon: <svg  onClick={() => {
        auth.logout(); 
        window.location.reload(); 
      }}  className='icc' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='icc' d="M2.95446 23.3327C2.30244 23.3327 1.75803 23.1143 1.32122 22.6775C0.884418 22.2407 0.666016 21.6963 0.666016 21.0442V2.95446C0.666016 2.30244 0.884418 1.75803 1.32122 1.32122C1.75803 0.884418 2.30244 0.666016 2.95446 0.666016H12.0266V2.08268H2.95446C2.73653 2.08268 2.53675 2.17349 2.35511 2.35511C2.17349 2.53675 2.08268 2.73653 2.08268 2.95446V21.0442C2.08268 21.2622 2.17349 21.462 2.35511 21.6436C2.53675 21.8252 2.73653 21.916 2.95446 21.916H12.0266V23.3327H2.95446ZM18.3198 17.0122L17.3254 15.9933L20.6111 12.7077H8.02177V11.291H20.6111L17.3254 8.00545L18.3198 6.98651L23.3327 11.9993L18.3198 17.0122Z" fill="#474B4F"/>
      </svg>
      ,
    },
  ];

  return (
    <Box sx={{ display: "flex", margin: "0px", padding: "0px" }}>
      <CssBaseline />
      <Drawer
        className={styles.box}
        variant="permanent"
        open={open}
        sx={{
          border: "none",
          backgroundColor: "#fb0000",
          ".css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            background: "#FDFFFF",
          },
        }}
      >
        <DrawerHeader
          sx={{ border: "none", marginBottom: "0px", paddingBottom: "8px",paddingTop:'35px'}}
        >
          <NavLink to="/homepage" style={{ textDecoration: "none", borderBottom: 'none',  }}>
            <img
              style={{ paddingRight: "25px" }}
              src="/public/logo.jpg"
              alt=""
            />
          </NavLink>

          <IconButton style={{ color: "#86C232" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <HiChevronDoubleLeft />
            ) : (
              <HiChevronDoubleLeft />
            )}
          </IconButton>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginRight: 0.4,
              ...(open && { display: "none" }),
            }}
          >
            <HiChevronDoubleRight style={{ color: "#86C232" }} />
          </IconButton>
        </DrawerHeader>

        <List sx={{ marginTop: "0px", paddingBottom: "0px" }}>
          {links.map((data, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className={styles.btn}
                selected={
                  data.path === location.pathname.slice(0, data.path.length)
                }
                component={NavLink}
                to={data.path}
                sx={{
                  minHeight: 68,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  transition: "0.5s",

                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    color: "#474B4F",
                    fontFamily: "Lato, sans-serif",
                  },
                  "&.active .icc": {
                    fill:'#86C232'
                  },
                  "&.active .MuiListItemIcon-root, &.active .MuiTypography-root  ":
                    {
                      color: "#86C232",
                    },
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "none",
                    ".icc":{
                      fill: "#86C232",
                      transition: "0.5s ",


                    },
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: "#86C232",
                      transition: "0.5s ",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    fontSize: "26px",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {linksTwo.map((data, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className={styles.btn}
                selected={
                  data.path === location.pathname.slice(0, data.path.length)
                }
                component={NavLink}
                to={data.path}
                sx={{
                  borderRight: "none",

                  minHeight: 68,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    fontFamily: "Lato, sans-serif",
                    color: "#474B4F",
                  },
                  "&.active .icc": {
                    fill:'#86C232'
                  },
                  "&.active .MuiListItemIcon-root, &.active .MuiTypography-root " :
                    {
                      color: "#86C232",
                    },
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "none",
                    ".icc":{
                      fill: "#86C232",
                      transition: "0.5s ",
                    },
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: "#86C232",
                      transition: "0.5s ",
                    },
                  },
                }}
              >
                <ListItemIcon
                  className={styles.icon}
                  sx={{
                    fontSize: "26px",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}
