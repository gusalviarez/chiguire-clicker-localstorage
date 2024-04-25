import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCounterStore = create(persist((set) => (
  {

    // ------------- init values -------------- //

    // global
    count: 0,
    cps: 0,
    window: 1,

    buildings: {
      1: {
        name: 'Baby Chiguire',
        cost: 15,
        cps: 0.1,
        amount: 0,
      },
      2: {
        name: 'Comida',
        cost: 100,
        cps: 1,
        amount: 0,
      },
      3: {
        name: 'Mutaciones',
        cost: 1100,
        cps: 8,
        amount: 0,
      },
      4: {
        name: 'edificio 4',
        cost: 12000,
        cps: 47,
        amount: 0,
      },
      5: {
        name: 'edificio 5',
        cost: 130000,
        cps: 260,
        amount: 0,
      },
      6: {
        name: 'edificio 6',
        cost: 1400000,
        cps: 1400,
        amount: 0,
      },
      7: {
        name: 'edificio 7',
        cost: 20000000,
        cps: 7800,
        amount: 0,
      },
      8: {
        name: 'edificio 8',
        cost: 330000000,
        cps: 44000,
        amount: 0,
      },
      9: {
        name: 'edificio 9',
        cost: 5100000000,
        cps: 260000,
        amount: 0,
      },
      10: {
        name: 'edificio 10',
        cost: 75000000000,
        cps: 1600000,
        amount: 0,
      },
    },
    
    Mutations: {

      1: {
        name: "mutacion 1",
        cost: 100,
      },
      2: {
        name: "mutacion 2",
        cost: 200,
      },
      3: {
        name: "mutacion 3",
        cost: 300,
      },
      4 : {
        name: "mutacion 4",
        cost: 400,
      },
      5: {
        name: "mutacion 5",
        cost: 500,
      },
      6: {
        name: "mutacion 6",
        cost: 1200,
      },
      7: {
        name: "mutacion 7",
        cost: 1200,
      },
      8: {
        name: "mutacion 8",
        cost: 1300,
      },
      9: {
        name: "mutacion 9",
        cost: 1400,
      },
      10: {
        name: "mutacion 10",
        cost: 1500,
      },
      /*
      11: {
        name: "mutacion 11",
        cost: 2100,
      },
      12: {
        name: "mutacion 12",
        cost: 2200,
      },
      13: {
        name: "mutacion 13",
        cost: 2300,
      },
      14: {
        name: "mutacion 14",
        cost: 2400,
      },
      15: {
        name: "mutacion 15",
        cost: 2500,
      },
    */
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

    changeWindow: (number) => set((state) => ({window: number}))

    ////
  }),
  {
    name: 'gameData',
    storage: createJSONStorage(() => sessionStorage),
  }
));
