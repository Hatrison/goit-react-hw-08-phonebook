import AuthMenu from 'components/AuthMenu/AuthMenu';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <Navigation />
      <AuthMenu />
      <UserMenu />
    </Container>
  );
};

export default AppBar;
