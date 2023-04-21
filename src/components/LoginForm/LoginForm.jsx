import { Formik } from 'formik';
import { Field, Form, Label, SubmitBtn } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(loginUser(values));
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Email
          <Field type="email" name="email" required />
        </Label>

        <Label>
          Password
          <Field type="password" name="password" required />
        </Label>

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default LoginForm;
