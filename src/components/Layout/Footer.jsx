import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Copyright 2019. Powered by <SourceLink>Nairabox</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
