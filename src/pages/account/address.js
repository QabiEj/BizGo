import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './address.module.css';

import AccountLayout from '../../components/AccountLayout';
import AddressCard from '../../components/AddressCard';
import AddressForm from '../../components/AddressForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import Icon from '../../components/Icons/Icon';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';
import Button from '../../components/Button';

const AddressPage = (props) => {
  const address1 = {
    name: 'Albin Kurti',
    address: '123 Steam Mill Lane, Haymerket',
    state: 'PR',
    postal: '2000',
    country: 'Kosovë',
    company: '',
  };

  const address2 = {
    name: 'Filan Fisteku',
    address: '123 Steam Mill Lane, Haymerket',
    state: 'TR',
    postal: '2000',
    country: 'Albania',
    company: 'Kompania Molla',
  };

  const [addressList] = useState([address1, address2]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  if (isAuth() === false) {
    navigate('/login');
  }

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Faqja kryesore' },
            { link: '/account', label: 'Llogaria' },
            { link: '/account/address', label: 'Adresat' },
          ]}
        />
        <h1>Adresat</h1>

        {showForm === false && (
          <div className={styles.addressListContainer}>
            {addressList.map((address) => {
              return (
                <AddressCard
                  showForm={() => setShowForm(true)}
                  showDeleteForm={() => setShowDelete(true)}
                  {...address}
                />
              );
            })}
            <div
              className={styles.addCard}
              role={'presentation'}
              onClick={() => setShowForm(true)}
            >
              <Icon symbol={'plus'}></Icon>
              <span>adresë e re</span>
            </div>
          </div>
        )}

        {showForm === true && (
          <AddressForm closeForm={() => setShowForm(false)} />
        )}
      </AccountLayout>
      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>Fshije adresen?</h4>
          <p>
            A je i sigurt se dëshiron ta fshish këtë adresë? Ky veprim nuk mund të kthehet pas prekjes së buttonit
            Are you sure you want to delete this address? You cannot undo this
            action once you press <strong>'Fshije'</strong>
          </p>
          <div className={styles.actionContainer}>
            <Button onClick={() => setShowDelete(false)} level={'primary'}>
              Fshije
            </Button>
            <Button onClick={() => setShowDelete(false)} level={'secondary'}>
              Anulo
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default AddressPage;
