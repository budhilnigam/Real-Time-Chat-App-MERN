import { create } from "zustand";

export const useThemeStore = create((set:Function) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme:string) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));