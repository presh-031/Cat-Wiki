import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    currentBreed: "",
  },
  // actions that trigger store mutation
  actions: {
    setCurrentBreed:
      (breed) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          currentBreed: breed,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "current-breed",
});

export const useCurrentBreed = createHook(Store);
