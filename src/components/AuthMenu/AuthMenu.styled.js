import styled from 'styled-components';
import { Link as LinkReact } from 'react-router-dom';

export const Link = styled(LinkReact)`
  color: black;
  text-decoration: none;
  padding: 10px;
  transition: color 250ms linear;

  :visited {
    color: inherit;
  }

  :hover,
  :focus {
    color: #023fba;
  }
`;
