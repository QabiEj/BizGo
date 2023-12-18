import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Thank You!</h1>
          <p>
            We are now processing your order. If you have any concerns feel free
            to email us at customerservice@example.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Order Status'}
              icon={'delivery'}
              subtitle={'Check your order status'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Blej'}
              icon={'bag'}
              subtitle={'Vazhdo blerjen'}
              link={'/shop'}
            />

            <ActionCard
              title={'Pyetjet e shpejta'}
              icon={'question'}
              subtitle={'Shiko faqen e pyetjeve të shpejta'}
              link={'/faq'}
            />

            <ActionCard
              title={'Na kontaktoni'}
              icon={'phone'}
              subtitle={'Lidhuni me ne'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
