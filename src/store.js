import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCounterStore = create(persist((set) => (
  {

    // ------------- init values -------------- //

    // global
    count: 0,
    totalCount: 0,
    click: 1,
    cps: 0,
    tab: 1,
    percentalBoost: 1,
    clickBoost: 0,

    buildings: {
      1: {
        name: 'Bebé chiguire',
        cost: 15,
        cps: 0.1,
        amount: 0,
      },
      2: {
        name: 'Lechuga',
        cost: 100,
        cps: 1,
        amount: 0,
      },
      3: {
        name: 'Baño de espumas',
        cost: 1100,
        cps: 8,
        amount: 0,
      },
      4: {
        name: 'Meditación profunda',
        cost: 12000,
        cps: 47,
        amount: 0,
      },
      5: {
        name: 'Mutación genética',
        cost: 130000,
        cps: 260,
        amount: 0,
      },
      6: {
        name: 'Domar el fuego',
        cost: 1400000,
        cps: 1400,
        amount: 0,
      },
      7: {
        name: 'Educación basica',
        cost: 20000000,
        cps: 7800,
        amount: 0,
      },
      8: {
        name: 'Combate cercano',
        cost: 3300000000,
        cps: 44000,
        amount: 0,
      },
      9: {
        name: 'Pueblo',
        cost: 5100000000,
        cps: 260000,
        amount: 0,
      },
      10: {
        name: 'Ciudad',
        cost: 75000000000,
        cps: 1600000,
        amount: 0,
      },
    },

    mutations: {

      1: {
        name: "click doble",
        cost: 100,
        amount: 0,
      },
      2: {
        name: "30% extra cps",
        cost: 1000,
        amount: 0,
      },
      3: {
        name: "click x100",
        cost: 1000000,
        amount: 0,
      },
      4: {
        name: "tus clicks ahora escalan un 5% de tu cps",
        cost: 100000000,
        amount: 0,
      },
      5: {
        name: "click x1000",
        cost: 10000000000,
        amount: 0,
      },
    },

    // -------------- functions ----------------- //

    buyBuilding: (buildingId) => {
      set((state) => {
        const building = state.buildings[buildingId];

        // Check if enough clicks and building exists
        if (state.count >= building.cost && building) {
          const updatedBuildings = { ...state.buildings }; // Shallow copy

          // Update building cost and state values
          updatedBuildings[buildingId] = {
            ...building,
            cost: (building.cost * 1.15).toFixed(0), // Increase cost by 15%
            amount: building.amount + 1,
          };

          return {
            count: state.count - building.cost, // Deduct current cost
            cps: state.cps + building.cps * state.percentalBoost,
            buildings: updatedBuildings,
          };
        }

        // No change if insufficient clicks or building not found
        return state;
      });
    },

    buyMutation: (mutationId) => {
      set((state) => {
        const mutation = state.mutations[mutationId];

        // Check if enough clicks and building exists
        if (state.count >= mutation.cost && mutation) {
          const updatedMutations = { ...state.mutations }; // Shallow copy

          // Update building cost and state values
          updatedMutations[mutationId] = {
            ...mutation,
            cost: (mutation.cost * 100), // Increase cost by 15%
            amount: mutation.amount + 1,
          };

          if (mutationId == 1) {
            return {
              // click double
              click: state.click * 2,
              count: state.count - mutation.cost, // Deduct current cost
              mutations: updatedMutations,
            };
          } else if (mutationId == 2) {
            return {
              // 30% extra cps
              cps: state.cps * 1.3,
              percentalBoost: state.percentalBoost + 0.3,
              count: state.count - mutation.cost, // Deduct current cost
              mutations: updatedMutations,
            };
          } else if (mutationId == 3) {
            return {
              // click x100
              click: state.click * 100,
              count: state.count - mutation.cost, // Deduct current cost
              mutations: updatedMutations,
            };
          } else if (mutationId == 4) {
            // tus clicks ahora escalan un 5% de tu cps
            return {
              clickBoost: state.clickBoost + 0.05,
              count: state.count - mutation.cost, // Deduct current cost
              mutations: updatedMutations,
            };
          } else if (mutationId == 5) {
            // click x1000
            return {
              click: state.click * 1000,
              count: state.count - mutation.cost, // Deduct current cost
              mutations: updatedMutations,
            };
          }


        }

        // No change if insufficient clicks or building not found
        return state;
      });
    },

    addCps: () => set((state) => ({
      count: state.count + state.cps,
      totalCount: state.totalCount + state.cps
    })),



    addCounter: () => set((state) => ({
      count: state.count + state.click + (state.cps * state.clickBoost),
      totalCount: state.totalCount + state.click + (state.cps * state.clickBoost)
    })),

    changeWindow: (number) => set((state) => ({ tab: number }))
    ////
  }),
  {
    name: 'gameData',
    version: 6,
  storage: createJSONStorage(() => localStorage),
  }
));
