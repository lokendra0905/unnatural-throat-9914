import { Box, Image, Badge, Button, Img, useToast } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState, useContext } from "react";
import { json } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthContext";
let cartData = JSON.parse(localStorage.getItem("Cart")) || [];
function Product({ data }) {
  const { auth, cartItems, setCart } = useContext(AuthContext);
  const toast = useToast();
  const handleCart = () => {
    if (auth) {
      let flag = true;
      data.quantity = 1;
      cartItems.forEach((el) => {
        if (el.id == data.id) {
          return (flag = false);
        }
      });
      if (flag) {
        cartItems.push(data);
        toast({
          position: "top",
          title: "Added Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Item Already In Cart",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        position: "top",
        title: "Please Login To Buy",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
  data.rating = Math.floor(Math.random() * 5) + 1;
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Img
        boxSize={300}
        src={data.facetGroupings ? "https://" + data.image : data.image}
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            textAlign={"left"}
            noOfLines={1}
          >
            {data.brand}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          textAlign={"left"}
          lineHeight="tight"
          noOfLines={1}
        >
          {data.title}
        </Box>

        <Box fontWeight={500} fontSize={20} textAlign={"left"}>
          $ {data.price}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                fontSize={"sm"}
                key={i}
                color={i < data.rating ? "teal.500" : "gray.300"}
              />
            ))}
        </Box>
        <Box mt={5}>
          <Button
            w="90%"
            bg={"blackAlpha.800"}
            _hover={{
              color: "black",
              bg: "blackAlpha.100",
              border: "1px solid gray",
            }}
            color="white"
            size="md"
            onClick={handleCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Product;
