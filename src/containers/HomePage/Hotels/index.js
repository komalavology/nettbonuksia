import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { HotelCard } from "../../../components/HotelCard";
import { Data } from "./data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BrandsWrapper, HotelsSec, Address, Link } from "./style";
import Rating from "../../../assets/stars.png";
import { Paragraph } from "../../../components/typography";
export const Hotels = () => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    items: 4,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <HotelsSec className="Hotels-sec">
      <Container>
        {/* <OwlCarousel className="owl-theme card-carousel" {...options}>
          {Data?.map((item, index) => {
            return (
              <div className="item">
                <HotelCard data={item} key={index} />
              </div>
            );
          })}
        </OwlCarousel> */}
        <BrandsWrapper>
          <Container>
            {Data?.map((item, index) => {
              return (
                <div className="brand-row">
                <Grid container spacing={3} alignItems="center">
                  <Grid sm={3}  xs={6} >
                    <div>
                      <img src={item.brand} alt="Brand logo"/>
                      <img src={Rating} alt="Rating" className="stars"/>
                    </div>
                  </Grid>
                  <Grid sm={4} xs={6}>
                  < Address>
                        <b>Osoite:</b>
                        <Paragraph>{item?.address}</Paragraph>
                    </Address>
                  </Grid>
                  <Grid sm={2} xs={6}>
                    <div class="score-sec">
                        <p className="score">{item?.score}</p>
                        <p className="title">Meidän pisteemme</p>
                    </div>
                  </Grid>
                  <Grid md={3} textAlign="right">
                  <Link href={item?.link} className="more">Tietää enemmän</Link>
                  </Grid>
                </Grid>
                </div>
              );
            })}
          </Container>
        </BrandsWrapper>
      </Container>
    </HotelsSec>
  );
};
