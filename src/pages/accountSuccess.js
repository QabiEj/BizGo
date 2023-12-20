import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const AccountSuccessPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Llogaria u krijua</h1>
          <p>
          Ne ju kemi dërguar një lidhje konfirmimi për të aktivizuar llogarinë tuaj. Ju lutem
             kontrolloni emailin tuaj dhe verifikojeni.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Llogaritë'}
              icon={'user'}
              subtitle={'Shiko preferencat e llogarisë'}
              link={'/account/settings'}
            />

            <ActionCard
              title={'Blej'}
              icon={'bag'}
              subtitle={'Vazhdo blerjen'}
              link={'/shop'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AccountSuccessPage;
