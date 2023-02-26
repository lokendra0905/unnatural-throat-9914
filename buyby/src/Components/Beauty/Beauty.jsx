import {
  Box,
  Flex,
  Text,
  Checkbox,
  Radio,
  RadioGroup,
  Grid,
  Heading,
  Spinner,
  Center,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Mens/Product";

function Beauty() {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sort, setSort] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://buyby-backend.onrender.com/beauty`, {
        params: {
          _sort: sort && "price",
          _order: sort,
          brand: brand,
          product_type: category,
        },
      })
      .then((res) => {
        setproducts(res.data);
        setLoading(false);
      });
  }, [category, brand, sort]);

  let clearFilters = () => {
    setCategory(null);
    setBrand(null);
  };
  return (
    <Box mt={10}>
      <Flex gap={20} padding="10">
        {/* Filters */}

        <Box maxW={250} position={"sticky"} top="0" left="0" w={"40%"}>
          <Heading fontSize={"2xl"} mb={5} textAlign={"left"}>
            Filters
          </Heading>
          <Box border={"1px dashed Gray"} p="7">
            <Text textAlign={"left"} mb={3} fontWeight={700} fontSize={"lg"}>
              Price
            </Text>

            <RadioGroup textAlign={"left"}>
              <Radio value="asc" onClick={(e) => setSort("asc")}>
                Low To High
              </Radio>
              <br />
              <Radio value="desc" onClick={(e) => setSort("desc")}>
                High To Low
              </Radio>
            </RadioGroup>
          </Box>
          <Box border={"1px dashed Gray"} p="7">
            <Text mb={3} fontWeight={700} fontSize={"lg"}>
              Categories
            </Text>
            <Flex direction="column">
              <Checkbox
                isChecked={category == "lipstick"}
                onChange={() => setCategory("lipstick")}
              >
                Lipstick
              </Checkbox>
              <Checkbox
                isChecked={category == "foundation"}
                onChange={() => setCategory("foundation")}
              >
                Foundation
              </Checkbox>
              <Checkbox
                isChecked={category == "eyeliner"}
                onChange={() => setCategory("eyeliner")}
              >
                Eyeliner
              </Checkbox>
              <Checkbox
                isChecked={category == "eyeshadow"}
                onChange={() => setCategory("eyeshadow")}
              >
                Eyeshadow
              </Checkbox>
              <Checkbox
                isChecked={category == "blush"}
                onChange={() => setCategory("blush")}
              >
                Blush
              </Checkbox>
            </Flex>
          </Box>

          <Box border={"1px dashed Gray"} p="7">
            <Text mb={3} fontWeight={700} fontSize={"lg"}>
              Brand
            </Text>
            <Flex direction="column">
              <Checkbox
                isChecked={brand == "revlon"}
                onChange={() => setBrand("revlon")}
              >
                REVLON
              </Checkbox>
              <Checkbox
                isChecked={brand == "colourpop"}
                onChange={() => setBrand("colourpop")}
              >
                COLOURPOP
              </Checkbox>
              <Checkbox
                isChecked={brand == "boosh"}
                onChange={() => setBrand("boosh")}
              >
                BOOSH
              </Checkbox>
              <Checkbox
                isChecked={brand == "marienatie"}
                onChange={() => setBrand("marienatie")}
              >
                MARIENATIE
              </Checkbox>
              <Checkbox
                isChecked={brand == "nudus"}
                onChange={() => setBrand("nudus")}
              >
                NUDUS
              </Checkbox>
            </Flex>

            <Button mt={5} onClick={() => clearFilters()}>
              Clear Filters
            </Button>
          </Box>
        </Box>
        {/* Products */}
        {loading ? (
          <Center m={"auto"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        ) : (
          <Box _hover={{ left: "-200px" }}>
            <Grid
              gap={10}
              templateColumns={{
                md: "repeat(3,1fr)",
                lg: "repeat(4,1fr)",
                sm: "repeat(2,1fr)",
              }}
            >
              {products.map((el, index) => {
                return <Product key={index} data={el} />;
              })}
            </Grid>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Beauty;
