import { Header } from "../../components/header";
import { Banner } from "./Banner";
import { Paragraph } from "../../components/typography";
import { TextSection } from "./style";
import { Container } from "@mui/material";
import { Hotels } from "./Hotels";
import Grid from "@mui/material/Unstable_Grid2";
import Img from "../../assets/img1.jpg"
import { Footer } from "../../components/footer";
export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TextSection>
        <Container>
          <h2>Suomen parhaat kasinohotellit</h2>
          <Paragraph>
            Tervehdys ja tervetuloa Suomen parhaiden kasinohotellien
            pääsivustolle! Niille, jotka etsivät rauhallista tapaa rentoutua,
            harvat asiat ovat verrattavissa kasinopelien nauttimiseen –
            edellyttäen, että pelaaminen suhtautuu tietysti vastuullisesti.
            Sivustomme tarjoaa kätevän ja tehokkaan tavan löytää optimaaliset
            kasinopaikat Suomessa sekä huippuluokan majoitus- ja
            viihdevaihtoehtoja. Lukuisia kasinoita on saatavilla kaikkialla
            maassa, joten olemme varmoja, että löydät ihanteellisen kohteen
            makuusi. Tutustu valikoimaamme, vertaa hintoja ja varaa
            vaivattomasti unelmiesi kasinohotelli loma meiltä. Tule kokemaan
            vertaansa vailla olevaa pelaamista ja tunnelmaa. Tee matkastasi
            unohtumaton Suomen parhaan kasinohotellisivuston avulla.
          </Paragraph>
        </Container>
      </TextSection>
      <Hotels />
      <TextSection className="text-sec">
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid md={6} textAlign={"right"}>
              <img src={Img} alt="Image" className="text-img"/>
            </Grid>
            <Grid md={6}>
              <h2>Tutustu Suomen hotellit parhaimpiin</h2>
              <Paragraph>
                Tutustu Suomen parhaimpiin kasinohotelleihin verkkosivuillamme.
                Selaa yksityiskohtaista tietoa eri hotellien tarjoamista
                palveluista, mukaan lukien jännittävät kasinopelit,
                huippuravintolat, trendikkäät baarit ja virkistävät uima-altaat.
                Pysy ajan tasalla viimeisimmistä tarjouksista ja hotellien
                järjestämistä tapahtumista vierailemalla sivustollamme. Jos
                tarvitset apua tai sinulla on kysyttävää, asiakaspalvelumme on
                tavoitettavissa sähköpostitse tai puhelimitse tarjotaksemme nopeaa
                ja luotettavaa tukea. Kiitos, että valitsit meidät oppaaksesi
                etsiessäsi täydellistä kasinohotellia. Toivotamme sinulle
                ikimuistoista ja nautinnollista matkaa!
              </Paragraph>
            </Grid>
          </Grid>
        </Container>
      </TextSection>
      <Footer/>
    </>
  );
};
