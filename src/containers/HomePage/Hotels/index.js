import { Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import { HotelCard } from "../../../components/HotelCard";
import { Data } from "./data";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HotelsSec } from "./style";

export const Hotels = () => {
  //Owl Carousel Settings
  const options = {
    loop: false,
    items: 4,
    margin:10,
    autoplay: false,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
};
  return (
    <HotelsSec class="Hotels-sec">
      <Container>
        <OwlCarousel className='owl-theme card-carousel' {...options}>
        {Data?.map((item, index) => {
          return (
            <div className='item'>
              <HotelCard  data={item} key={index}/>
            </div>
          );
        })}
        </OwlCarousel>
      </Container>
    </HotelsSec>
  )
}
