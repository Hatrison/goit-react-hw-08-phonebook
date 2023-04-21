import styled from 'styled-components';
import { NavLink as NavLinkReact } from 'react-router-dom';

export const NavLink = styled(NavLinkReact)`
  color: black;
  text-decoration: none;
  padding: 10px;
  transition: color 250ms linear;

  :visited {
    color: inherit;
  }

  &.active {
    color: #023fba;
  }

  :hover,
  :focus {
    color: #023fba;
  }
`;
