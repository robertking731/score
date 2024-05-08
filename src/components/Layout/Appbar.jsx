import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';

import SearchIcon from '@mui/icons-material/Search';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

import MoreIcon from '@mui/icons-material/MoreVert';
import TuneIcon from '@mui/icons-material/Tune';

import CustomTabs from "../CustomTabs";
import { AppBar, TopToolbar } from "./styled";
import { Avatar } from '@mui/material';

export default function PersistentDrawerRight() {


  const [open, setOpen] = React.useState(true);


  const topMenu = [
    { text: "LIVE SCORES", icon: <ScoreboardOutlinedIcon /> },
    { text: "FAVORITES", icon: <CollectionsBookmarkOutlinedIcon /> },
    { text: "NEWS", icon: <NewspaperOutlinedIcon /> },
  ];
 

  const menuId = 'primary-search-account-menu';
 

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <TopToolbar >
          <Box sx={{ flex: 1 }} />
          <CustomTabs sx={{ width: "auto !important" }} tabData={topMenu} />
          <Box sx={{ flex: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
            <Fab size="small" aria-label="add" sx={{ margin: 1, backgroundColor: "#303D46" }}>
              <SearchIcon sx={{ color: "#738089" }} />
            </Fab>
            <Avatar
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
              src="/images/avatar/manager.jpg"
            >
            </Avatar>
            <Fab size="small" aria-label="setting" sx={{ margin: 1, backgroundColor: "#303D46" }}>
              <TuneIcon sx={{ color: "#738089" }} />
            </Fab>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </TopToolbar>
      </AppBar>
    </Box>
  );
}