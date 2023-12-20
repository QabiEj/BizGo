import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './favorites.module.css';

import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';

const FavoritesPage = (props) => {
  const sampleFavorite1 = {
    color: 'E kaltër e mbyllur',
    size: 'XS',
    img: '/products/shirt1.jpg',
    alt: 'favorite 1',
  };

  const sampleFavorite2 = {
    color: 'E vjollce',
    size: 'XS',
    img: '/products/shirt2.jpg',
    alt: 'favorite 2',
  };

  const sampleFavorite3 = {
    color: 'E gjelbërt',
    size: 'S',
    img: '/products/shirt3.jpg',
    alt: 'favorite 3',
  };

  if (isAuth() === false) {
    navigate('/login');
  }

  const [showDelete, setShowDelete] = useState(false);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Faqja kryesore' },
              { link: '/account/favorites', label: 'Të pëlqyerat' },
            ]}
          />
          <div className={styles.favoriteListContainer}>
          <h1>Të pëlqyerat</h1>
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite1}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite2}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite3}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite2}
            />
          </div>
        </Container>
      </div>
      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>Largoje nga të pëlqyerat?</h4>
          <p>
          Jeni i sigurt që dëshironi ta hiqni këtë nga të preferuarat tuaja? Ju nuk mund 
          ta zhbëni këtë veprim pasi të shtypni <strong>'Fshije'</strong>
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

export default FavoritesPage;
