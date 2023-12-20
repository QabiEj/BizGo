import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            Kush e krijo këtë shabllon
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
          Teknologji të përputhshme
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>Zhvilluar nga Matter dhe €A3I</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                Ky shabllon është krijuar nga ekipa te{' '}
                <Button target={true} href="https://matterdesign.com.au/">
                  Matter Design & Digital
                </Button>{' '}
                dhe modifikuar dhe përdorur nga
                <Button target={true} href="https://shabanej.wordpress.com/">
                {' '}€A3I
                </Button>{' '}
                .
              </p>
              </div>
            </div>
    
        </Container>
        
      </div>
    </Layout>
  );
};

export default HowToUsePage;
