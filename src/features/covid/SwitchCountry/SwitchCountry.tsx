import { ChangeEvent, VFC } from "react";
import { Select } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { fetchAsyncGetCountry } from "../covidSlice";

export const SwitchCountry: VFC = () => {
  const dispatch = useDispatch();

  const onChangeSelectCountry = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(fetchAsyncGetCountry(e.target.value));

  const countries = [
    "japan",
    "china",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ];
  return (
    <Select
      placeholder="国を選んでください"
      textTransform="capitalize"
      onChange={onChangeSelectCountry}
    >
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </Select>
  );
};
