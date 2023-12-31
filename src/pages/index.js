import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Shop online'}
        subtitle={'Zbulo oferat e reja dimër 2023'}
        ctaText={'blej tani'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Produkte të mira dhe të lira te{' '}
          <span className={styles.gold}>GoBiz.</span>
        </p>
        <p>
          Veshjet më të mira të zgjedhura nga <span className={styles.gold}>En</span> dhe{' '}
          <span className={styles.gold}>Qabi</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Koleksion i ri!'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Arritje të reja'} link={'/shop'} textLink={'shiko të gjitha'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Produkte kualitative'}
            description={`Çmime të volitshme`}
            textLink={'blej tani'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% zbritje \n Në shumë produkte!`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Femra</Link>
          <Link to={'/shop'}>Meshkuj</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'rreth GoBiz-it'}
        quote={
          '“Ne besojmë në dy gjëra: kërkimin e cilësisë në çdo gjë që bëjmë dhe kujdesin për njëri-tjetrin.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Ditar'} subtitle={'Shënime rreth kompanisë'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'Ne jemi të qëndrueshëm'}
          subtitle={
            'Kujdesi për klientin është pjesa më e rëndësishme e punës tonë.'
          }
          ctaText={'Lexo më shumë'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Të stiluara nga ju!'}
          subtitle={'Bëni tag @qabidev për tu paraqitur.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
