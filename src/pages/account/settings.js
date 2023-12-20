import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './settings.module.css';

import AccountLayout from '../../components/AccountLayout';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import FormInputField from '../../components/FormInputField';
import Layout from '../../components/Layout/Layout';

import {
  validateEmail,
  validateStrongPassword,
  isAuth,
} from '../../helpers/general';

const SettingsPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [updateForm, setUpdateForm] = useState(initialState);
  const [error, setError] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...updateForm, [id]: e };
    setUpdateForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (updateForm.email !== '') {
      if (validateEmail(updateForm.email) !== true) {
        validForm = false;
        tempError.email =
          'Ju lutemi përdorni një adresë të vlefshme emaili, si p.sh. user@example.com.';
      }
    }

    if (updateForm.password !== '') {
      if (validateStrongPassword(updateForm.password) === false) {
        validForm = false;
        tempError.password =
          'Fjalëkalimi duhet të ketë të paktën 8 karaktere, 1 shkronja të vogla, 1 shkronja të mëdha dhe 1 karakter numerik.';
      }

      if (updateForm.password !== updateForm.confirmPassword) {
        validForm = false;
        tempError.confirmPassword = 'Konfirmi i fjalëkalimit jo i njëjti.';
      }
    }

    if (validForm === true) {
      //success
      setError(errorState);
      setUpdateForm(initialState);
    } else {
      setError(tempError);
    }
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Faqja kryesore' },
            { link: '/account', label: 'Llogaria' },
            { link: '/account/settings', label: 'Preferencat' },
          ]}
        />
        <h1>Preferencat</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)} noValidate>
            <div className={styles.nameSection}>
              <FormInputField
                id={'firstName'}
                value={updateForm.firstName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Emri'}
              />
              <FormInputField
                id={'lastName'}
                value={updateForm.lastName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Mbiemri'}
              />
              <FormInputField
                id={'email'}
                value={updateForm.email}
                handleChange={(id, e) => handleChange(id, e)}
                type={'email'}
                labelName={'Email adresa'}
                error={error.email}
              />
            </div>
            <div className={styles.passwordContainer}>
              <h2>Ndrysho fjalëkalimin</h2>
              <div className={styles.passwordSection}>
                <FormInputField
                  id={'password'}
                  value={updateForm.password}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Fjalëkalim i ri'}
                  error={error.password}
                />
                <FormInputField
                  id={'confirmPassword'}
                  value={updateForm.confirmPassword}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Konfimo fjalëkalimin'}
                  error={error.confirmPassword}
                />
                <Button level={'primary'} type={'submit'}>
                  përditëso
                </Button>
              </div>
            </div>
          </form>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default SettingsPage;
