import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    currentBreed: "",
  },
  // actions that trigger store mutation
  actions: {
    setCurrentBreed:
      (breedName) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          currentBreed: breedName,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "current-breed",
});

export const useCurrentBreed = createHook(Store);
