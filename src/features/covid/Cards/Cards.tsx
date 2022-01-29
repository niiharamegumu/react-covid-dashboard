import { Grid, GridItem, Text } from "@chakra-ui/react";
import { VFC } from "react";
import CountUp from "react-countup";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

export const Cards: VFC = () => {
  const data = useSelector(selectData);
  return (
    <Grid
      templateColumns="repeat(3, 250px)"
      justifyContent="center"
      gap={10}
      textAlign="center"
    >
      <GridItem
        borderLeft="6px solid"
        borderColor="blue.500"
        p="10px"
        boxShadow="2px 2px 4px"
      >
        <Text>感染者数</Text>
        <CountUp
          start={0}
          end={data.confirmed.value}
          duration={1.5}
          separator=","
        />
      </GridItem>
      <GridItem
        borderLeft="6px solid"
        borderColor="green.500"
        p="10px"
        boxShadow="2px 2px 4px"
      >
        <Text>回復者数</Text>
        <CountUp
          start={0}
          end={data.recovered.value}
          duration={1.5}
          separator=","
        />
      </GridItem>
      <GridItem
        borderLeft="6px solid"
        borderColor="pink.500"
        p="10px"
        boxShadow="2px 2px 4px"
      >
        <Text>死者数</Text>
        <CountUp
          start={0}
          end={data.deaths.value}
          duration={1.5}
          separator=","
        />
      </GridItem>
    </Grid>
  );
};
