import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import dna from "../public/dna-svgrepo-com.svg"
import capy from "../public/capybara-clicker.svg"
import fish from "../public/fish-svgrepo-com.svg"

export const useCounterStore = create(persist((set) => (
  {

    // ------------- init values -------------- //

    // global
    count: 0,
    cps: 0,

    buildings: {
      1: {
        name: 'Baby Clicker',
        cost: 15,
        cps: 0.1,
        amount: 0,
      },
      2: {
        name: 'Small Farm',
        cost: 100,
        cps: 1,
        amount: 0,
      },
      3: {
        name: 'Auto Clicker',
        cost: 1000,
        cps: 10,
        amount: 0,
      },
    },

    // -------------- functions ----------------- //
    addCounter: () => set((state) => ({ count: state.count + 1 })),

    buyBuilding: (buildingId) => {
      set((state) => {
        const building = state.buildings[buildingId];

        // Check if enough clicks and building exists
        if (state.count >= building.cost && building) {
          const updatedBuildings = { ...state.buildings }; // Shallow copy

          // Update building cost and state values
          updatedBuildings[buildingId] = {
            ...building,
            cost: (building.cost * 1.15).toFixed(2), // Increase cost by 15%
            amount: building.amount + 1,
          };

          return {
            count: state.count - building.cost, // Deduct current cost
            cps: state.cps + building.cps,
            buildings: updatedBuildings,
          };
        }

        // No change if insufficient clicks or building not found
        return state;
      });
    },

    addCps: () => set((state) => ({ count: state.count + state.cps })),
  }),
  {
    name: 'gameData',
    storage: createJSONStorage(() => localStorage),
  }
));
