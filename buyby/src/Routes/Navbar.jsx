import "./Navbar.css";
import {
  Box,
  Text,
  Image,
  Heading,
  VStack,
  HStack,
  Flex,
  Input,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import React from "react";
import logo from "../Images/Logo.png";

function Navbar() {
  return (
    <Box>
      <HStack shadow="lg" borderWidth="2px" gap={9} justify="space-around">
        <Box>
          <Link to="/">
            <Image src={logo} w="150px" />
          </Link>
        </Box>
        <HStack gap={9}>
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
        <Box>
          <PersonIcon fontSize="medium" />
          <br />
          <Text size="md">Profile</Text>
        </Box>
        <Box>
          <FavoriteBorderIcon fontSize="medium" />
          <Text size="md">WishList</Text>
        </Box>
        <Box>
          <ShoppingBagOutlinedIcon fontSize="medium" />
          <Text size="md">Cart</Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default Navbar;
