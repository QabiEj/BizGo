import React from 'react';
import * as styles from './orders.module.css';

import AccountLayout from '../../components/AccountLayout/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import OrderItem from '../../components/OrderItem/OrderItem';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';

const OrderPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const sampleOrder1 = {
    id: '2',
    orderPlaced: 'Oct 12, 2021',
    lastUpdate: 'Oct 12, 2021',
    status: 'pritje',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Xhamper',
        quantity: '2',
        price: '100',
      },
      {
        image: '/products/shirt2.jpg',
        alt: 'order 1 product 2',
        name: 'Xhamper',
        quantity: '1',
        price: '300',
      },
    ],
    shippingAddress: {
      name: 'Filan Fisteku',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'TR',
      country: 'Albania',
    },
    billingAddress: {
      name: 'Agim Gashi',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'TR',
      country: 'Albania',
    },
  };

  const sampleOrder2 = {
    id: '1',
    orderPlaced: 'Oct 11, 2021',
    lastUpdate: 'Oct 11, 2021',
    status: 'pritje',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Xhamper',
        quantity: '2',
        price: '100',
      },
    ],
    shippingAddress: {
      name: 'Fitim Fazliu',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'PR',
      country: 'Kosova',
    },
    billingAddress: {
      name: 'Albin Kurti',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'PR',
      country: 'Kosova',
    },
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Faqja kryesore' },
            { link: '/account', label: 'Llogaria' },
            { link: '/account/orders/', label: 'Porositë' },
          ]}
        />
        <h1>Porositë</h1>
        <div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>
          <span className={styles.tableHeader}>Porosia #</span>
          <span className={styles.tableHeader}>Porosia e vendosur</span>
          <span className={styles.tableHeader}>Ndryshimi i fundit</span>
          <span className={styles.tableHeader}>Statusi</span>
        </div>

        <OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />
        <OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />
      </AccountLayout>
    </Layout>
  );
};

export default OrderPage;
