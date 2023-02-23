import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.css";
import banner1 from "../../Images/Banner1.gif";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import { Grid, GridItem, Img, Heading, Text } from "@chakra-ui/react";
import TopOffers from "./TopOffers";
function Home() {
  return (
    <div>
      {/* Banner Slider */}
      <Carousel fade className="slider">
        <Carousel.Item className="carousal-item">
          <img src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="carousal-item">
          <img src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="carousal-item">
          <img src={banner3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      {/* Categories */}
      <Heading mt={10} mb="5">
        Shop By Categories
      </Heading>
      <Grid
        w={"95%"}
        m="auto"
        templateColumns={{
          lg: "repeat(6, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw34f8792c/images/Spring2023/bc_cocoparadiseslf_sp2_vn.jpg?yocs=o_s_" />
          <Text>Shop Body Care</Text>
        </GridItem>
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw95a591a4/images/Spring2023/cndl_allcandles_sp2_vn.jpg?yocs=o_s_" />
          <Text>Shop Candles</Text>
        </GridItem>
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwef265ec0/images/Spring2023/diff_futureeden_sp2_vn.jpg?yocs=o_s_" />
          <Text>Shop Wallflowers</Text>
        </GridItem>
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw88c2003d/images/Spring2023/sp_futureedengentleclean_sp2_vn.jpg?yocs=o_s_" />
          <Text> Shop Hand Soaps</Text>
        </GridItem>
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb87836fc/images/Spring2023/bc_wellnessrebrandnatsoul_sp2_vn.jpg?yocs=o_s_" />
          <Text> Shop Wellness</Text>
        </GridItem>
        <GridItem border={"1px dashed grey"} w="100%">
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1633ce5d/images/Spring2023/bc_mens-refresh_sp1_vn.jpg?yocs=o_s_" />
          <Text>Shop Men's Shop</Text>
        </GridItem>
      </Grid>

      {/* Top Offers slider */}
      <TopOffers />
    </div>
  );
}

export default Home;
