import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Typography, ButtonBase, Link } from '@material-ui/core';
import TitleBar from '../../components/TitleBar';
import config from '../../../config';

const InfoView = ({
  classes, history, location, locale,
}) => {
  const content = location.pathname.includes('accessibility') ? 'accessibilityInfo' : 'generalInfo';

  const handleClick = () => {
    document.getElementsByClassName('SidebarWrapper')[0].scrollTo(0, 0);
    history.push('info/accessibility');
  };

  const renderTitlebar = () => (
    <TitleBar
      sticky
      ariaHidden
      backButton
      title={<FormattedMessage id="info.title" />}
      titleComponent="h3"
    />
  );
  const renderFinnishInfo = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Palvelukartta ja saavutettavuusseloste</Typography>
      <ButtonBase className={classes.linkButton} role="link" onClick={() => handleClick()}>
        <Typography color="inherit" variant="body2">Palvelukartan saavutettavuusseloste</Typography>
      </ButtonBase>
      <Typography component="h3" variant="body2"><FormattedMessage id="app.title" /></Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartalta löytyvät Turun julkiset toimipisteet ja niiden palvelut,
        esimerkiksi koulut, päiväkodit ja terveysasemat.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Muun muassa kaavoitustiedot, 3D-rakennukset, tonttijaot ja nimistötiedot löytyvät
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/">
          seudullisesta opaskartasta
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartta on alkujaan Helsingin kaupungin luoma, avoimen lähdekoodin
        sovellus, jota kehitetään yhteistyönä.
      </Typography>

      {
        // Haku
      }
      <Typography component="h3" variant="body2">Haku</Typography>
      {/* <Typography className={classes.text} variant="body2"> */}
      <Typography component="h4" variant="body2">Palvelukartalta voit hakea esimerkiksi:</Typography>
      <ul>
        <li><Typography variant="body2">terveysasemia</Typography></li>
        <li><Typography variant="body2">kouluja</Typography></li>
        <li><Typography variant="body2">päiväkoteja</Typography></li>
        <li><Typography variant="body2">uimahalleja</Typography></li>
        <li><Typography variant="body2">pallokenttiä</Typography></li>
        <li><Typography variant="body2">kirjastoja</Typography></li>
        <li><Typography variant="body2">nuorisotaloja</Typography></li>
        <li><Typography variant="body2">iltapäivätoiminnan toimipisteitä</Typography></li>
        <li><Typography variant="body2">osoitteita</Typography></li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Kirjoita palvelukartan hakukenttään haluamasi sana tai sen alkua. Saat
        hakuehdotuksia, joista voit valita itsellesi sopivan. Voit myös kirjoittaa
        hakemasi sanan loppuun ja painaa Hae-painiketta tai Enter-näppäintä. Jos
        hakutulos ei ollut hyvä, voit tarkentaa hakua Tarkenna-painikkeella. Voit
        hakea myös usean sanan yhdistelmällä, esimerkiksi ”koulu ranska”.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Jos hakutulos on tyhjä, tarkista kirjoitusasu.
        Kirjoita osoite, jonka läheltä etsit palvelua. Kirjoita avainsanoja,
        esimerkiksi ”liikuntasali”, ”ruotsinkielinen päiväkoti”.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Hakukentässä on rasti, jota painamalla voit tyhjentää haun.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartan hakukentän nuolipainikkeella voit palata edelliseen näkymään.
      </Typography>
      <Typography component="h4" variant="body2">Voit järjestää hakutulokset:</Typography>
      <ul>
        <li><Typography variant="body2">osuvin ensin</Typography></li>
        <li><Typography variant="body2">aakkosjärjestys, A-Ö</Typography></li>
        <li><Typography variant="body2">käänteinen aakkosjärjestys Ö-A</Typography></li>
        <li><Typography variant="body2">esteettömin ensin</Typography></li>
        <li><Typography variant="body2">lähin ensin (anna palvelukartalle lupa paikantaa sinut)</Typography></li>
      </ul>
      <Typography component="h3" variant="body2">Osoitehaku</Typography>
      <Typography className={classes.text} variant="body2">
        Voit kirjoittaa hakukenttään myös osoitteen, josta haluat etsiä
        palveluja. Haku antaa sinulle osoite-ehdotuksia.
        Voit myös kirjoittaa osoitteen loppuun saakka.
      </Typography>
      <Typography component="h3" variant="body2">Palveluluettelo</Typography>
      <Typography className={classes.text} variant="body2">
        Palveluluettelo löytyy palvelukartan etusivulta. Luettelon
        palvelupuun avulla voit valita kartalle näkyviin yhden tai
        useamman palvelukokonaisuuden kohteet, esim. kirjastot,
        neuvolat ja lukiokoulutus. Tällä tavoin pystyt yhdistelemään
        eri aihepiirien tietoja. Voit myös poistaa tekemiäsi valintoja.
      </Typography>
      <Typography component="h3" variant="body2">Asetukset</Typography>
      <Typography className={classes.text} variant="body2">Sivun ylävalikosta löytyvät seuraavat asetukset:</Typography>
      <Typography className={classes.text} variant="body2">
        <strong>Esteettömyysasetuksista </strong>
        voit valita itsellesi sopivimmat asetukset
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Aistirajoitteet (voi valita yhden tai useamman):</Typography>
          <ul>
            <li><Typography variant="body2">käytän kuulolaitetta</Typography></li>
            <li><Typography variant="body2">olen näkövammainen</Typography></li>
            <li><Typography variant="body2">minun on vaikea erottaa värejä</Typography></li>
          </ul>
        </li>
        <li>
          <Typography variant="body2">Liikkumisrajoitteet (ovat toisensa poissulkevia):</Typography>
          <ul>
            <li><Typography variant="body2">käytän pyörätuolia</Typography></li>
            <li><Typography variant="body2">olen liikkumisesteinen</Typography></li>
            <li><Typography variant="body2">käytän rollaattoria</Typography></li>
            <li><Typography variant="body2">työnnän rattaita</Typography></li>
          </ul>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Jos valitset jonkin esteettömyysasetuksen, hakemasi toimipistesivu näyttää
        sinulle esimerkiksi, miten pääset rollaattorilla toimipisteeseen, ja mitkä
        ovat mahdolliset esteet siellä.
      </Typography>
      <Typography component="h4" variant="body2">Karttapohjan asetukset</Typography>
      <Typography className={classes.text} variant="body2">Palvelun karttapohjavaihtoehdot ovat</Typography>
      <ul>
        <li><Typography variant="body2">palvelukartta</Typography></li>
        <li><Typography variant="body2">suurikontrastinen kartta</Typography></li>
      </ul>
      <Typography component="h3" variant="body2">Palaute</Typography>
      <Typography className={classes.text} variant="body2">
        Kiitämme kaikesta palautteesta, joka auttaa meitä kehittämään Palvelukarttaa
        yhä paremmaksi. Yleistä karttaa koskevaa palautetta voit lähettää linkistä:
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/fi/Feedback/30/1127">
          www.turku.fi/palaute
        </Link>
        {' '}
        (linkki avautuu uudelle välilehdelle).
      </Typography>
      <Typography component="h3" variant="body2">Tiedot ja tekijänoikeudet</Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartta on rakennettu mahdollisimman paljon avointa dataa ja avointa
        lähdekoodia hyödyntäen. Kartan lähdekoodi löytyy GitHubista, ja sen
        jatkokehittäminen on toivottavaa.
      </Typography>
      <ul>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/servicemap-ui/">
            <Typography className={classes.link} variant="body2">Sovelluksen lähdekoodi</Typography>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/smbackend/">
            <Typography className={classes.link} variant="body2">Palvelinsovelluksen lähdekoodi</Typography>
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Karttatiedot haetaan avoimesta
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.openstreetmap.org/">
          OpenStreetMap
        </Link>
        {' '}
        -yhteisön tiedoista, ja niiden tekijänoikeus kuuluu OpenStreetMap-yhteisön kehittäjille.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartan tietoja voit käyttää vapaasti, lukuun ottamatta palvelussa käytettäviä
        valokuvia, jotka ovat tekijänoikeuden suojaamia ja joita ei saa käyttää ilman omistajan
        lupaa.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Turun kaupungin palvelujen tiedot löytyvät
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.turku.fi/palveluhakemisto">
          Turku.fi:n palveluhakemistosta
        </Link>
        {' '}
        sekä
        {' '}
        <Link target="_blank" className={classes.link} href="https://api.palvelutietovaranto.suomi.fi/swagger/ui/index.html">
          kansallisen palvelutietovarannon OUT-rajapinnasta
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        Turku.fi-verkkopalvelun rekisteriseloste kattaa myös palvelukartan tiedot
        {' '}
        <Link target="_blank" className={classes.link} href="https://rekisteri.turku.fi/Saabe_data/">
          Turun kaupungin rekisteriseloste-palvelussa
        </Link>
        {' '}
        , sillä se toimii tiedon lähteenä Turun palvelutiedoille.
      </Typography>
    </div>
  );

  const renderFinnishA11y = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Saavutettavuusseloste</Typography>
      <Typography className={classes.text} variant="body2">
        Tämä saavutettavuusseloste koskee Turun kaupungin palvelukartta
        -verkkopalvelua. Sivuston osoite on
        {' '}
        <Link target="_blank" className={classes.link} href="https://palvelukartta.turku.fi/">
          https://palvelukartta.turku.fi/
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        Saavutettavuusseloste on tehty alkujaan Helsingin kaupungin palvelukarttaan osoitteessa
        {' '}
        <Link target="_blank" className={classes.link} href=" https://palvelukartta.hel.fi">
           https://palvelukartta.hel.fi
        </Link>
        , jossa on samat toiminnallisuudet ja käyttöliittymä. Helsingin vastaava toteutus
        on arvioitu 27.1.2020.
      </Typography>
      <Typography component="h3" variant="body2">Digipalvelun saavutettavuuden tila</Typography>
      <Typography className={classes.text} variant="body2">
        Tämä verkkosivusto täyttää lain asettamat kriittiset saavutettavuusvaatimukset
        WCAG v2.1 -tason AA mukaisesti seuraavin havaituin puuttein.
      </Typography>
      <Typography component="h4" variant="body2">Digipalvelun ei-saavutettava sisältö</Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartta.turku.fi sivusto on saavutettava siltä osin, kuin
        saavutettavuuslaki sitä edellyttää. Saavutettavuuslain ulkopuolella
        ovat kartat, joten tässä palvelussa oleva kartta ei ole saavutettava
      </Typography>
      <Typography component="h4" variant="body2">Puutteiden korjaus</Typography>
      <Typography className={classes.text} variant="body2">
        Karttanäkymää ei tehdä saavutettavaksi. Ruudunlukijalta kartta on
        piilotettu. Näppäimistöllä pääsee lähentämään ja loitontamaan karttaa,
        mutta ei pääse kartalla oleviin toimipisteeseen.
      </Typography>
      <Typography component="h3" variant="body2">Palvelukartalla esillä olevat tiedot</Typography>
      <Typography className={classes.text} variant="body2">
        Palvelukartalla esitettävät palvelutiedot tulevat turku.fi-verkkopalvelusta eli
        niitä voi hyödyntää osoitteessa
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.turku.fi/palveluhakemisto">
          https://www.turku.fi/palveluhakemisto
        </Link>
        {' '}
        linkki aukeaa uudessa ikkunassa.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Mainituista puutteista johtuen saavuttamatta jäävää sisältöä voi pyytää
        kaupungin asiakaspalvelupisteistä
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">Skanssin Monitorissa (Skanssinkatu 10, 20730 Turku) sekä </Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">kauppatorin Monitorissa (Aurakatu 8, 20100 Turku)</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Huomasitko saavutettavuuspuutteen digipalvelussamme?</Typography>
      <Typography className={classes.text} variant="body2">
        {`Kerro se meille ja teemme parhaamme puutteen korjaamiseksi
         `}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/fi/Feedback/87/1048 ">
          Anna saavutettavuuspalautetta verkkolomakkeella linkki aukeaa uudessa ikkunassa
        </Link>
      </Typography>
      <Typography component="h3" variant="body2">Valvontaviranomainen</Typography>
      <Typography className={classes.text} variant="body2">
        Jos huomaat sivustolla saavutettavuusongelmia, anna ensin palautetta
        sivuston ylläpitäjälle. Vastauksessa voi mennä 14 päivää. Jos et ole
        tyytyväinen saamaasi vastaukseen tai et saa vastausta lainkaan kahden
        viikon aikana, voit antaa palautteen Etelä-Suomen aluehallintovirastoon.
        Etelä-Suomen aluehallintoviraston sivulla kerrotaan tarkasti, miten
        valituksen voi tehdä ja miten asia käsitellään.
      </Typography>
      <Typography component="h4" variant="body2">Valvontaviranomaisen yhteystiedot</Typography>
      <Typography className={classes.text} variant="body2">
        {`Etelä-Suomen aluehallintovirasto
        Saavutettavuuden valvonnan yksikkö
        www.saavutettavuusvaatimukset.fi
        saavutettavuus(at)avi.fi
        puhelinnumero vaihde 0295 016 000`}
      </Typography>
      <Typography component="h3" variant="body2">Teemme Turun kaupungilla jatkuvasti työtä saavutettavuuden parantamiseksi</Typography>
      <Typography component="h4" variant="body2">Digipalveluistamme on tehty saavutettavuusarviointi</Typography>
      <Typography className={classes.text} variant="body2">
        Saavutettavuuden arvioinnissa on noudatettu Helsingin kaupungin työohjetta
        ja menetelmiä, jotka pyrkivät varmistamaan sivuston saavutettavuuden
        kaikissa työvaiheissa.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Saavutettavuus on tarkistettu käyttäen ohjelmallista saavutettavuustarkistusta
        sekä sivuston ja sisällön manuaalista tarkistusta. Ohjelmalliset tarkistukset
        on suoritettu käyttäen Google Chrome selaimen Lighthouse arviointityökalua,
        Deque Systems Inc. valmistamaa axe selainlaajennosta, sekä Siteimprove selainlaajennosta.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Arviointityökalujen raportoimat epäkohdat on tarkastettu ja tarvittaessa korjattu.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Ulkopuolisen asiantuntija-auditoinnin on suorittanut Annanpura Oy Auditointiraportti on
        ladattavissa osoitteesta:
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf">
          https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf
        </Link>
      </Typography>
      <Typography component="h4" variant="body2">Olemme sitoutuneet digipalveluiden saavutettavuuden parantamiseen</Typography>
      <Typography className={classes.text} variant="body2">
        Turun kaupungin saavutettavuusosaamista kehitetään suunnitelmallisesti
        ja määrätietoisesti. Kaupungin saavutettavuuden puitesopimustoimittajat
        tulevat arvioimaan kaupungin nykyiset verkkopalvelut. Arvioinnin
        perusteella palveluiden saavutettavuutta kehitetään lain vaatimalle tasolle.
        Uusien verkkopalveluiden kehittämisessä ja hankinnassa saavutettavuus
        huomioidaan alusta lähtien. Saavutettavuuskoulutusta järjestetään kaikille
        osapuolille, jotka osallistuvat verkkopalveluiden kehittämiseen ja niiden
        sisältöjen tuottamiseen. Kaupungissa on käynnissä projekti Saavutettavuuslain
        vaatimusten täyttäminen.
      </Typography>
      <Typography component="h4" variant="body2">Tarjoamme tukea käyttäjille joille digipalvelut eivät ole saavutettavissa</Typography>
      <Typography className={classes.text} variant="body2">
        Digitukea on mahdollista saada Turun kaupungin
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">asiointipisteistä Skanssin Monitorissa (Skanssinkatu 10, 20730 Turku) sekä</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">kauppatorin Monitorissa (Aurakatu 8, 20100 Turku) ja </Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">kirjastoissa</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Saavutettavuusselosteen päivittäminen</Typography>
      <Typography className={classes.text} variant="body2">
        Sivuston saavutettavuudesta huolehditaan jatkuvalla valvonnalla tekniikan tai
        sisällön muuttuessa, sekä määräajoin suoritettavalla tarkistuksella. Tätä
        selostetta päivitetään sivuston muutosten ja saavutettavuuden tarkistusten yhteydessä.
      </Typography>
      <Typography className={classes.text} variant="body2">
        {`Tämä verkkosivusto/sovellus on julkaistu
          23.09.2019/uusi toteutus on julkaistu 14.10.2020`}
      </Typography>
    </div>
  );

  const renderEnglishInfo = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Service Map and accessibility statement</Typography>
      <ButtonBase className={classes.linkButton} role="link" onClick={() => handleClick()}>
        <Typography color="inherit" variant="body2">The Service Map’s accessibility statement</Typography>
      </ButtonBase>
      <Typography component="h3" variant="body2"><FormattedMessage id="app.title" /></Typography>
      <Typography className={classes.text} variant="body2">
        On the Service Map, you can find the public services units of Turku and their
        services, such as schools, day care centres and health stations.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Planning information, 3D buildings, site layout plans, place names, etc.
        are available on the
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/IMS/en/Map">
          regional guide map
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        The Service Map started out as an open source application developed
        by the City of Helsinki, which is now being developed collaboratively.
      </Typography>

      {
        // Haku
      }
      <Typography component="h3" variant="body2">Search</Typography>
      {/* <Typography className={classes.text} variant="body2"> */}
      <Typography component="h4" variant="body2">On the Service Map, you can search for example:</Typography>
      <ul>
        <li><Typography variant="body2">health stations</Typography></li>
        <li><Typography variant="body2">schools</Typography></li>
        <li><Typography variant="body2">day care centres</Typography></li>
        <li><Typography variant="body2">indoor swimming pools</Typography></li>
        <li><Typography variant="body2">playing fields</Typography></li>
        <li><Typography variant="body2">libraries</Typography></li>
        <li><Typography variant="body2">youth centres</Typography></li>
        <li><Typography variant="body2">afternoon activities units</Typography></li>
        <li><Typography variant="body2">addresses.</Typography></li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Enter a word or the beginning thereof in the search field of the Service Map and
        you will receive search suggestions to choose from. Alternatively, you can also
        enter a complete word and then press the Search button or the enter key. If the
        search results are not to your liking, you can refine your search by clicking
        the ‘Refine search’ button. You can also search using a multi-word combination,
        for example ‘school French’.
      </Typography>
      <Typography className={classes.text} variant="body2">
        If you do not receive any search results, check the spelling. You can also
        try entering the address around which you are looking for a service or keywords,
        such as ‘sports hall’ or ‘Swedish day care centre’.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Use the x in the search field to clear your search.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Use the arrow button in the search field to return to the previous view.
      </Typography>
      <Typography component="h4" variant="body2">You can also sort the search results as follows:</Typography>
      <ul>
        <li><Typography variant="body2">best match first</Typography></li>
        <li><Typography variant="body2">alphabetical order, A–Ö</Typography></li>
        <li><Typography variant="body2">reversed alphabetical order Ö–A</Typography></li>
        <li><Typography variant="body2">most accessible first</Typography></li>
        <li><Typography variant="body2">closest first (requires you to give the Service Map permission to locate you)</Typography></li>
      </ul>
      <Typography component="h3" variant="body2">Address search</Typography>
      <Typography className={classes.text} variant="body2">
        You can also enter an address in the search field around which you want
        to look for services. The search will provide you with address suggestions
        as you type You can also enter a complete address.
      </Typography>
      <Typography component="h3" variant="body2">Services list</Typography>
      <Typography className={classes.text} variant="body2">
        The services list is available on the front page of the Service Map.
        You can access the services list by clicking the “Get to know the services
        using the Services list” button on the main page of the Service Map.
        Using the service tree of the services list, you can search for one
        or several service groups, such as libraries, maternity and child health
        clinics or general upper secondary schools. This way you can combine
        information from different subject matter areas. You can also deselect
        options.
      </Typography>
      <Typography component="h3" variant="body2">Settings</Typography>
      <Typography className={classes.text} variant="body2">In the upper menu of the page, you can find the following settings:</Typography>
      <Typography className={classes.text} variant="body2">
        <strong>Accessibility settings: </strong>
        select the settings relevant to you.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Hearing and sight: (you can select one or several):</Typography>
          <ul>
            <li><Typography variant="body2">I use a hearing aid</Typography></li>
            <li><Typography variant="body2">I am visually impaired</Typography></li>
            <li><Typography variant="body2">I have difficulty discerning colours.</Typography></li>
          </ul>
        </li>
        <li>
          <Typography variant="body2">Mobility impairments (mutually exclusive):</Typography>
          <ul>
            <li><Typography variant="body2">I use a wheelchair</Typography></li>
            <li><Typography variant="body2">I have reduced mobility</Typography></li>
            <li><Typography variant="body2">I use a rollator</Typography></li>
            <li><Typography variant="body2">I push a stroller.</Typography></li>
          </ul>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        If you select an accessibility setting, the service unit page shows you how
        you can access the unit that you searched for with a walker and potential
        obstacles on-site, for example.
      </Typography>
      <Typography component="h4" variant="body2">Background map settings</Typography>
      <Typography className={classes.text} variant="body2">The background maps available on the service are</Typography>
      <ul>
        <li><Typography variant="body2">the service map</Typography></li>
        <li><Typography variant="body2">a high-contrast map.</Typography></li>
      </ul>
      <Typography className={classes.text} variant="body2">
        You can change the background map in the settings.
      </Typography>
      <Typography className={classes.text} variant="body2">
        If you have chosen “I am visually impaired” or “I have color vision deficiency”
        in the accessibility settings, then the background map will automatically
        change into a high-contrast background map.
      </Typography>
      <Typography component="h3" variant="body2">Feedback</Typography>
      <Typography className={classes.text} variant="body2">
        We welcome all feedback that helps us develop and improve the Service Map.
        You can submit general feedback about the map service via the following link:
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/en/Feedback/30/1127">
          www.turku.fi/feedback
        </Link>
        {' '}
        (the link opens in a new tab).
      </Typography>
      <Typography component="h3" variant="body2">Data and copyrights</Typography>
      <Typography className={classes.text} variant="body2">
        The Service Map has been developed using open data and open APIs. The service is
        developed publicly as an open source code project. The Service Map’s UI
        application and the source codes of the back-end application are available
        on GitHub, and anyone interested is encouraged to contribute to its further development.
      </Typography>
      <ul>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/servicemap-ui/">
            <Typography className={classes.link} variant="body2">Source code for the UI application</Typography>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/smbackend/">
            <Typography className={classes.link} variant="body2">Source code for the back-end application</Typography>
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        The map data is retrieved from the data of the open
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.openstreetmap.org/">
          OpenStreetMap
        </Link>
        {' '}
        community, the copyright to which is owned by the developers of the OpenStreetMap community.
      </Typography>
      <Typography className={classes.text} variant="body2">
        The data of the Service Map can be freely used, with the exception of the photographs used
        in the service, which are protected by copyright and can only be used with the permission
        of their respective owners.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Information on the City of Turku’s services is available on the
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.turku.fi/en/service-directory">
          Turku.fi website’s service directory
        </Link>
        {' '}
        and via the
        {' '}
        <Link target="_blank" className={classes.link} href="https://api.palvelutietovaranto.suomi.fi/swagger/ui/index.html">
          Finnish Service Catalogue’s OUT API
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        The Turku.fi website’s personal data file description also covers
        the information on the Service Map on the
        {' '}
        <Link target="_blank" className={classes.link} href="https://rekisteri.turku.fi/Saabe_data/">
          City of Turku’s personal data file description service
        </Link>
        {' '}
        as it serves as a data source for Turku’s service information.
      </Typography>
    </div>
  );

  const renderEnglishA11y = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Accessibility statement</Typography>
      <Typography className={classes.text} variant="body2">
        This accessibility statement applies to the website Servicemap of the
        City of Turku. The site address is
        {' '}
        <Link target="_blank" className={classes.link} href="https://servicemap.turku.fi/">
          https://servicemap.turku.fi/
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        The accessibility statement is originally prepared for the Servicemap
        of the City of Helsinki,
        {' '}
        <Link target="_blank" className={classes.link} href="https://servicemap.hel.fi">
          https://servicemap.hel.fi
        </Link>
        . The two services have same functionalities and UI.
        Helsinki’s accessibility statement was prepared on January 27th, 2020.
      </Typography>
      <Typography component="h3" variant="body2">The Status of Web Accessibility of the Digital Service</Typography>
      <Typography className={classes.text} variant="body2">
        This website meets the statutory critical accessibility requirements in accordance with
        Level AA of the WCAG v2.1 with the following deficiencies
      </Typography>
      <Typography component="h4" variant="body2">The Non-Accessible Content of the Digital Service (according to the criteria of WCAG)</Typography>
      <Typography className={classes.text} variant="body2">
        The content mentioned below does not yet meet all of the statutory
        accessibility requirements.
      </Typography>
      <Typography className={classes.text} variant="body2">
        The map-based information is not accessible, but it does not prevent other usage and
        the addresses are also presented in text form. The map content is not covered by
        the applicable legislation.
      </Typography>
      <Typography component="h4" variant="body2">Correcting deficiencies</Typography>
      <Typography className={classes.text} variant="body2">
        The map view will stay as it is. The map is  hidden from screen reader. User with
        the keyboard can zoom in and out on the map but she/he cannot open place’s
        information on the map. The same information is in text format outside the map.
      </Typography>
      <Typography component="h3" variant="body2">The information of the Servicemap</Typography>
      <Typography className={classes.text} variant="body2">
        The service information of the Servicemap is originally published at the service
        directory at the address
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.turku.fi/en/service-directory">
          https://www.turku.fi/en/service-directory
        </Link>
        {' '}
        (the link will open to a new window).
      </Typography>
      <Typography className={classes.text} variant="body2">
        Due to these deficiencies, you can request the non-accessible content
        from city of Turku’s customer service centres
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">Monitori Skanssi  (Skanssinkatu 10, 20730 Turku)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">Monitori Market Square (Aurakatu 8, 20100 Turku)</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Did you notice a problem in the web accessibility of our digital service?</Typography>
      <Typography className={classes.text} variant="body2">
        {`Please tell us about it and we will do our best to fix the problem. 
        `}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/en/Feedback/87/1048 ">
          Please feel free to give feedback on the web accessibility of our digital service
          on this web form
        </Link>
      </Typography>
      <Typography component="h3" variant="body2">Supervisory Authority</Typography>
      <Typography className={classes.text} variant="body2">
        If you notice any problem in the web accessibility of the website,
        please first give feedback to us as the site provider. Please note
        that it may take 14 days to get an answer. If you are not happy
        with the answer you have received or you do not get any answer
        in the period of two weeks, you can make AVI Southern Finland
        a request for accessibility. Please learn on the website of
        AVI Southern Finland how to do a request and how the matter
        will be treated (in Finnish).
      </Typography>
      <Typography component="h4" variant="body2">Contact Information of the Supervisory Authority</Typography>
      <Typography className={classes.text} variant="body2">
        {`AVI Southern Finland 
        Web Accessibility Unit 
        www.saavutettavuusvaatimukset.fi (in Finnish and Swedish)
        Switchboard number 0295 016 000`}
      </Typography>
      <Typography component="h3" variant="body2">We work continuously to improve the web accessibility of the digital services</Typography>
      <Typography component="h4" variant="body2">The date on which the web accessibility of our digital services has been evaluated</Typography>
      <Typography className={classes.text} variant="body2">
        The working instruction and procedures of the City of Helsinki were followed when evaluating
        the accessibility of the site, with the aim of ensuring that websites are accessible in
        all stages of the work process. Accessibility was evaluated by means of an audit by a
        third-party expert as well as self-evaluation. Accessibility was evaluated using a
        programmatic accessibility auditing tool as well as by manually reviewing the site
        and content. Programmatic evaluations were carried out using the Lighthouse review
        tool in Google Chrome browser, the axe browser extension by Deque Systems Inc.
        and the Siteimprove browser extension.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Defects reported by the evaluation tools were reviewed and, if necessary, corrected.
      </Typography>
      <Typography className={classes.text} variant="body2">
        The third-party expert audit was carried out by Annanpura Ltd.
        The audit report can be downloaded at:
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf">
          https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf
        </Link>
        {' '}
        (in finnish).
      </Typography>
      <Typography component="h4" variant="body2">We are committed to improving the accessibility of digital service</Typography>
      <Typography className={classes.text} variant="body2">
        The accessibility know-how of the City of Turku’s employees is being developed in a
        systematic and purposeful manner. The City’s framework agreement suppliers of
        accessibility-related services assessed the City’s current online services.
        Based on the assessment, accessibility will be improved to the level required
        by law. Accessibility will be taken into account in the development and procurement
        of new online services. Accessibility training is organised for all parties who
        participate in developing online services and producing content for them. The City
        has an on-going project for fulfilling the requirements of the Act on the
        Provision of Digital Services.
      </Typography>
      <Typography className={classes.text} variant="body2">
        The Citizen Services Points of the City of Turku offer support to users who cannot access
        the digital services at
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">Monitori, Skanssi (Skanssinkatu 10, FI-20730 Turku, telephone +358 40 160 4556)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">Monitori, Skanssi Market Square (Aurakatu 8, FI-20100 Turku)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">City libraries</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Updating the accessibility statement</Typography>
      <Typography className={classes.text} variant="body2">
        When website technology or content changes, its accessibility must be ensured through
        constant monitoring and periodic checks. This statement will be updated in conjunction
        with website changes and accessibility evaluations.
      </Typography>
      <Typography className={classes.text} variant="body2">
        {`The date on which this website/application has been published 
          23.9.2019/The new version has been published 14.10.2020`}
      </Typography>
    </div>
  );

  const renderSwedishInfo = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Servicekarta och tillgänglighetsredogörelse</Typography>
      <ButtonBase className={classes.linkButton} role="link" onClick={() => handleClick()}>
        <Typography color="inherit" variant="body2">Tillgänglighetsredogörelse för servicekartan</Typography>
      </ButtonBase>
      <Typography component="h3" variant="body2"><FormattedMessage id="app.title" /></Typography>
      <Typography className={classes.text} variant="body2">
        På Servicekartan hittar du Åbo stads offentliga verksamhetsställen och service,
        exempelvis skolor, daghem och hälsostationer.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Bland annat planläggningsuppgifter, 3D-byggnader, tomtindelningar och uppgifter
        om namnskicket finns i
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/IMS/sv/Map">
          den regionala guidekartan
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        Servicekartan är en applikation med öppen källkod som ursprungligen tagits fram
        av Helsingfors stad och som utvecklas genom samarbete.
      </Typography>

      {
        // Haku
      }
      <Typography component="h3" variant="body2">Sökning</Typography>
      {/* <Typography className={classes.text} variant="body2"> */}
      <Typography component="h4" variant="body2">På servicekartan kan du söka exempelvis:</Typography>
      <ul>
        <li><Typography variant="body2">hälsostationer</Typography></li>
        <li><Typography variant="body2">skolor</Typography></li>
        <li><Typography variant="body2">daghem</Typography></li>
        <li><Typography variant="body2">simhallar</Typography></li>
        <li><Typography variant="body2">bollplaner</Typography></li>
        <li><Typography variant="body2">bibliotek</Typography></li>
        <li><Typography variant="body2">ungdomsgårdar</Typography></li>
        <li><Typography variant="body2">eftermiddagsverksamhetens verksamhetsställen</Typography></li>
        <li><Typography variant="body2">adresser</Typography></li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Skriv valfritt ord eller början av ordet i servicekartans sökfält. Tjänsten
        ger dig förslag av vilka du kan välja det lämpligaste.  Du kan också skriva
        hela sökordet och klicka på Sök eller tangenten Enter. Om du inte är nöjd med
        sökresultatet kan du begränsa sökningen genom att klicka på ”Precisera”.
        Du kan också söka med flera ord, t.ex. ”skola franska”.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Om du inte får lämpliga sökresultat, kolla rättstavningen.
        Ange nyckelord såsom ”idrottssal” eller ”svenskspråkigt daghem”.
      </Typography>
      <Typography className={classes.text} variant="body2">
        I sökfältet finns ett kryss med vilket du kan tömma sökningen.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Med pilen i servicekartans sökfält återvänder du till föregående vy.
      </Typography>
      <Typography component="h4" variant="body2">Du kan ordna sökresultaten enligt följande:</Typography>
      <ul>
        <li><Typography variant="body2">bästa träffen först</Typography></li>
        <li><Typography variant="body2">alfabetisk ordning, A–Ö</Typography></li>
        <li><Typography variant="body2">omvänd alfabetisk ordning, Ö–A</Typography></li>
        <li><Typography variant="body2">tillgängligast först</Typography></li>
        <li><Typography variant="body2">närmaste först (ge servicekartan tillstånd att lokalisera dig)</Typography></li>
      </ul>
      <Typography component="h3" variant="body2">Adressökning</Typography>
      <Typography className={classes.text} variant="body2">
        Du kan också söka med en adress där du vill hitta tjänster.
        Sökningen föreslår dig adresser. Du kan också
        skriva hela adressen.
      </Typography>
      <Typography component="h3" variant="body2">Servicekatalog</Typography>
      <Typography className={classes.text} variant="body2">
        Servicekatalogen finns på servicekartans första sida. I servicekatalogen
        finns ett träddiagram i vilket du kan söka en eller flera servicehelheter,
        såsom bibliotek, rådgivningsbyråer och gymnasieutbildning. På så sätt kan
        du kombinera uppgifter om olika ämnesområden. Du kan också ta bort dina val.
      </Typography>
      <Typography component="h3" variant="body2">Inställningar</Typography>
      <Typography className={classes.text} variant="body2">I sidans övre meny hittar du följande inställningar:</Typography>
      <Typography className={classes.text} variant="body2">
        Bland
        <strong> Tillgänglighetsinställningar </strong>
        kan du välja de inställningar som passar dig bäst
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Hörsel och syn (du kan välja ett eller flera):</Typography>
          <ul>
            <li><Typography variant="body2">jag använder hörapparat</Typography></li>
            <li><Typography variant="body2">jag är synskadad</Typography></li>
            <li><Typography variant="body2">jag har svårt att urskilja färger</Typography></li>
          </ul>
        </li>
        <li>
          <Typography variant="body2">Rörelsehinder (utesluter varandra):</Typography>
          <ul>
            <li><Typography variant="body2">jag använder rullstol</Typography></li>
            <li><Typography variant="body2">jag har rörelsehinder</Typography></li>
            <li><Typography variant="body2">jag använder rollator</Typography></li>
            <li><Typography variant="body2">jag går med barnvagn</Typography></li>
          </ul>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        Om du väljer tillgänglighetsinställningar visar sidan för det
        verksamhetsställe du sökt exempelvis hur du når stället med rollator
        och vilka eventuella hinder där finns.
      </Typography>
      <Typography component="h4" variant="body2">Kartunderlagets inställningar</Typography>
      <Typography className={classes.text} variant="body2">Tjänstens kartunderlag är följande:</Typography>
      <ul>
        <li><Typography variant="body2">servicekartan</Typography></li>
        <li><Typography variant="body2">karta med stora kontraster</Typography></li>
      </ul>
      <Typography component="h3" variant="body2">Respons</Typography>
      <Typography className={classes.text} variant="body2">
        Vi tackar för all respons som hjälper oss att göra servicekartan ännu bättre.
        Du kan ge allmän respons om kartan genom att klicka på länken
        {' '}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/sv/Feedback/30/1127">
          www.turku.fi/Feedbacktjansten
        </Link>
        {' '}
        (länken öppnas i en ny flik).
      </Typography>
      <Typography component="h3" variant="body2">Uppgifter och upphovsrätter</Typography>
      <Typography className={classes.text} variant="body2">
        Servicekartan har skapats genom att utnyttja så mycket öppna data och öppna gränssnitt
        som möjligt.  Källkoden för kartan är öppen i tjänsten GitHub, och det är önskvärt att
        den vidareutvecklas.
      </Typography>
      <ul>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/servicemap-ui/">
            <Typography className={classes.link} variant="body2">Applikationens källkod</Typography>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/City-of-Helsinki/smbackend/">
            <Typography className={classes.link} variant="body2">Serviceapplikationens källkod</Typography>
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="body2">
        {'Kartuppgifterna söks från tjänstens '}
        <Link target="_blank" className={classes.link} href="https://www.openstreetmap.org/">
          OpenStreetMap
        </Link>
        {' '}
        data, vars upphovsrätt tillhör tillverkarna av OpenStreetMap.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Servicekartans information kan fritt användas, förutom fotografier som
        skyddas av upphovsrätten och inte får användas utan ägarens tillstånd.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Uppgifter om Åbo stads tjänster finns i
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.turku.fi/sv/service-directory">
          servicekatalogen på Turku.fi
        </Link>
        {' '}
        samt
        {' '}
        <Link target="_blank" className={classes.link} href="https://api.palvelutietovaranto.suomi.fi/swagger/ui/index.html">
          OUT-gränssnittet för det nationella servicedatalagret
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        {'Registerbeskrivningen för webbtjänsten Turku.fi täcker också uppgifterna i servicekartan '}
        <Link target="_blank" className={classes.link} href="https://rekisteri.turku.fi/Saabe_data/">
          i Åbo stads registerbeskrivningstjänst
        </Link>
        , eftersom den fungerar som informationskälla för Åbo stads serviceuppgifter.
      </Typography>
    </div>
  );

  const renderSwedishA11y = () => (
    <div className={classes.textContainer}>
      <Typography component="h3" variant="body2">Tillgänglighetsutlåtande</Typography>
      <Typography className={classes.text} variant="body2">
        Detta tillgänglighetsutlåtande gäller Åbo stads webbplats Servicekarta. Webbplatsens
        adress är
        {' '}
        <Link target="_blank" className={classes.link} href="https://servicekarta.turku.fi">
          https://servicekarta.turku.fi
        </Link>
        .
      </Typography>
      <Typography className={classes.text} variant="body2">
        Tillgänglighetsutlåtandet har ursprungligen upprättats för Helsingfors stads
        servicekarta som har samma funktioner och användargränssnitt och finns på adressen
        {' '}
        <Link target="_blank" className={classes.link} href="https://palvelukartta.hel.fi">
          https://palvelukartta.hel.fi
        </Link>
        . Helsingfors stads motsva-righet har bedömts 27.1.2020.
      </Typography>
      <Typography component="h3" variant="body2">Digitjänstens tillgänglighet just nu</Typography>
      <Typography className={classes.text} variant="body2">
        Denna webbplats uppfyller lagstadgade kritiska tillgänglighetskrav
        enligt nivå AA i WCAG v2.1 med följande observerade brister.
      </Typography>
      <Typography component="h4" variant="body2">Digitjänstens icke-tillgängliga innehåll (enligt WCAG-kriterierna)</Typography>
      <Typography className={classes.text} variant="body2">
        Nedan angivet innehåll uppfyller ännu ej alla lagstadgade tillgänglighetskrav.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Webbplatsen palvelukartta.turku.fi är tillgänglig till den del som tillgänglighetslagen
        förutsätter. Utanför tillgänglighetslagen faller kartorna, vilket innebär att kartan
        som finns i denna tjänst inte är tillgänglig.
      </Typography>
      <Typography component="h4" variant="body2">Korrigering av brister</Typography>
      <Typography className={classes.text} variant="body2">
        Kartvyn görs inte tillgänglig. Kartan är gömd från skärmläsaren.
        Med tangentbordet kan du zooma in och ut på kartan, men kommer
        inte åt verksamhetsställena som visas på kartan.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Innehåll som inte kan nås på grund av nämnda brister kan begäras från
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">På Monitori i Skansen (Skansgatan 10, 20730 Åbo)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">På Monitori vid Salutorget (Auragatan 8, 20100 Åbo)</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Upptäckte du tillgänglighetsbrister i vår digitjänst?</Typography>
      <Typography className={classes.text} variant="body2">
        {`Berätta om det för oss så gör vi vårt bästa för att korrigera felet 
        Webbformulär
        `}
        <Link target="_blank" className={classes.link} href="https://opaskartta.turku.fi/eFeedback/sv/Feedback/87/1048 ">
          Ge feedback om tillgängligheten med detta webbformulär
        </Link>
      </Typography>
      <Typography component="h3" variant="body2">Tillsynsmyndigheten</Typography>
      <Typography className={classes.text} variant="body2">
        Om du upptäcker ett tillgänglighetsproblem på webbplatsen,
        ge feedback i första hand till oss d.v.s. vi som upprätthåller
        webbplatsen. Det kan dröja upp till 14 dagar innan du får svar.
        Om du är missnöjd med svaret eller inte får något svar alls efter
        två veckor, kan du göra en anmälan till Regionförvaltningsverket i Södra Finland (
        <Link target="_blank" className={classes.link} href="https://www.tillganglighetskrav.fi/dina-rattigheter/">
          https://www.tillganglighetskrav.fi/dina-rattigheter/
        </Link>
        ). På webbplatsen för Regionförvaltningsverket i Södra Finland finns
        noggranna instruktioner för hur man gör en anmälan och hur ärendet hanteras.
      </Typography>
      <Typography component="h4" variant="body2">Tillsynsmyndighetens kontaktuppgifter</Typography>
      <Typography className={classes.text} variant="body2">
        {`Regionförvaltningsverket i Södra Finland
          Enheten för tillgänglighetstillsyn
          www.tillgänglighetskrav.fi
          webbtillganglighet(at)rfv.fi
          telefonnummer växel 0295 016 000`}
      </Typography>
      <Typography component="h3" variant="body2">Vi jobbar kontinuerligt för bättre tillgänglighet</Typography>
      <Typography component="h4" variant="body2">Det har gjorts en tillgänglighetsbedömning av våra digitjänster</Typography>
      <Typography className={classes.text} variant="body2">
        Vid bedömning av tillgänglighet har följts Helsingfors stads arbetsanvisning
        och metoder som siktar till att säkerställa webbplatsens tillgänglighet i
        alla arbetsfaser. Tillgängligheten är kontrollerad genom revision av en extern
        expert samt som egen edömning. Tillgängligheten är kontrollerad med hjälp av
        automatisk tillgänglighetskontroll samt manuell kontroll av webbplatsen och
        innehållet. Automatiska kontroller har utförts med användning av bedömningsverktyget
        Lighthouse i webbläsaren Google Chrome, webbläsartillägget axe från Deque Systems
        Inc. samt webbläsartillägget Siteimprove.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Missförhållanden som bedömningsverktygen rapporterat har kontrollerats och vid
        behov korrigerats.
      </Typography>
      <Typography className={classes.text} variant="body2">
        Den externa expertrevisionen har utförts av Annanpura Oy Revisionsrapporten kan
        laddas ner från:
        {' '}
        <Link target="_blank" className={classes.link} href="https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf">
          https://www.hel.fi/static/liitteet-2019/Helsinki/Saavutettavuusselosteet/Palvelukartta-auditointiraportti.pdf
        </Link>
        {' '}
        (på finska).
      </Typography>
      <Typography component="h4" variant="body2">Vi har bundit oss till att förbättra tillgängligheten i digitjänsterna</Typography>
      <Typography className={classes.text} variant="body2">
        Åbo stads tillgänglighetskompetens utvecklas systematiskt och målmedvetet.
        Stadens avtalsleverantörer för tillgänglighet kommer att göra en bedömning
        av stadens nuvarande webbtjänster. På basen av bedömingen kommer
        tillgängligheten i tjänsterna utvecklas att motsvara de lagenliga kraven.
        Vid utveckling och anskaffning av nya webbtjänster tas tillgängligheten
        i beaktande från början. Alla parter som deltar i utvecklingen och
        innehållsproduktinen av webbtjänsterna blir utbildade i tillgänglighetsfrågor.
        I staden pågår projektet Uppfyllande av kraven i tillgänglighetslagen. Vi erbjuder
        stöd för användare som inte har tillgång till de digitala tjänsterna på Åbo stads
        servicepunkter:
      </Typography>
      <ul>
        <li>
          <Typography className={classes.text} variant="body2">På Monitori i Skansen (Skansgatan 10, 20730 Åbo)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">På Monitori vid Salutorget (Auragatan 8, 20100 Åbo)</Typography>
        </li>
        <li>
          <Typography className={classes.text} variant="body2">På stadens bibliotek</Typography>
        </li>
      </ul>
      <Typography component="h3" variant="body2">Uppdatering av tillgänglighetsutlåtande</Typography>
      <Typography className={classes.text} variant="body2">
        Webbplatsens tillgänglighet kontrolleras genom kontinuerlig tillsyn när tekniken
        eller innehållet förändras, samt granskning med regelbundna intervall. Detta
        utlåtande uppdateras i samband med ändringar av webbplatsen samt granskningar
        av tillgänglighet.
      </Typography>
      <Typography className={classes.text} variant="body2">
        {`Denna webbplats/plattform har publicerats
          23.09.2019/nuvarande service har publicerats 14.10.2020`}
      </Typography>
    </div>
  );

  const version = config.version || '';
  const commit = config.commit ? `${config.commit}` : '';
  const versionText = `Version: ${version} ${(config.version && config.commit) ? '-' : ''} ${commit}`;

  return (
    <div>
      <div className={classes.pageContainer}>
        {renderTitlebar()}
        {locale === 'fi' && (
          content === 'generalInfo'
            ? renderFinnishInfo()
            : renderFinnishA11y()
        )}
        {locale === 'en' && (
          content === 'generalInfo'
            ? renderEnglishInfo()
            : renderEnglishA11y()
        )}
        {locale === 'sv' && (
          content === 'generalInfo'
            ? renderSwedishInfo()
            : renderSwedishA11y()
        )}
        {
        config.version || config.commit
          ? (
            <Typography align="left" aria-hidden="true" className={classes.text}>{versionText}</Typography>
          ) : null
      }
      </div>
    </div>
  );
};

// Typechecking
InfoView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  locale: PropTypes.string.isRequired,
};

export default InfoView;
