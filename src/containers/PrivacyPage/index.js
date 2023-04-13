import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SubBanner } from "../../components/subBanner";
import { ContentWrapper } from "./style";
import { Paragraph } from "../../components/typography";
import { Container } from "@mui/material";

export const PrivacyPage = () => {
  return (
    <>
      <Header />
      <SubBanner heading="Nettbonuksian tietosuojakäytäntö" />
      <Container>
        <ContentWrapper>
          <h2>Nettbonuksian tietosuojakäytäntö</h2>
          <Paragraph>
            Nettbonuksialla, johon pääsee osoitteesta nettbonuksia.com, yksi
            tärkeimmistä prioriteeteistamme on vierailijoidemme yksityisyys.
            Tämä tietosuojakäytäntöasiakirja sisältää tietoja, joita
            nettbonuksia kerää ja tallentaa, ja kuinka käytämme niitä.
          </Paragraph>
          <Paragraph>
            Jos sinulla on lisäkysymyksiä tai tarvitset lisätietoja
            tietosuojakäytännöstämme, älä epäröi ottaa meihin yhteyttä. Tämä
            tietosuojakäytäntö koskee vain verkkotoimintaamme ja koskee
            verkkosivustomme vierailijoita niiden tietojen osalta, joita he
            jakavat ja/tai keräävät nettbonuksiassa. Tätä käytäntöä ei sovelleta
            tietoihin, jotka on kerätty offline-tilassa tai muiden kanavien kuin
            tämän verkkosivuston kautta.
          </Paragraph>
          <h2>Suostumus</h2>
          <ul>
            <li>
              Käyttämällä verkkosivustoamme hyväksyt tietosuojakäytäntömme ja
              sen ehdot.
            </li>
            <li>Keräämämme tiedot</li>
            <li>
              Henkilötiedot, jotka sinua pyydetään antamaan, ja syyt, miksi
              sinua pyydetään antamaan ne, ilmoitetaan sinulle, kun pyydämme
              sinua antamaan henkilötietosi.
            </li>
            <li>
              Jos otat meihin yhteyttä suoraan, saatamme saada sinusta
              lisätietoja, kuten nimesi, sähköpostiosoitteesi, puhelinnumerosi,
              meille lähettämäsi viestin ja/tai liitteiden sisältö ja kaikki
              muut tiedot, jotka voit antaa. Kun rekisteröidyt Tilille, voimme
              pyytää yhteystietojasi, mukaan lukien nimi, yrityksen nimi,
              osoite, sähköpostiosoite ja puhelinnumero.
            </li>
            <li>Kuinka käytämme tietojasi</li>
            <li>
              Käytämme keräämiämme tietoja eri tavoilla, mukaan lukien:
              <ul>
                <li>Tarjoamme, käytämme ja ylläpidämme verkkosivustoamme</li>
                <li>Paranna, personoi ja laajenna verkkosivustoamme</li>
                <li>Ymmärrä ja analysoi, kuinka käytät verkkosivustoamme</li>
                <li>
                  Kehitä uusia tuotteita, palveluita, ominaisuuksia ja
                  toimintoja
                </li>
                <li>
                  sinulle päivityksiä ja muita verkkosivustoon liittyviä tietoja
                  sekä markkinointi- ja myynninedistämistarkoituksia varten
                </li>
                <li>Lähetä sinulle sähköposteja</li>
                <li>Etsi ja estä petokset</li>
                <li>Lokitiedostot</li>
              </ul>
            </li>
            <li>
              nettbonuksia noudattaa vakiomenettelyä lokitiedostojen käytössä.
              Nämä tiedostot kirjaavat kävijöitä, kun he vierailevat
              verkkosivustoilla. Kaikki hosting-yritykset tekevät tämän ja osan
              hosting-palvelujen analytiikkaa. Lokitiedostojen keräämiä tietoja
              ovat IP-osoitteet, selaimen tyyppi, Internet-palveluntarjoaja
              (ISP), päivämäärä- ja aikaleima, viittaus-/poistumissivut ja
              mahdollisesti napsautusten määrä. Näitä ei ole linkitetty
              mihinkään tietoihin, jotka ovat henkilökohtaisesti
              tunnistettavissa. Tietojen tarkoitus on analysoida trendejä,
              hallinnoida sivustoa, seurata käyttäjien liikkumista sivustolla ja
              kerätä väestötietoja.
            </li>
          </ul>
          <h2>Evästeet ja verkkojäljitteet</h2>
          <Paragraph>
            Kuten mikä tahansa muu verkkosivusto, nettbonuksia käyttää
            "evästeitä". Näitä evästeitä käytetään tallentamaan tietoja, mukaan
            lukien vierailijoiden mieltymykset ja verkkosivuston sivut, joilla
            vierailija on käynyt tai vieraili. Tietoja käytetään optimoimaan
            käyttäjien käyttökokemusta räätälöimällä verkkosivumme sisältöä
            vierailijoiden selaintyypin ja/tai muiden tietojen perusteella.
          </Paragraph>
          <h2>Mainoskumppanimme</h2>
          <Paragraph>
            Jotkut sivustomme mainostajat voivat käyttää evästeitä ja
            jäljitteitä. Mainoskumppanimme on lueteltu alla. Jokaisella
            mainoskumppanillamme on oma tietosuojakäytäntönsä käyttäjätietoja
            koskeville käytännöilleen. Pääsyn helpottamiseksi olemme
            linkittäneet alla heidän tietosuojakäytäntöihinsä.
          </Paragraph>
          <h2>Google</h2>
          <Paragraph>
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </Paragraph>
          <h2>Advertising Partnersin tietosuojakäytännöt</h2>
          <ul>
            <li>
              Voit tutustua tähän luetteloon löytääksesi jokaisen nettbonuksian
              mainoskumppanin tietosuojakäytännön. Kolmannen osapuolen
              mainospalvelimet tai mainosverkostot käyttävät teknologioita,
              kuten evästeitä, JavaScriptiä tai verkkojäljitteitä, joita
              käytetään niiden vastaavissa mainoksissa ja nettbonuksiassa
              näkyvissä linkeissä, jotka lähetetään suoraan käyttäjien
              selaimeen. He saavat automaattisesti IP-osoitteesi, kun tämä
              tapahtuu. Näitä tekniikoita käytetään heidän mainoskampanjoidensa
              tehokkuuden mittaamiseen ja/tai vierailemillasi verkkosivustoilla
              näkemäsi mainossisällön personointiin.
            </li>
            <li>Kolmannen osapuolen tietosuojakäytännöt</li>
            <li>
              nettbonuksian tietosuojakäytäntö ei koske muita mainostajia tai
              verkkosivustoja. Suosittelemmekin sinua tutustumaan näiden
              kolmannen osapuolen mainospalvelimien tietosuojakäytäntöihin
              saadaksesi tarkempia tietoja. Se voi sisältää heidän käytäntöjään
              ja ohjeita siitä, kuinka tietyt vaihtoehdot poistetaan käytöstä.
            </li>
            <li>
              Voit poistaa evästeet käytöstä yksittäisten selaimesi asetusten
              kautta. Tarkempia tietoja evästeiden hallinnasta tietyillä
              verkkoselaimilla löydät selaimien vastaavilta verkkosivustoilta.
            </li>
            <li>CCPA:n tietosuojaoikeudet (älä myy henkilötietojani)</li>
            <li>
              CCPA:n mukaan Kalifornian kuluttajilla on muun muassa oikeus:
              <ul>
                <li>
                  Pyytää, että kuluttajan henkilötietoja keräävä yritys
                  paljastaa luokat ja tietyt henkilötiedot, joita yritys on
                  kerännyt kuluttajista.
                </li>
                <li>
                  Pyydä yritystä poistamaan kaikki yrityksen keräämät kuluttajaa
                  koskevat henkilötiedot.
                </li>
                <li>
                  Vaadi, että kuluttajan henkilötietoja myyvä yritys ei myy
                  kuluttajan henkilötietoja.
                </li>
                <li>
                  Jos teet pyynnön, meillä on kuukausi aikaa vastata sinulle.
                  Jos haluat käyttää jotakin näistä oikeuksista, ota meihin
                  yhteyttä.
                </li>
              </ul>
            </li>
            <li>GDPR:n tietosuojaoikeudet</li>
            <li>
              Haluamme varmistaa, että olet täysin tietoinen kaikista
              tietosuojaoikeuksistasi. Jokaisella käyttäjällä on oikeus
              seuraavaan:
              <ul>
                <li>
                  Oikeus tutustua – Sinulla on oikeus pyytää kopiot
                  henkilötiedoistasi. Saatamme veloittaa sinulta pienen maksun
                  tästä palvelusta.
                </li>
                <li>
                  Oikeus oikaisuun – Sinulla on oikeus pyytää, että korjaamme
                  kaikki tiedot, jotka uskot olevan virheellisiä. Sinulla on
                  myös oikeus pyytää, että täydennämme tiedot, jotka uskot
                  olevan puutteellisia.
                </li>
                <li>
                  Oikeus tietojen poistamiseen – Sinulla on oikeus pyytää, että
                  poistamme henkilötietosi tietyin edellytyksin.
                </li>
                <li>
                  Oikeus rajoittaa käsittelyä – Sinulla on oikeus pyytää meitä
                  rajoittamaan henkilötietojesi käsittelyä tietyin edellytyksin.
                </li>
                <li>
                  Oikeus vastustaa käsittelyä – Sinulla on oikeus vastustaa
                  henkilötietojesi käsittelyä tietyin edellytyksin.
                </li>
                <li>
                  Oikeus tietojen siirrettävyyteen – Sinulla on oikeus pyytää,
                  että siirrämme keräämämme tiedot toiselle organisaatiolle tai
                  suoraan sinulle tietyin edellytyksin.
                </li>
              </ul>
            </li>
            <li>
              Jos teet pyynnön, meillä on kuukausi aikaa vastata sinulle. Jos
              haluat käyttää jotakin näistä oikeuksista, ota meihin yhteyttä.
            </li>
          </ul>
          <h2>Lasten tiedot</h2>
          <Paragraph>
            Toinen osa prioriteettiamme on lasten suojan lisääminen Internetin
            käytön aikana. Kannustamme vanhempia ja huoltajia tarkkailemaan,
            osallistumaan ja/tai seuraamaan ja ohjaamaan heidän
            verkkotoimintaansa. nettbonuksia ei tietoisesti kerää
            henkilökohtaisia tunnistetietoja alle 13-vuotiailta lapsilta. Jos
            uskot lapsesi antaneen tällaisia tietoja verkkosivustollamme,
            kehotamme sinua ottamaan meihin yhteyttä välittömästi ja teemme
            parhaamme poistaaksemme tiedot viipymättä. tällaisia tietoja
            rekisteristämme.
          </Paragraph>
          <h2>Muutokset tähän tietosuojakäytäntöön</h2>
          <Paragraph>
            Saatamme päivittää tietosuojakäytäntöämme ajoittain. Siksi
            suosittelemme tarkistamaan tämän sivun säännöllisesti mahdollisten
            muutosten varalta. Ilmoitamme sinulle kaikista muutoksista
            julkaisemalla uuden tietosuojakäytännön tällä sivulla. Nämä
            muutokset tulevat voimaan heti, kun ne on julkaistu tällä sivulla.
            Tietosuojakäytäntömme luotiin Privacy Policy Generatorin avulla.
          </Paragraph>
          <h2>Ota meihin yhteyttä</h2>
          <Paragraph>Jos sinulla on kysyttävää tai ehdotuksia tietosuojakäytännöstämme, älä epäröi ottaa meihin yhteyttä.</Paragraph>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
};
