import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Img,
  Text,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";

function Cart({ ref, isOpen, placement, onClose, finalFocusRef }) {
  const toast = useToast();
  const { cartItems, setCart } = useContext(AuthContext);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(cartData);
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  }, [cartItems]);

  let incrementQunatity = (el) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === el.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(newCartItems);
  };

  let decrementQunatity = (el) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === el.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
    setCart(newCartItems);
  };

  let removeItem = (item) => {
    let newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCartItems);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const order = () => {
    toast({
      title: "Orderd Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setCart([]);
    onClose();
  };
  return (
    <Drawer size={"xl"} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Heading mt={5} textAlign={"center"}>
          Cart
        </Heading>

        <DrawerBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Description</Th>
                  <Th>size</Th>
                  <Th>Quantity</Th>
                  <Th>Remove</Th>
                  <Th isNumeric>SubTotal</Th>
                </Tr>
              </Thead>
              <Tbody maxWidth={10}>
                {cartItems.map((el, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        <Flex>
                          <Center>
                            <Img mr={3} boxSize={"20"} src={el.image} />
                            <Box>
                              <Text noOfLines={1}>
                                {el.title.substring(0, 20)}
                              </Text>
                              <Text
                                mt={2}
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                textAlign={"left"}
                              >
                                {el.brand.substring(0, 10)}
                              </Text>
                            </Box>
                          </Center>
                        </Flex>
                      </Td>
                      <Td>
                        <Center>{el.size}</Center>
                      </Td>
                      <Td>
                        <Center>
                          <Flex>
                            <Button
                              borderRadius={0}
                              bg={"blackAlpha.800"}
                              _hover={{
                                color: "black",
                                bg: "blackAlpha.100",
                                border: "1px solid gray",
                              }}
                              onClick={() => incrementQunatity(el)}
                              color="white"
                              // onClick={handleCart}
                            >
                              +
                            </Button>
                            <Button
                              className="quantity"
                              _hover={{
                                bg: "white",
                              }}
                              borderRadius={0}
                              bg={"none"}
                            >
                              {el.quantity}
                            </Button>
                            <Button
                              onClick={() => decrementQunatity(el)}
                              borderRadius={0}
                            >
                              -
                            </Button>
                          </Flex>
                        </Center>
                      </Td>
                      <Td>
                        <Button
                          borderRadius={0}
                          bg={"blackAlpha.800"}
                          _hover={{
                            color: "black",
                            bg: "blackAlpha.100",
                            border: "1px solid gray",
                          }}
                          color="white"
                          onClick={() => removeItem(el)}
                        >
                          Remove
                        </Button>
                      </Td>
                      <Td fontWeight={500}>
                        $ {parseInt(el.quantity * el.price)}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </DrawerBody>

        <DrawerFooter>
          <Text mr={250} fontWeight={500} textAlign={"left"}>
            Products : {cartItems.length}
          </Text>

          <Text mr={20} fontWeight={600} fontSize={20} textAlign={"left"}>
            Total Price : ${cartTotal}
          </Text>
          <Button onClick={order}>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
