import { useDispatch } from 'react-redux';
import { Button, Container, Greeting } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Greeting>Welcome, </Greeting>
      <Button type="button" onClick={() => dispatch()}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
