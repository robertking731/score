import * as React from 'react';
import { Logo, DrawerHeader } from "./styled";

export default function SiteLogo() {
  return (
    <DrawerHeader>
      <Logo>
        <img src="/images/GFA_logo.svg" alt=''/>
        <div className="d-flex flex-column">
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