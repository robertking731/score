import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import SiteLogo from '../../components/Layout/SiteLogo';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, drawerWidth, StyledInputBase } from "../../styled";


export default function UserDrawer({ children }) {
  const [open, setOpen] = React.useState(true);
  const competitionMenus = [
    { text: "Premier League", subtext: "England", icon: "https://static.livescore.com/i2/fh/england.jpg" },
    { text: "Champions League", subtext: "England", icon: "https://static.livescore.com/i2/fh/champions-league.jpg" },
    { text: "Laliga", subtext: "Spain", icon: "https://static.livescore.com/i2/fh/spain.jpg" },
    { text: "Sarie A", subtext: "Italy", icon: "https://static.livescore.com/i2/fh/italy.jpg" },
    { text: "Bundesiga", subtext: "Germany", icon: "https://static.livescore.com/i2/fh/germeny.jpg" }
  ];
  const teamMenus = [
    { text: "Liverpool", subtext: "England", icon: "https://lsm-static-prod.livescore.com/medium/enet/8650.png" },
    { text: "Arsenal", subtext: "England", icon: "https://lsm-static-prod.livescore.com/medium/enet/9825.png" },
    { text: "Real Madrid", subtext: "Spain", icon: "https://lsm-static-prod.livescore.com/medium/enet/8633.png" },
  ];
  const regionMenus = [
    { text: "England", icon: "https://static.livescore.com/i2/fh/england.jpg" },
    { text: "Spain", icon: "https://static.livescore.com/i2/fh/spain.jpg" },
    { text: "Italy", icon: "https://static.livescore.com/i2/fh/italy.jpg" },
    { text: "Germany", icon: "https://static.livescore.com/i2/fh/germany.jpg" }
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          border: "none",
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            padding: "3px 20px"
          },
          "& .MuiTypography-root,& .MuiListItemIcon-root": {
            color: "#A2B1BF"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <SiteLogo></SiteLogo>
        <Divider />
        <List sx={{ textAlign: "center" }}>
          <Search sx={{ borderRadius: 25, width: "100%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            // value={searched}
            // onChange={requestSearch}
            // onCancelSearch={() => cancelSearch()}
            />
          </Search>
        </List>
        <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
          <ListItemIcon >
            <SportsSoccerOutlinedIcon sx={{ color: "var(--main-color)" }} />
          </ListItemIcon>
          <ListItemText primary="COMPETITIONS" />
        </ListItemButton>
        <Divider />
        <List>
          {competitionMenus.map((item, index) => (
            <ListItem disablePadding>
              <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
                <ListItemIcon >
                  <img src={item.icon} width={20} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
          <ListItemIcon >
            <SportsSoccerOutlinedIcon sx={{ color: "var(--main-color)" }} />
          </ListItemIcon>
          <ListItemText primary="MY TEAMS" />
        </ListItemButton>
        <Divider />
        <List>
          {teamMenus.map((item, index) => (
            <ListItem disablePadding>
              <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
                <ListItemIcon >
                  <img src={item.icon} width={20} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
          <ListItemIcon >
            <SportsSoccerOutlinedIcon sx={{ color: "var(--main-color)" }} />
          </ListItemIcon>
          <ListItemText primary="REGIONS" />
        </ListItemButton>
        <Divider />
        <List>
          {regionMenus.map((item, index) => (
            <ListItem disablePadding>
              <ListItemButton sx={{ margin: "1px 5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
                <ListItemIcon >
                  <img src={item.icon} width={20} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}