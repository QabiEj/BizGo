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
          <h1>Faleminderit!</h1>
          <p>
          Tani po përpunojmë porosinë tuaj. Nëse keni ndonjë shqetësim mos ngurroni
             të na dërgoni email në butikumaja@gmail.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Statusi i porosisë'}
              icon={'delivery'}
              subtitle={'Shiko statusin e porosisë tënde'}
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
