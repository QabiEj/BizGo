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
          (a) interfere with or disrupt the use of Services or the website, in
          any manner including but not limited to the servicers or networks that
          host the website;{' '}
        </p>
        <p>(b) stalk, harass, threaten, intimidate or harm another; </p>
        <p>
          (c) pretend to be anyone, or any entity, you are not, you will not
          impersonate or misrepresent yourself as another person (including
          celebrities), entity, a The Upside employee, or a civic or government
          leader, or otherwise misrepresent your affiliation with a person or
          entity. The Upside reserves the right to reject or block any user
          which could be deemed to be an impersonation or misrepresentation of
          your identity, or a misappropriation of another person's name or
          identity;{' '}
        </p>
        <p>
          (d) engage in any copyright infringement or other intellectual
          property infringement, or disclose any trade secret or confidential
          information in violation of a confidentiality, employment, or
          non-disclosure agreement or otherwise;{' '}
        </p>
        <p>
          (e) use, distribute, reproduce or commercialize any content from the
          Website or The Upside service except as permitted by this Policy, by
          law, and with prior written agreement from The Upside;{' '}
        </p>
        <p>
          (f) transmit any unsolicited advertising, promotional material or
          other forms of solicitation in connection with your use of the Service
          without the prior written agreement of The Upside;{' '}
        </p>
        <p>
          (g) forge any TCP-IP packet header or any part of the header
          information or otherwise putting Information in a header designed to
          mislead recipients as to the origin of any content transmitted through
          the Website ("spoofing";);
        </p>
      </div>
    </div>
  );
};

export default Policy;
