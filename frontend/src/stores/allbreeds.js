import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    allbreeds: [],
  },
  // actions that trigger store mutation
  actions: {
    setAllBreeds:
      (breeds) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          setAllBreeds: breeds,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "all-breeds",
});

export const useAllBreeds = createHook(Store);
