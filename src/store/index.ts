import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    isSidebarOpen: true,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
