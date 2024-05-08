import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Logo, DrawerHeader } from "./styled";

export default function SiteLogo({ children }) {
  const theme = useTheme();
  return (
    <DrawerHeader>
      <Logo>
        <img src="/images/GFA_logo.svg" />
        <div className="d-flex flex-column ">
          <h5 className='text-main'>
            Golden
          </h5>
          <small className='text-main'>
            FUTSAL ASSOCIATION
          </small>
        </div>
      </Logo>
    </DrawerHeader>
  );
}