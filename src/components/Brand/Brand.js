import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>BIZGO</h4> */}
      <svg
  width={127}
  height={24}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 127.67 23.36"
>
  
  <text
    x="62"
    y="17"
    fill="currentColor"
    font-family="Arial"
    font-size="18"
    font-weight="bold"
  >
    BIZGO
  </text>
  
</svg>

    </div>
  );
};

export default Brand;
