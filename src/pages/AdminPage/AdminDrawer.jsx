import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Avatar from '@mui/material/Avatar';
import SiteLogo from '../../components/Layout/SiteLogo';
import { drawerWidth } from "../../components/Layout/styled";

export default function AdminDrawer() {
  const [open, setOpen] = React.useState(true);
  const menus = [
    { text: "Tournament Management", icon: <EmojiEventsOutlinedIcon /> },
    { text: "Player Approval", icon: <DoneAllOutlinedIcon /> },
    { text: "User Management", icon: <GroupOutlinedIcon /> },
    { text: "My Account", icon: <PermIdentityOutlinedIcon /> },
  ]
  const menuSetting = [
    { text: "settings", icon: <SettingsOutlinedIcon /> },
    { text: "Logout", icon: <ExitToAppOutlinedIcon /> }
  ]
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
          <Avatar alt="Remy Sharp" src="/images/avatar/manager.jpg" sx={{ margin: "auto", width: 90, height: 90, marginBottom: 1 }} />
          <h5>
            courtney Henry
          </h5>
          <Typography variant="subtitle1" gutterBottom>
            Super Admin
          </Typography>
        </List>
        <Divider />
        <List>
          {menus.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ margin: "2px",padding:"5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuSetting.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ margin: "2px",padding:"5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}