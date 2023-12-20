import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Na dërgoni një mesazh</h4>
        <p>
        Ekipi ynë i Shërbimit të Klientit është këtu për të gjitha pyetjet nga e 
        hëna deri të premten 9:00 - 16:00 CEST (Koha Standarde e Evropës Qendrore)
        </p>
        <p>Ne presim të dëgjojmë nga ju.</p>
      </div>

      <div className={styles.section}>
        <h4>Telefoni</h4>
        <p>+383 45 601 379</p>
      </div>
        <p>E hënë - E premte 9am - 4pm CEST</p>

      <div className={styles.section}>
        <h4>Email adresa</h4>
        <p>
        Ju mund t'i dërgoni email ekipit tonë të Shërbimit të Klientit në butikumaja@gmail.com
           ose nëpërmjet formularit të kontaktit më poshtë:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Emri i plotë'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Numri i telefonit'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email adresa'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Komentet / Pyetjet'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            dërgo
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
