import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import DataJson from "./data.json";
import DataDaily from "./dataDaily.json";

const apiUrl = "https://covid19.mathdro.id/api";
type APIDATA = typeof DataJson;
type APIDATADAILY = typeof DataDaily;

type covidState = {
  data: APIDATA;
  country: string;
  dailiyData: APIDATADAILY;
};

const initialState: covidState = {
  data: DataJson,
  country: "",
  dailiyData: DataDaily,
};

export const fetchAsyncGet = createAsyncThunk("covid/get", async () => {
  const { data } = await axios.get<APIDATA>(apiUrl);
  return data;
});

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async () => {
    const { data } = await axios.get<APIDATADAILY>(`${apiUrl}/daily`);
    return data;
  }
);
export const fetchAsyncGetCountry = createAsyncThunk(
  "covid/getCountry",
  async (country: string) => {
    const { data } = await axios.get<APIDATA>(
      `${apiUrl}${country ? "/countries/" + country : ""}`
    );
    return { data, country };
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        dailiyData: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetCountry.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        country: action.payload.country,
      };
    });
  },
});

export const selectData = (state: RootState) => state.covid.data;
export const selectDailyData = (state: RootState) => state.covid.dailiyData;
export const selectCountry = (state: RootState) => state.covid.country;

export default covidSlice.reducer;
