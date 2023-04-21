import { Formik } from 'formik';
import { Field, Form, Label, SubmitBtn } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signupUser } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(signupUser(values));
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" required />
        </Label>

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

export default RegisterForm;
