import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { VFC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../Cards/Cards";
import { Chart } from "../Chart/Chart";
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
import { PieChart } from "../PieChart/PieChart";
import { SwitchCountry } from "../SwitchCountry/SwitchCountry";

export const DashBoard: VFC = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <>
      <Flex justify="space-between">
        <Text as="h1">コロナウイルス全世界推移</Text>
        {data && (
          <Text as="p">{new Date(data.lastUpdate).toLocaleDateString()}</Text>
        )}
      </Flex>
      <SwitchCountry />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={8}>
          <Chart />
        </GridItem>
        <GridItem colSpan={4}>
          <PieChart />
        </GridItem>
        <GridItem colSpan={12}>
          <Cards />
        </GridItem>
      </Grid>
    </>
  );
};
