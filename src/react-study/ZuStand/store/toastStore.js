import { create } from "zustand";

export const useToastStore = create((set) => {
  return {
    isVisible: false,
    message: "MyToast",
    showToast: (input) => set({isVisible: true, message: input }),
    hideToast: () => set({isVisible: false, message: ""}),
  }
})