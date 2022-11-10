import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    allBreeds: [],
  },
  // actions that trigger store mutation
  actions: {
    setCurrentBreed:
      (allBreeds) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          currentBreed: allBreeds,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "all-breeds",
});

export const useCurrentBreed = createHook(Store);
