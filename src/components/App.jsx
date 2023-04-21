import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Layout } from './Layout';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { fetchCurrentUSer } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUSer());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
      </Route>
    </Routes>
  );
};
