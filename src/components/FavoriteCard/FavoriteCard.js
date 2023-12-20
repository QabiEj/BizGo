import React, { useState } from 'react';

import Drawer from '../Drawer';
import QuickView from '../QuickView';

import * as styles from './FavoriteCard.module.css';

const FavoriteCard = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { color, size, img, alt, showConfirmDialog } = props;
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.imageContainer}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.metaContainer}>
          <span>Ngjyra: {color}</span>
          <span>Madhësia: {size}</span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <span role={'presentation'} onClick={() => setShowQuickView(true)}>
          Ndrysho
        </span>
        <span role={'presentation'} onClick={showConfirmDialog}>
          Fshije
        </span>
      </div>

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView
          buttonTitle={'update favorite'}
          close={() => setShowQuickView(false)}
        />
      </Drawer>
    </div>
  );
};

export default FavoriteCard;
