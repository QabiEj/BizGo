import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`BizGo \n Një brand kosovar që nga 2023`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Histori
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Vlerat
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Qëndrueshmeria
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Themeluar në vitin 2023 BizGo është një brand inovativ i ri Kosovar is an innovative British brand me një avantazh 
              bashkohorë. Ne bëjmë modele moderne të kohës.
            </p>
            <br />
            <br />
            <p>
              Kemi bërë disa nga modelet më të reja të maicave 
              dhe vazhdojmë të shfyrtëzojmë kohën në perfeksionimin e kualitetit të pambukut.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Vlerat tona</h3>
            <div ref={valuesRef}>
              <p>
                BizGo prodhoi disa nga modelet më të reja moderne të maicave.
              </p>
              <ol>
                <li>Bëhu një eko-modern</li>
                <li>E sofistikuar dhe jo e prodhuar në masë të madhe</li>
                <li>Vetëm materialet natyrore</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Qëndrueshmeria</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Themeluesi ynë, €A3I, kishte një sy për kualitet dhe një dëshirë për inovacion.
              </p>
              <p>
                E prodhuar në Prishtinë, Kosovë, e krijuar nga pambuku ynë luksoz Supima për butësi, 
                rehati dhe qëndrueshmëri të pashoqe, bluza BizGo ka një përshtatje klasike dhe thjeshtë detajet më thelbësore.{' '}
              </p>
              <p>
                Me një përvojë në fushën e shitjeve për më shumë se 10 vite, themeluesi ynë pretendon në 
                zgjerimin e shpejtë të shitjeve brenda dhe jashtë vendit.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
