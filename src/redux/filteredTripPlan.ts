import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type AirBnB = {
  id: string;
  name: string | undefined;
  hab: number;
  price: number;
  subTotal: number;
};

export type ChillOut = {
  id: string | undefined;
  name: string | undefined;
  subTotal: number;
  dateChill: string;
};

export type StartTrip = {
  dateStart: string;
  dateEnd: string;
};

type Route = {
  id: string;
  routeStart: string;
  routeEnd: string;
  routeDateStart: string;
  routeDateEnd: string;
  days: number;
  taxiPrice: number;
  totalAir: number;
  totalChill: number;
  totalRoute: number;
  airBnBs: AirBnB[];
  chillOuts: ChillOut[];
};

export type Client = {
  name: string;
  lastName: string;
  country: string;
  email: string;
};

type Trip = {
  reservationId: number;
  clientData: Client;
  tripDateStart: string;
  tripDateEnd: string;
  tripDays: number;
  totalAmount: number;
  routes: Route[];
};
type PlanTripState = {
  remaninedDays: number | undefined;
  postSuccessful: boolean;
  addedDays: any;
  destinations: string[];
  airBnB: AirBnB;
  chillOut: ChillOut;
  route: Route;
  trip: Trip;
};

type AddAirBnB = {
  airId: string;
  name: string | undefined;
  price: number;
  hab: number;
  subTotal: number;
};

const url = "http://localhost:9000/trips";

