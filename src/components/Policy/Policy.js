import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Lorem Ipsum</h3>
        <p>
        Kompania me përgjegjësi të kufizuara BizGo
                mbledh të dhënat personale që ju jepni vullnetarisht kur 
                aplikoni ose regjistroheni për një llogari ose 
                kur bëni një blerje në faqen tonë të internetit; www.bizgo.netlify.app.{' '}
        </p>
        <p>
        Kjo politikë e privatësisë përshkruan se si informacioni juaj mblidhet, 
                përdoret dhe zbulohet kur ju aksesoni ose përdorni shërbimet tona siç përcaktohet në kushtet tona. 
                Ky informacion mblidhet, përdoret dhe zbulohet në përputhje me aktet e privatësisë të 
                legjistlacionit të shtetit.{' '}
        </p>
        <p>
        Kjo politikë e privatësisë është përfshirë duke iu referuar kushteve tona. 
                Çdo term që nuk është përcaktuar në këtë politikë përcaktohet në kushtet. 
                Ju pranoni të pajtoheni me të gjitha kushtet kur hyni ose përdorni shërbimet tona, 
                duke përfshirë këtë politikë të privatësisë.{' '}
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Lorem Ipsum</h3>
        <p>
        Shërbimet tona, duke përfshirë por pa u kufizuar në regjistrimin e një llogarie 
                me ne ose vendosjen e një porosie, nuk synohen të përdoren nga fëmijët nën moshën 13 vjeç. 
                Përndryshe,ne nuk mbledhim me vetëdije informacion personal të identifikueshëm nga vizitorët 
                nën moshën 13 vjeç.{' '}
        </p>
        <p>
        Nëse jeni nën 18 vjeç, çdo përdorim i shërbimeve tona duhet të jetë me përfshirjen e një prindi 
                ose kujdestari. Duke hyrë ose duke përdorur faqen tonë të internetit, ju garantoni dhe na tregoni 
                se jeni mbi moshën 18 vjeç dhe keni të drejtën, autoritetin dhe aftësinë ligjore për të lidhur një 
                marrëveshje ligjërisht të detyrueshme dhe për t'iu përmbajtur kësaj politike të privatësisë.{' '}
        </p>
        <p>
        BizGo mbledh, përdorë dhe zbulon informacionin lidhur me
                  përdoruesit e moshave 13-18 në mënyrën e njëjtë siç bën me të rriturit.{' '}
        </p>
      </div>

      <div className={styles.section}>
        <h3>3. Lorem Ipsum</h3>
        <p>
        Ju duhet të përdorni shërbimet tona vetëm në përputhje me këtë Politikë të Privatësisë 
        dhe çdo ligj ose rregullore në fuqi. Ju pranoni të përmbaheni nga ndërmarrja e ndonjë akti të ndaluar siç 
        përcaktohet në këtë pikë 3. Ju nuk duhet (ose të përpiqeni të):{' '}
        </p>
        <p>
        (a) ndërhyni ose ndërpresni përdorimin e Shërbimeve tona ose faqes së internetit, 
        në çfarëdo mënyre duke përfshirë, por pa u kufizuar në shërbimet ose
         rrjetet që presin faqen e internetit;{' '}
        </p>
        <p>(b) kërcënoni, ngacmojoni, frikësoni ose dëmtoni një tjetër; </p>
        <p>
        (c) pretendoni të jeni dikush, ose ndonjë entitet, që nuk jeni, nuk do të imitoni ose shtrembëroni 
        veten si një person tjetër (përfshirë të famshëm), një entitet, një punonjës i BizGo-së, ose një
         drejtues civil ose qeveritar, ose në ndonjë mënyrë tjetër të shtrembëroni përkatësinë tuaj me 
         një person apo subjekt. BizGo rezervon të drejtën të refuzojë ose bllokojë çdo përdorues që mund 
         të konsiderohet si një imitim ose keqinterpretim i identitetit tuaj, ose një keqpërdorim i emrit 
         ose identitetit të një personi tjetër;{' '}
        </p>
        <p>
           (d) përfshiheni në çdo shkelje të së drejtës së autorit ose shkelje tjetër e pronësisë intelektuale, 
           ose zbuloni ndonjë sekret tregtar ose informacion konfidencial në shkelje të një marrëveshjeje 
           konfidencialiteti, punësimi ose ndryshe;{' '}
         </p>
         <p>
           (e) përdorni, shpërndani, riprodhoni ose komercializoni çdo përmbajtje nga faqja e internetit ose 
           shërbimi BizGo, përveç siç lejohet nga kjo Politikë, me ligj dhe me marrëveshje paraprake me shkrim 
           nga BizGo;{' '}
         </p>
         <p>
           (f) transmetoni çdo reklamë të pakërkuar, material promovues ose forma të tjera të kërkesës në lidhje 
           me përdorimin tuaj të Shërbimit pa miratimin paraprak me shkrim të The BizGo;{' '}
         </p>
         <p>
           (g) të falsifikoni çdo titull të paketës TCP-IP ose ndonjë pjesë të informacionit të titullit ose të 
           vendosni informacione në një titull të krijuar për të mashtruar marrësit në lidhje me origjinën e çdo 
           përmbajtjeje të transmetuar përmes faqes së internetit ("mashtrim";);
         </p>
      </div>
    </div>
  );
};

export default Policy;
