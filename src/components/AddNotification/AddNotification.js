import { Link } from 'gatsby';
import React, { useContext } from 'react';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './AddNotification.module.css';

const AddNotification = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Xhamper',
    price: 220,
    color: 'E kaltër e mbyllur',
    size: 'XS',
  };

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotif = ctxAddItemNotification.state?.open;

  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Njësia u shtua në qantë</span>
      </div>

      <div className={styles.newItemContainer}>
        <div className={styles.imageContainer}>
          <img alt={sampleCartItem.alt} src={sampleCartItem.image} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.name}>{sampleCartItem.name}</span>
          <span className={styles.meta}>Ngjyra: {sampleCartItem.color}</span>
          <span className={styles.meta}>Madhësia: {sampleCartItem.size}</span>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
          shiko qantën time(1)
        </Button>
        <Button level="primary" href="/cart">
          Pagesa
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>vazhdo blerjen</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
