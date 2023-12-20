import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Pyetjet e bëra më shpesh`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Porositë tua</span>
            <div className={styles.subSection}>
              <h3>Blerjet</h3>
              <p>
              Për të shqyrtuar statusin e porosisë suaj, ju lutemi vizitoni "Porositë e mia"
                 seksioni i llogarisë suaj BizGo. Ju duhet të merrni një email
                 njoftim kur paketa juaj është dërguar. Ju lutemi kontrolloni emailin tuaj
                dhe filtrin tuaj të mbeturinave.
              </p>
              <p>
              Ne i dërgojmë të gjitha porositë brenda 24 orëve nga vendosja. Gjatë periudhave tona të shitjeve të mëdha
               mund të jemi shumë të ngarkuar në fabrikën tonë, porositë mund të zgjasin pak më shumë për t'u dërguar,
                kështu që ju lutemi shtoni pesë ditë pune për çdo rast.
              </p>
              <p>
              Nëse ka diçka që dëshironi të dini për porosinë tuaj, ju lutemi
                 na kontaktoni në butikumaja@gmail.com.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Kthimet dhe ndryshimet</h3>
              <p>
              Për të shqyrtuar statusin e porosisë suaj, ju lutemi vizitoni "Porositë e mia"
                 seksioni i llogarisë suaj BizGo. Ju duhet të merrni një email
                 njoftim kur paketa juaj është dërguar. Ju lutemi kontrolloni emailin tuaj
                dhe filtrin tuaj të mbeturinave.
              </p>
              <p>
              Ne i dërgojmë të gjitha porositë brenda 24 orëve nga vendosja. Gjatë periudhave tona të shitjeve të mëdha
               mund të jemi shumë të ngarkuar në fabrikën tonë, porositë mund të zgjasin pak më shumë për t'u dërguar,
                kështu që ju lutemi shtoni pesë ditë pune për çdo rast.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Pagesa</span>
            <div className={styles.subSection}>
              <h3>Normat e transportit</h3>
              <p>
              Për të shqyrtuar statusin e porosisë suaj, ju lutemi vizitoni "Porositë e mia"
                 seksioni i llogarisë suaj BizGo. Ju duhet të merrni një email
                 njoftim kur paketa juaj është dërguar. Ju lutemi kontrolloni emailin tuaj
                dhe filtrin tuaj të mbeturinave.
              </p>
              <p>
              Ne i dërgojmë të gjitha porositë brenda 24 orëve nga vendosja. Gjatë periudhave tona të shitjeve të mëdha
               mund të jemi shumë të ngarkuar në fabrikën tonë, porositë mund të zgjasin pak më shumë për t'u dërguar,
                kështu që ju lutemi shtoni pesë ditë pune për çdo rast.
              </p>
              <p>
              Nëse ka diçka që dëshironi të dini për porosinë tuaj, ju lutemi
                 na kontaktoni në butikumaja@gmail.com.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Valuta</h3>
              <p>
              Faqja jonë e internetit zgjedh automatikisht monedhën që përputhet me tuajën
                 vendndodhjen e dorëzimit. Ju mund ta ndryshoni këtë manualisht lart këndi i dorës të majtë
                 të faqes.
              </p>
              <p>
              Për dërgesat në Ballkanin përendimor, ne do t'ju faturojmë në Euro
                 (€), për Bashkimin Evropian gjithashtu në Euro (€), për SHBA në Dollarë
                 ($), dhe në pjesën tjetër të botës në Euro (€).
              </p>
              <p>
              Norma standarde e TVSH-së përfshihet në të gjitha porositë për në Kosovë dhe
                 Evropë. Porositë për pjesën tjetër të botës nuk përfshijnë TVSH-në.
                 Aty ku është e aplikueshme, ju do të jeni përgjegjës për çdo detyrim 
                 importi të vendit lokal.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Dyshoni për mashtrim?</h3>
              <p>
              Duke pasur parasysh nivelet tona të larta të sigurisë, ka shumë pak gjasa 
              që përdorimi mashtrues i kartës suaj të ndodhë në faqen tonë të internetit. 
              Por nëse ndodh një transaksion mashtrues, fillimisht kontaktoni kompaninë tuaj të 
              kartave të kreditit ose debitit në mënyrë që ata të mbrojnë kartën tuaj dhe t'ju rimbursojnë. 
              Më pas na njoftoni në butikumaja@gmail.com dhe ne do të punojmë me kompaninë tuaj të kartës 
              për të minimizuar çdo shqetësim të mëtejshëm për ju.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
