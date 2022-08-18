import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),

  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    }
  },

  getters: {
    oddOrEven: (state) => {
      if(state.count%2 === 0) return "Even";
      else return "Odd";
    }
  },
  
})
