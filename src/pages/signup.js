import React, { useState } from 'react';
import { navigate } from 'gatsby';
import {
  validateEmail,
  validateStrongPassword,
  isEmpty,
} from '../helpers/general';
import * as styles from './signup.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const SignupPage = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [signupForm, setSignupForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.firstName) === true) {
      tempError.firstName = 'Fusha kërkohet!';
      validForm = false;
    }

    if (isEmpty(signupForm.lastName) === true) {
      tempError.lastName = 'Fusha kërkohet!';
      validForm = false;
    }

    if (validateEmail(signupForm.email) !== true) {
      tempError.email =
        'Ju lutem përdorni një adresë emaili valide, sikur user@example.com.';
      validForm = false;
    }

    if (validateStrongPassword(signupForm.password) !== true) {
      tempError.password =
        'Fjalëkalimi duhet të ketë së paku 8 karaktere, 1 me shkronjë të vogël, 1 me shkronjë të madhe and 1 karakter numerik.';
      validForm = false;
    }

    if (validForm === true) {
      setErrorForm(errorState);
      navigate('/accountSuccess');
      window.localStorage.setItem('key', 'sampleToken');
      //create account endpoint
    } else {
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div className={styles.root}>
        <div className={styles.signupFormContainer}>
          <h1 className={styles.title}>Krijo llogari</h1>
          <span className={styles.subtitle}>
            Ju lutem shkruani të dhënat tuaja më poshtë:
          </span>
          <form
            noValidate
            className={styles.signupForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'firstName'}
              value={signupForm.firstName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Emri'}
              error={errorForm.firstName}
            />

            <FormInputField
              id={'lastName'}
              value={signupForm.lastName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Mbiemri'}
              error={errorForm.lastName}
            />

            <FormInputField
              id={'email'}
              value={signupForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email adresa'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={signupForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Fjalëkalimi'}
              error={errorForm.password}
            />

            <Button fullWidth type={'submit'} level={'primary'}>
              krijo llogari
            </Button>
            <span className={styles.reminder}>Ke një llogari?</span>
            <Button
              type={'button'}
              onClick={() => navigate('/login')}
              fullWidth
              level={'secondary'}
            >
              qasu
            </Button>
          </form>
        </div>

        <div className={styles.attributeGridContainer}>
          <AttributeGrid />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
