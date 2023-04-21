import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Greeting } from './UserMenu.styled';
import { logoutUser } from 'redux/auth/operations';
import { selecUserEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selecUserEmail);

  return (
    <Container>
      <Greeting>{email}</Greeting>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
