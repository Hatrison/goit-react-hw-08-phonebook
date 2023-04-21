import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Greeting = styled.p`
  padding: 0 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: #d6d6d6;
  }
`;
