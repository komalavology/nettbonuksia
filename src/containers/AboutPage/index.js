import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AboutInner } from "./style";
import { Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Img from "../../assets/about.png";
import { Paragraph } from "../../components/typography";
import { SubBanner } from "../../components/subBanner";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <SubBanner heading="Meistä" />
      <AboutInner>
        <Container>
          <Grid container spacing={10}>
            <Grid md={6}>
              <img src={Img} alt="About us" />
            </Grid>
            <Grid md={6}>
              <h2>Meistä</h2>
              <Paragraph>
                Kiitos vierailustasi verkkosivuillamme, joka on Suomen suositun
                kasinohotellien lähde. Olemme koonneet luettelon maan parhaista
                kasinohotelleista, joista löytyy erinomaista ja viihdettä.
                Valikoimamme sisältää useita eri vaihtoehtoja, jotta löydät
                täydellisen istuvuuden. Olemme ylpeitä huolellisesta
                valintaprosessin prosessista, jotta kaikki listatut hotellit
                tarjoavat palvelut ja mukavuudet. Sivustomme tarjoaa kattavaa
                tietoa aiheesta kasinohotellin tarjota palveluista, kuten
                kasinopeleistä, ravintoloista, baareista ja uima-altaista.
                Lisäksi tarjoamme päivityksiä tarjosta hotellien järjestämistä
                tarjouksista ja tapahtumista. Ystävällinen ja ammattitaitoinen
                tiimimme on omistautunut tarjoamaan sinulle parhaan mahdollisen
                kokemuksen. Jos sinulla on tarvetta tai tarvitset apua,
                asiakaspalvelumme on aina tavoitettavissa sähköpostitse tai
                puhelimitse. Kiitos, että valitsit meidät Suomen parhaiden
                kasinohotellien resurssiksi, ja toivomme, että viihdyt!
              </Paragraph>
            </Grid>
          </Grid>
        </Container>
      </AboutInner>
      <Footer />
    </>
  );
};
