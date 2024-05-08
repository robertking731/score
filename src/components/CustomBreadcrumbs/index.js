import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick} style={{marginBottom:"15px"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <EmojiEventsOutlinedIcon sx={{ mr: 0.5,color:"var(--main-color)" }} fontSize="inherit" />
          Tournament Management
        </Link>
      </Breadcrumbs>
    </div>
  );
}