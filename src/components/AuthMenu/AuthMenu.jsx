import { Link } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthMenu;
