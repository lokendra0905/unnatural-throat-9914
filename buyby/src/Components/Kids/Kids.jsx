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

function Kids() {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [Gender, setGender] = useState(null);
  const [sort, setSort] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://buyby-backend.onrender.com/kids`, {
        params: {
          _sort: sort && "price",
          _order: sort,
          subType: Gender,
        },
      })
      .then((res) => {
        setproducts(res.data);
        setLoading(false);
      });
  }, [Gender, sort]);

  let clearFilters = () => {
    setGender(null);
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
                isChecked={Gender == "baby_boy"}
                onChange={() => setGender("baby_boy")}
              >
                Boys
              </Checkbox>
              <Checkbox
                isChecked={Gender == "baby_girl"}
                onChange={() => setGender("baby_girl")}
              >
                Girls
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

export default Kids;
