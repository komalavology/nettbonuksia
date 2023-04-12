import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SubBanner } from "../../components/subBanner";
import { ContentWrapper } from "./style";
import { Paragraph } from "../../components/typography";

export const TermsPage = () => {
  return (
    <>
      <Header />
      <SubBanner heading="Käyttöehdot" />
      <ContentWrapper>
        <h2>Tervetuloa nettbonuksia!</h2>
        <Paragraph>
          Nämä ehdot määrittelevät nettbonuksia.com-sivuston käyttöä koskevat
          säännöt ja määräykset. Oletamme, että hyväksyt nämä ehdot, kun käytät
          tätä verkkosivustoa. Älä jatka nettbonuksian käyttöä, jos et hyväksy
          kaikkia tällä sivulla mainittuja ehtoja.
        </Paragraph>
        <Paragraph>
          Seuraava terminologia koskee näitä käyttöehtoja, tietosuojalausuntoa
          ja vastuuvapauslauseketta ja kaikkia sopimuksia: "Asiakas", "Sinä" ja
          "Sinun" viittaavat sinuun, henkilöön, joka on kirjautunut tälle
          verkkosivustolle ja noudattaa Yhtiön ehtoja. "Yhtiö", "Me itse", "Me",
          "Meidän" ja "Me" viittaavat yritykseemme. "Osapuoli", "Osapuolet" tai
          "Me" viittaa sekä Asiakkaaseen että meihin. Kaikki ehdot viittaavat
          tarjoukseen, hyväksymiseen ja maksun harkitsemiseen, jotka ovat
          tarpeen, jotta voimme suorittaa avun prosessin Asiakkaalle
          soveltuvimmalla tavalla nimenomaiseen tarkoitukseen vastatakseen
          asiakkaan tarpeisiin, jotka liittyvät Yhtiön ilmoittamien palvelujen
          tarjoamiseen. ja voimassa olevan fi-lain mukaan. Kaikki yllä olevan
          terminologian tai muiden sanojen käyttö yksikössä, monikkomuodossa,
          isoilla kirjaimilla ja/tai hän tai he ovat keskenään vaihdettavissa ja
          siten viittaavat samaan.
        </Paragraph>
        <h2>Keksit</h2>
        <Paragraph>
          Käytämme evästeiden käyttöä. Käyttämällä nettbonuksia hyväksyt
          evästeiden käytön nettbonuksian tietosuojakäytännön mukaisesti.
        </Paragraph>
        <Paragraph>
          Useimmat vuorovaikutteiset verkkosivustot käyttävät evästeitä, joiden
          avulla voimme hakea käyttäjän tiedot jokaisesta vierailusta.
          Verkkosivustomme käyttää evästeitä mahdollistaakseen tiettyjen
          alueiden toiminnallisuuden, mikä helpottaa verkkosivuillamme
          vierailevien ihmisten käyttöä. Jotkut kumppani-/mainoskumppanimme
          voivat myös käyttää evästeitä.
        </Paragraph>
        <h2>Lisenssi</h2>
        <Paragraph>
          Ellei toisin mainita, nettbonuksia ja/tai sen lisenssinantajat
          omistavat kaiken nettbonuksian materiaalin immateriaalioikeudet.
          Kaikki immateriaalioikeudet pidätetään. Voit käyttää tätä
          nettbonuksiasta omaan henkilökohtaiseen käyttöön näissä käyttöehdoissa
          asetettujen rajoitusten mukaisesti.
        </Paragraph>
        <h2></h2>
        <Paragraph></Paragraph>
      </ContentWrapper>
      <Footer />
    </>
  );
};
