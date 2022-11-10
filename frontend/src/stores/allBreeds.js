import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    allBreeds: [],
  },
  // actions that trigger store mutation
  actions: {
    setAllBreeds:
      (allBreeds) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          allBreeds: allBreeds,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "all-breeds",
});

export const useAllBreeds = createHook(Store);
