import { Box, Heading, Text, Button, Divider } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function TopOffers() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box p="7" bg={"blackAlpha.200"} mt={50}>
      <Heading size={"lg"} mb={5}>
        Today's Top Offers
      </Heading>
      <Carousel
        transitionDuration={1}
        keyBoardControl={true}
        infinite={true}
        swipeable={true}
        responsive={responsive}
      >
        <Box boxShadow="base" padding={5} bg={"whiteAlpha.400"}>
          <Text fontWeight={600} color={"teal.600"}>
            Limited time only!
          </Text>
          <Divider height={2} />
          <Text>All 3 Wick Candles</Text>

          <Text fontWeight={600} fontSize="lg">
            $13.95
          </Text>
          <Divider height={2} />
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            Shop
          </Button>
        </Box>

        <Box boxShadow="base" padding={5} bg={"whiteAlpha.400"}>
          <Text>All Full-Size Body Care</Text>
          <Divider height={2} />
          <Text>Lowest Priced item is free</Text>
          <Text fontWeight={600} fontSize="lg">
            Buy 3, Get 3 FREE
          </Text>
          <Divider height={2} />
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            Shop
          </Button>
        </Box>

        <Box boxShadow="base" padding={5} bg={"whiteAlpha.400"}>
          <Text>10 oz. Moxy Shampoo or <br /> Conditioner</Text>
          <Divider height={2} />
          <Text fontWeight={600} fontSize="lg">
            $13.95
          </Text>
          <Divider height={2} />
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            Shop
          </Button>
        </Box>

        <Box boxShadow="base" padding={5} bg={"whiteAlpha.400"}>
          <Text>Travel, Hand & Lip Care</Text>
          <Divider height={2} />
          <Text>Lowest Priced item is free</Text>
          <Text fontWeight={600} fontSize="lg">
            Buy 3, Get 3 FREE
          </Text>
          <Divider height={2} />
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{ color: "black", bg: "blackAlpha.100" }}
            color="white"
            size="md"
          >
            Shop
          </Button>
        </Box>
      </Carousel>
    </Box>
  );
}

export default TopOffers;
