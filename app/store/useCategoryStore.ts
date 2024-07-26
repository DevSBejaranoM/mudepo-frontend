import { create } from "zustand"

type CategoryStore = {
  category: string
  setCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: "EQUIPOS",
  setCategory: (category) => set({ category }),
}))