const saveTrip = async (trip: Trip) => {
  try {
    const response = await axios.post(url, trip);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const saveTripAsync = createAsyncThunk("trips/saveTripsAsync", saveTrip);

const initialState: PlanTripState = {
  remaninedDays: 0,
  postSuccessful: false,
  addedDays: 0,
  destinations: ["0-Airport"],
  airBnB: {
    id: "",
    name: "",
    hab: 0,
    price: 0,
    subTotal: 0,
  },
  chillOut: {
    id: "domino",
    name: "",
    subTotal: 0,
    dateChill: "",
  },
  route: {
    id: "",
    routeStart: "Airport",
    routeEnd: "",
    routeDateStart: new Date().toISOString().slice(0, 10),
    routeDateEnd: new Date().toISOString().slice(0, 10),
    days: 0,
    taxiPrice: 0,
    totalAir: 0,
    totalChill: 0,
    totalRoute: 0,
    airBnBs: [],
    chillOuts: [],
  },
  trip: {
    reservationId: 0,
    clientData: {
      name: "",
      lastName: "",
      country: "",
      email: "",
    },
    tripDateStart: new Date().toISOString().slice(0, 10),
    tripDateEnd: new Date().toISOString().slice(0, 10),
    tripDays: 0,
    totalAmount: 0,
    routes: [],
  },
};

const calculateDays = (day1: string, day2: string) => {
  const dateStart = new Date(day1);
  const dateEnd = new Date(day2);
  let one_day = 1000 * 60 * 60 * 24;
  let Result = Math.round((dateEnd.getTime() - dateStart.getTime()) / one_day);
  return Result;
};
const previousLocation = (ends: string[], id: string) => {
  const index = ends.indexOf(id);
  const previous = ends[index - 1];
  return previous;
};

export const filteredPlanTripSlice = createSlice({
  name: "filteredPlanTrip",
  initialState,
  reducers: {
    addStartTripDate: (state, action: PayloadAction<string>) => {
      state.trip.tripDateStart = action.payload;
      if (
        new Date(state.trip.tripDateEnd) > new Date(state.trip.tripDateStart)
      ) {
        state.trip.tripDays = calculateDays(
          state.trip.tripDateStart,
          state.trip.tripDateEnd,
        );
      }
    },
    addStartTrip: (state, action: PayloadAction<string>) => {
      state.trip.tripDateEnd = action.payload;
      state.trip.tripDays = calculateDays(
        state.trip.tripDateStart,
        state.trip.tripDateEnd,
      );
    },
    addTripEnd: (state, action: PayloadAction<string>) => {
      const routeNum = String(state.trip.routes.length + 1);
      state.route.id = `${routeNum}-${action.payload}`;
      state.route.routeEnd = action.payload;
      // array to save all the destinations so I can get previous location which is needed to calcultate taxi price
      state.destinations.push(state.route.id);
      state.route.routeStart = previousLocation(
        state.destinations,
        state.route.id,
      ).slice(2);
    },
    addRouteDateStart: (state, action: PayloadAction<string>) => {
      state.route.routeDateStart = action.payload;
      if (
        new Date(state.route.routeDateEnd) >
        new Date(state.route.routeDateStart)
      ) {
        state.route.days = calculateDays(
          state.route.routeDateStart,
          state.route.routeDateEnd,
        );
      }
    },
    addStartRoute: (state, action: PayloadAction<string>) => {
      state.route.routeDateEnd = action.payload;
      state.route.days = calculateDays(
        state.route.routeDateStart,
        state.route.routeDateEnd,
      );
      state.addedDays = state.addedDays + state.route.days;
      state.remaninedDays = state.trip.tripDays - state.addedDays;
    },
    addTaxiPrice: (state, action: PayloadAction<number>) => {
      state.route.taxiPrice = action.payload;
    },
    addAirBnB: (state, action: PayloadAction<AddAirBnB>) => {
      state.airBnB.id = action.payload.airId;
      state.airBnB.name = action.payload.name;
      state.airBnB.hab = action.payload.hab;
      state.airBnB.price = action.payload.price;
      state.airBnB.subTotal = action.payload.subTotal;
      // state.route.airBnBs.push(state.airBnB);
      state.route.airBnBs = [...state.route.airBnBs, state.airBnB];
      let sum = 0;
      state.route.airBnBs.forEach((item) => (sum += item.subTotal));
      state.route.totalAir = sum;
    },
    deleteAirBnB: (state, action: PayloadAction<string>) => {
      let newArray = state.route.airBnBs.filter((air) => {
        return air.id !== action.payload;
      });
      state.route.airBnBs = newArray;
    },
    addChillOut: (state, action: PayloadAction<ChillOut>) => {
      state.chillOut.id = action.payload.id;
      state.chillOut.name = action.payload.name;
      state.chillOut.dateChill = action.payload.dateChill;
      state.chillOut.subTotal = action.payload.subTotal;
      // state.route.chillOuts.push(state.chillOut);
      state.route.chillOuts = [...state.route.chillOuts, state.chillOut];
      let sum = 0;
      state.route.chillOuts.forEach((item) => (sum += item.subTotal));
      state.route.totalChill = sum;
    },
    deleteChill: (state, action: PayloadAction<string | undefined>) => {
      let newArray = state.route.chillOuts.filter((chill) => {
        return chill.id !== action.payload;
      });
      state.route.chillOuts = newArray;
    },
    addRoute: (state) => {
      state.route.totalRoute = state.route.totalChill + state.route.totalAir;
      state.trip.totalAmount =
        state.trip.totalAmount + state.route.totalRoute + state.route.taxiPrice;
      // state.trip.routes.push(state.route);
      state.trip.routes = [...state.trip.routes, state.route];
      state.route = initialState.route;
    },
    deleteRoute: (state, action: PayloadAction<string | undefined>) => {
      let newArray = state.trip.routes.filter((route) => {
        return route.id !== action.payload;
      });
      state.trip.routes = newArray;
    },
    editRoute: (state, action: PayloadAction<any>) => {
      state.route = action.payload;
    },
    commitChanges: (state) => {
      const id = state.route.id;
      let array = state.trip.routes.map((route) => {
        if (route.id === id) {
          route = state.route;
        }
        return route;
      });
      state.trip.routes = array;
      state.route = initialState.route;
    },
    addClient: (state, action: PayloadAction<Client>) => {
      state.trip.reservationId = Number(new Date());
      state.trip.clientData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveTripAsync.fulfilled, (state) => {
      state.postSuccessful = true;
    });
  },
});

export const {
  addStartTripDate,
  addStartTrip,
  addTripEnd,
  addRouteDateStart,
  addStartRoute,
  addRoute,
  addTaxiPrice,
  addAirBnB,
  deleteAirBnB,
  addChillOut,
  deleteChill,
  deleteRoute,
  editRoute,
  commitChanges,
  addClient,
} = filteredPlanTripSlice.actions;

export default filteredPlanTripSlice.reducer;
