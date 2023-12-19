import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'dizajn'}
              title={'Dizajnerët e BizGo: €A3I'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  I vendosur në Prishtinë, €A3I ka angazhuar 
                  disa dizajnerë por që ruhet privatësia e të dhënave të tyre.
                </p>
                <p className={styles.blogParagraph}>
                Kompania me përgjegjësi të kufizuara BizGo
                mbledh të dhënat personale që ju jepni vullnetarisht kur 
                aplikoni ose regjistroheni për një llogari ose 
                kur bëni një blerje në faqen tonë të internetit; www.bizgo.netlify.app.
                </p>
                <p className={styles.blogParagraph}>
                Kjo politikë e privatësisë përshkruan se si informacioni juaj mblidhet, 
                përdoret dhe zbulohet kur ju aksesoni ose përdorni shërbimet tona siç përcaktohet në kushtet tona. 
                Ky informacion mblidhet, përdoret dhe zbulohet në përputhje me aktet e privatësisë të legjistlacionit të shtetit.
                </p>
                <p className={styles.blogParagraph}>
                Kjo politikë e privatësisë është përfshirë duke iu referuar kushteve tona. 
                Çdo term që nuk është përcaktuar në këtë politikë përcaktohet në kushtet. 
                Ju pranoni të pajtoheni me të gjitha kushtet kur hyni ose përdorni shërbimet tona, 
                duke përfshirë këtë politikë të privatësisë.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/cloth.png'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/collections/collection1.png'} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Lorem ipsum</h2>
                <p className={styles.blogParagraph}>
                Shërbimet tona, duke përfshirë por pa u kufizuar në regjistrimin e një llogarie 
                me ne ose vendosjen e një porosie, nuk synohen të përdoren nga fëmijët nën moshën 13 vjeç. 
                Përndryshe,ne nuk mbledhim me vetëdije informacion personal të identifikueshëm nga vizitorët 
                nën moshën 13 vjeç.
                </p>
                <p className={styles.blogParagraph}>
                Nëse jeni nën 18 vjeç, çdo përdorim i shërbimeve tona duhet të jetë me përfshirjen e një prindi 
                ose kujdestari. Duke hyrë ose duke përdorur faqen tonë të internetit, ju garantoni dhe na tregoni 
                se jeni mbi moshën 18 vjeç dhe keni të drejtën, autoritetin dhe aftësinë ligjore për të lidhur një 
                marrëveshje ligjërisht të detyrueshme dhe për t'iu përmbajtur kësaj politike të privatësisë.
                </p>
                <p className={styles.blogParagraph}>
                  BizGo mbledh, përdorë dhe zbulon informacionin lidhur me
                  përdoruesit e moshave 13-18 në mënyrën e njëjtë siç bën me të rriturit.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
