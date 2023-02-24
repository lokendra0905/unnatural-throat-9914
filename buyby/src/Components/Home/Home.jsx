import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.css";
import axios from "axios";
import banner1 from "../../Images/Banner1.gif";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import {
  Grid,
  GridItem,
  Box,
  Button,
  Img,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import MakeupBanner from "../../Images/MakeupBanner.png";
import TopOffers from "./TopOffers";
import { useEffect } from "react";

function Home() {
  return (
    <Box>
      {/* Banner Slider */}
      <Carousel interval={2000} className="slider">
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
      <Heading mt={10} mb="5" size={"lg"}>
        Shop By Categories
      </Heading>
      <Grid
        w={"85%"}
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

      {/* Image Banner */}
      <Box>
        <Image
          w="100%"
          mt={10}
          mb={8}
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe9e61b1e/images/Spring2023/xcat_easterhpgiftingzone_sp2_hb.jpg?yocs=s_"
        />
        <Grid
          w={"90%"}
          margin="auto"
          mb={10}
          templateColumns={{
            lg: "repeat(6, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(2,1fr)",
          }}
        >
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            mb={5}
            size="md"
          >
            TOP GIFTS PICKS
          </Button>
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            mb={5}
            size="md"
          >
            GIFT GETS
          </Button>
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            mb={5}
            size="md"
          >
            GIFTS UNDER $15
          </Button>
          <Button
            w="90%"
            mb={5}
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            GIFTS UNDER $30
          </Button>
          <Button
            w="90%"
            mb={5}
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            HOME DECORE
          </Button>
          <Button
            w="90%"
            mb={5}
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            ACCESSORIES
          </Button>
        </Grid>
      </Box>
      <Heading mt={15} mb={5} size="lg">
        LATEST IN BEAUTY & GROOMING
      </Heading>
      <Img w={"100%"} src={MakeupBanner} />
    </Box>
  );
}

export default Home;
