import { Link, navigate } from 'gatsby';
import React from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Xhamper',
    price: 220,
    color: 'E kaltër e mbyllur',
    size: 'xs',
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Shporta ime</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        <MiniCartItem {...sampleCartItem} />
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Totali (EUR)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taksat dhe posta do të llogariten në terminalin e pagesës
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>vazhdo blerjen</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
