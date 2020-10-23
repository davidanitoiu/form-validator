import Form from 'components/form';
import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { AppContainer } from './app-components';

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

function App() {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "bob",
    email: "bob@dylan",
    password: "asdf",
    confirm: "qwer"
  });
  const confirmValid = useMemo(() => formValues.confirm === formValues.password, [formValues]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const heading = "Register with us";
  const textFields = [
    { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter username', required: true, minLength: 3, onChange: handleChange, value: formValues.username },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter email', required: true, onChange: handleChange, value: formValues.email },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter password', required: true, minLength: 6, errorMessage: 'Passwords must match', onChange: handleChange, value: formValues.password },
    { name: 'confirm', type: 'password', label: 'Confirm Password', placeholder: 'Enter password again', required: true, minLength: 6, errorMessage: 'Passwords must match', valid: confirmValid, onChange: handleChange, value: formValues.confirm },
  ]

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = e.currentTarget.reportValidity();

    if (!valid) return;

    if (confirmValid)
      alert('Thank you for registering!');
  };

  return (
    <AppContainer>
      <Form
        heading={heading}
        textfields={textFields}
        onSubmit={onSubmit} />
    </AppContainer>
  );
}

export default App;
