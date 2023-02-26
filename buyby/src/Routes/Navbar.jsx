import "./Navbar.css";
import {
  Box,
  Text,
  Image,
  Heading,
  HStack,
  Input,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import logo from "../Images/Logo.png";
import Cart from "./Cart";

function Navbar() {
  const { auth, setauth } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const btnRef = React.useRef();
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    if (Password === CPassword) {
      if (Password !== "" || CPassword !== "" || Email !== "") {
        toast({
          position: "top",
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsModalOpen(false);
        setauth(true);
      }
    } else if (Password !== CPassword) {
      toast({
        position: "top",
        title: "Error",
        description: "It Seems Your Password Didn't Match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (Password == "" || CPassword == "" || Email == "") {
      toast({
        position: "top",
        title: "Error",
        description: "Please Fill All The Fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <HStack shadow="lg" borderWidth="2px" gap={9} justify="space-around">
        <Box>
          <Link to="/">
            <Image src={logo} w="150px" />
          </Link>
        </Box>
        <HStack display={{ md: "none", lg: "flex", sm: "none" }} gap={9}>
          <Box className="dropdown">
            <Heading className="Menu-Items teal" fontWeight="500" size="md">
              <Link to="/Mens">Mens</Link>
            </Heading>
            <Box className="dropdown-content">
              <ul>
                <Text className="teal-hover">TopWear</Text>
                <Text className="hover-item">Tshirt</Text>
                <Text className="hover-item">Casual Shirts</Text>
                <Text className="hover-item">Formal Shirts</Text>
                <Text className="hover-item">Sweaters</Text>
                <Text className="hover-item">Jackets</Text>
                <Text className="hover-item">Blazers & Coats</Text>
                <Text className="hover-item">Suits</Text>
              </ul>
              <Divider color="red" w="10px" orientation="vertical" />
              <ul>
                <Text className="teal-hover">BottomWear</Text>
                <Text className="hover-item">Jeans</Text>
                <Text className="hover-item">Trousers</Text>
                <Text className="hover-item">Shorts</Text>
                <Text className="hover-item">Joggers</Text>
                <Text className="hover-item">Boxers</Text>
                <Text className="hover-item">SleepWear</Text>
                <Text className="hover-item">Track Pants</Text>
              </ul>
              <Divider orientation="vertical" />
              <ul>
                <Text className="teal-hover">FootWear</Text>
                <Text className="hover-item">Casual Shoes</Text>
                <Text className="hover-item">Sports Shoes</Text>
                <Text className="hover-item">Formal Shoes</Text>
                <Text className="hover-item">Sneakers</Text>
                <Text className="hover-item">Sandals</Text>
                <Text className="hover-item">Socks</Text>
                <Text className="hover-item">Flip Flops</Text>
              </ul>
            </Box>
          </Box>
          <Box className="dropdown">
            <Heading fontWeight="500" size="md">
              <Link className="Menu-Items pink" to="/Women">
                Women
              </Link>
            </Heading>
            <Box className="dropdown-content">
              <ul>
                <Text className="pink-hover">TopWear</Text>
                <Text className="hover-item">Tshirt</Text>
                <Text className="hover-item">Casual Shirts</Text>
                <Text className="hover-item">Formal Shirts</Text>
                <Text className="hover-item">Sweaters</Text>
                <Text className="hover-item">Jackets</Text>
                <Text className="hover-item">Blazers & Coats</Text>
                <Text className="hover-item">Suits</Text>
              </ul>
              <Divider color="red" w="10px" orientation="vertical" />
              <ul>
                <Text className="pink-hover">BottomWear</Text>
                <Text className="hover-item">Jeans</Text>
                <Text className="hover-item">Trousers</Text>
                <Text className="hover-item">Shorts</Text>
                <Text className="hover-item">Joggers</Text>
                <Text className="hover-item">Boxers</Text>
                <Text className="hover-item">SleepWear</Text>
                <Text className="hover-item">Track Pants</Text>
              </ul>
              <Divider orientation="vertical" />
              <ul>
                <Text className="pink-hover">FootWear</Text>
                <Text className="hover-item">Casual Shoes</Text>
                <Text className="hover-item">Sports Shoes</Text>
                <Text className="hover-item">Formal Shoes</Text>
                <Text className="hover-item">Sneakers</Text>
                <Text className="hover-item">Sandals</Text>
                <Text className="hover-item">Socks</Text>
                <Text className="hover-item">Flip Flops</Text>
              </ul>
            </Box>
          </Box>
          <Box className="dropdown">
            <Heading fontWeight="500" size="md">
              <Link className="Menu-Items yellow" to="/Beauty">
                Beauty
              </Link>
            </Heading>
            <Box className="dropdown-content">
              <ul>
                <Text className="yellow-hover">Makeup</Text>
                <Text className="hover-item">Lipstick</Text>
                <Text className="hover-item">Lip Gloss</Text>
                <Text className="hover-item">Lip Liner</Text>
                <Text className="hover-item">Eyleliner</Text>
                <Text className="hover-item">Kajal</Text>
                <Text className="hover-item">Foundation</Text>
                <Text className="hover-item">Primer</Text>
              </ul>
              <Divider color="red" w="10px" orientation="vertical" />
              <ul>
                <Text className="yellow-hover">SkinCare, Bath & Body</Text>
                <Text className="hover-item">Face Moisturiser</Text>
                <Text className="hover-item">Cleanser</Text>
                <Text className="hover-item">Sunscreen</Text>
                <Text className="hover-item">Fash Wash</Text>
                <Text className="hover-item">Body Lotion</Text>
                <Text className="hover-item">Body Scrub</Text>
                <Text className="hover-item">Perfume</Text>
              </ul>
              <Divider orientation="vertical" />
              <ul>
                <Text className="yellow-hover">HairCare</Text>
                <Text className="hover-item">Shampoo</Text>
                <Text className="hover-item">Conditioner</Text>
                <Text className="hover-item">Hair Cream</Text>
                <Text className="hover-item">Hair Oil</Text>
                <Text className="hover-item">Hair Gel</Text>
                <Text className="hover-item">Hair Color</Text>
                <Text className="hover-item">Hair Accessory</Text>
              </ul>
            </Box>
          </Box>
          <Box className="dropdown">
            <Heading fontWeight="500" size="md">
              <Link className="Menu-Items orange" to="/Kids">
                Kids
              </Link>
            </Heading>
            <Box className="dropdown-content">
              <ul>
                <Text className="orange-hover">TopWear</Text>
                <Text className="hover-item">Tshirt</Text>
                <Text className="hover-item">Casual Shirts</Text>
                <Text className="hover-item">Formal Shirts</Text>
                <Text className="hover-item">Sweaters</Text>
                <Text className="hover-item">Jackets</Text>
                <Text className="hover-item">Blazers & Coats</Text>
                <Text className="hover-item">Suits</Text>
              </ul>
              <Divider color="red" w="10px" orientation="vertical" />
              <ul>
                <Text className="orange-hover">BottomWear</Text>
                <Text className="hover-item">Jeans</Text>
                <Text className="hover-item">Trousers</Text>
                <Text className="hover-item">Shorts</Text>
                <Text className="hover-item">Joggers</Text>
                <Text className="hover-item">Boxers</Text>
                <Text className="hover-item">SleepWear</Text>
                <Text className="hover-item">Track Pants</Text>
              </ul>
              <Divider orientation="vertical" />
              <ul>
                <Text className="orange-hover">FootWear</Text>
                <Text className="hover-item">Casual Shoes</Text>
                <Text className="hover-item">Sports Shoes</Text>
                <Text className="hover-item">Formal Shoes</Text>
                <Text className="hover-item">Sneakers</Text>
                <Text className="hover-item">Sandals</Text>
                <Text className="hover-item">Socks</Text>
                <Text className="hover-item">Flip Flops</Text>
              </ul>
            </Box>
          </Box>
        </HStack>
        <Box w="30%">
          <Input
            bg="blackAlpha.100"
            w="100%"
            border="1px solid BlackAlpha.700"
            placeholder="Search for Products"
            size="lg"
          />
        </Box>
        <Box onClick={openModal} cursor={"pointer"}>
          <PersonIcon fontSize="medium" />
          <br />
          <Text size="md">{auth ? "My Profile" : "Sign In"}</Text>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton onClick={closeModal} />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    required
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    onChange={(e) => setCPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={handleLogin}
                  margin={"auto"}
                  colorScheme="blue"
                >
                  Register
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box cursor={"pointer"}>
          <FavoriteBorderIcon fontSize="medium" />
          <Text size="md">WishList</Text>
        </Box>
        <Box onClick={onOpen} cursor={"pointer"}>
          <ShoppingBagOutlinedIcon fontSize="medium" />
          <Text size="md">Cart</Text>
        </Box>
        {auth ? (
          <Cart
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          />
        ) : null}
      </HStack>
      <Box
        margin={"auto"}
        display={{ md: "flex", lg: "none", sm: "flex" }}
        gap={20}
      >
        <Box margin={"auto"} className="dropdown">
          <Heading className="Menu-Items teal" fontWeight="500" size="md">
            <Link to="/Mens">Mens</Link>
          </Heading>
          <Box className="dropdown-content">
            <ul>
              <Text className="teal-hover">TopWear</Text>
              <Text className="hover-item">Tshirt</Text>
              <Text className="hover-item">Casual Shirts</Text>
              <Text className="hover-item">Formal Shirts</Text>
              <Text className="hover-item">Sweaters</Text>
              <Text className="hover-item">Jackets</Text>
              <Text className="hover-item">Blazers & Coats</Text>
              <Text className="hover-item">Suits</Text>
            </ul>
            <Divider color="red" w="10px" orientation="vertical" />
            <ul>
              <Text className="teal-hover">BottomWear</Text>
              <Text className="hover-item">Jeans</Text>
              <Text className="hover-item">Trousers</Text>
              <Text className="hover-item">Shorts</Text>
              <Text className="hover-item">Joggers</Text>
              <Text className="hover-item">Boxers</Text>
              <Text className="hover-item">SleepWear</Text>
              <Text className="hover-item">Track Pants</Text>
            </ul>
            <Divider orientation="vertical" />
            <ul>
              <Text className="teal-hover">FootWear</Text>
              <Text className="hover-item">Casual Shoes</Text>
              <Text className="hover-item">Sports Shoes</Text>
              <Text className="hover-item">Formal Shoes</Text>
              <Text className="hover-item">Sneakers</Text>
              <Text className="hover-item">Sandals</Text>
              <Text className="hover-item">Socks</Text>
              <Text className="hover-item">Flip Flops</Text>
            </ul>
          </Box>
        </Box>
        <Box margin={"auto"} className="dropdown">
          <Heading fontWeight="500" size="md">
            <Link className="Menu-Items pink" to="/Women">
              Women
            </Link>
          </Heading>
          <Box className="dropdown-content">
            <ul>
              <Text className="pink-hover">TopWear</Text>
              <Text className="hover-item">Tshirt</Text>
              <Text className="hover-item">Casual Shirts</Text>
              <Text className="hover-item">Formal Shirts</Text>
              <Text className="hover-item">Sweaters</Text>
              <Text className="hover-item">Jackets</Text>
              <Text className="hover-item">Blazers & Coats</Text>
              <Text className="hover-item">Suits</Text>
            </ul>
            <Divider color="red" w="10px" orientation="vertical" />
            <ul>
              <Text className="pink-hover">BottomWear</Text>
              <Text className="hover-item">Jeans</Text>
              <Text className="hover-item">Trousers</Text>
              <Text className="hover-item">Shorts</Text>
              <Text className="hover-item">Joggers</Text>
              <Text className="hover-item">Boxers</Text>
              <Text className="hover-item">SleepWear</Text>
              <Text className="hover-item">Track Pants</Text>
            </ul>
            <Divider orientation="vertical" />
            <ul>
              <Text className="pink-hover">FootWear</Text>
              <Text className="hover-item">Casual Shoes</Text>
              <Text className="hover-item">Sports Shoes</Text>
              <Text className="hover-item">Formal Shoes</Text>
              <Text className="hover-item">Sneakers</Text>
              <Text className="hover-item">Sandals</Text>
              <Text className="hover-item">Socks</Text>
              <Text className="hover-item">Flip Flops</Text>
            </ul>
          </Box>
        </Box>
        <Box margin={"auto"} className="dropdown">
          <Heading fontWeight="500" size="md">
            <Link className="Menu-Items yellow" to="/Beauty">
              Beauty
            </Link>
          </Heading>
          <Box className="dropdown-content">
            <ul>
              <Text className="yellow-hover">Makeup</Text>
              <Text className="hover-item">Lipstick</Text>
              <Text className="hover-item">Lip Gloss</Text>
              <Text className="hover-item">Lip Liner</Text>
              <Text className="hover-item">Eyleliner</Text>
              <Text className="hover-item">Kajal</Text>
              <Text className="hover-item">Foundation</Text>
              <Text className="hover-item">Primer</Text>
            </ul>
            <Divider color="red" w="10px" orientation="vertical" />
            <ul>
              <Text className="yellow-hover">SkinCare, Bath & Body</Text>
              <Text className="hover-item">Face Moisturiser</Text>
              <Text className="hover-item">Cleanser</Text>
              <Text className="hover-item">Sunscreen</Text>
              <Text className="hover-item">Fash Wash</Text>
              <Text className="hover-item">Body Lotion</Text>
              <Text className="hover-item">Body Scrub</Text>
              <Text className="hover-item">Perfume</Text>
            </ul>
            <Divider orientation="vertical" />
            <ul>
              <Text className="yellow-hover">HairCare</Text>
              <Text className="hover-item">Shampoo</Text>
              <Text className="hover-item">Conditioner</Text>
              <Text className="hover-item">Hair Cream</Text>
              <Text className="hover-item">Hair Oil</Text>
              <Text className="hover-item">Hair Gel</Text>
              <Text className="hover-item">Hair Color</Text>
              <Text className="hover-item">Hair Accessory</Text>
            </ul>
          </Box>
        </Box>
        <Box margin={"auto"} className="dropdown">
          <Heading fontWeight="500" size="md">
            <Link className="Menu-Items orange" to="/Kids">
              Kids
            </Link>
          </Heading>
          <Box className="dropdown-content">
            <ul>
              <Text className="orange-hover">TopWear</Text>
              <Text className="hover-item">Tshirt</Text>
              <Text className="hover-item">Casual Shirts</Text>
              <Text className="hover-item">Formal Shirts</Text>
              <Text className="hover-item">Sweaters</Text>
              <Text className="hover-item">Jackets</Text>
              <Text className="hover-item">Blazers & Coats</Text>
              <Text className="hover-item">Suits</Text>
            </ul>
            <Divider color="red" w="10px" orientation="vertical" />
            <ul>
              <Text className="orange-hover">BottomWear</Text>
              <Text className="hover-item">Jeans</Text>
              <Text className="hover-item">Trousers</Text>
              <Text className="hover-item">Shorts</Text>
              <Text className="hover-item">Joggers</Text>
              <Text className="hover-item">Boxers</Text>
              <Text className="hover-item">SleepWear</Text>
              <Text className="hover-item">Track Pants</Text>
            </ul>
            <Divider orientation="vertical" />
            <ul>
              <Text className="orange-hover">FootWear</Text>
              <Text className="hover-item">Casual Shoes</Text>
              <Text className="hover-item">Sports Shoes</Text>
              <Text className="hover-item">Formal Shoes</Text>
              <Text className="hover-item">Sneakers</Text>
              <Text className="hover-item">Sandals</Text>
              <Text className="hover-item">Socks</Text>
              <Text className="hover-item">Flip Flops</Text>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
