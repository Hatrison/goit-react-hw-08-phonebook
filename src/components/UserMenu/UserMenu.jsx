import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Greeting } from './UserMenu.styled';
import { logoutUser } from 'redux/auth/operations';
import { selecUsername } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selecUsername);

  return (
    <Container>
      <Greeting>Welcome, {username}</Greeting>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
