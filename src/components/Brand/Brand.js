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
      {/* <h4>SYDNEY</h4> */}
      <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >
        <path
          fill="currentColor"
          d="M0,0v23h4.5c3.3,0,6-2.7,6-6s-2.7-6-6-6H0zm3,3h1.5c1.65,0,3,1.35,3,3s-1.35,3-3,3H3zm0,6h1.5c1.65,0,3,1.35,3,3s-1.35,3-3,3H3z"
        />
        <path
          fill="currentColor"
          d="M1,0v23h2V0H1z M4,0v23h2V0H4z"
        />
        <path
          fill="currentColor"
          d="M0,0h6v2H2l4,7.5H1V12h4L2,20h4v2H0V0z"
        />
        <path
          fill="currentColor"
          d="M6,0c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z M4.5,6.5h-1v3h2v-1h-1V6.5z M7,6.5h-1V8h1v1h-2v-3H7z"
        />
        <path
          fill="currentColor"
          d="M3,0c-1.65,0-3,1.35-3,3v17c0,1.65,1.35,3,3,3s3-1.35,3-3v-17C6,1.35,4.65,0,3,0z M4.5,20.5H1.5v-15h3V20.5z"
        />
      </svg>
    </div>
  );
};

export default Brand;
