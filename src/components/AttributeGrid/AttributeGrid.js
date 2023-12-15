import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Transport brenda dhe jashtë Kosovës'}
        subtitle={'Kliko për më shumë!'}
      />
      <Attribute
        icon={'cycle'}
        title={'Kthimet'}
        subtitle={'Produktet e papërdoruara mund të ndërrohen pa problem.'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Pagesa në dorë'}
        subtitle={'Pranoje porosinë dhe paguaj pastaj!'}
      />
    </div>
  );
};

export default AttributeGrid;
