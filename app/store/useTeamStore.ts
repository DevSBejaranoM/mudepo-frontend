import { create } from "zustand"

type TeamStore = {
  team: string
  setTeam: (team: string) => void
}

export const useTeamStore = create<TeamStore>((set) => ({
  team: "Inicio",
  setTeam: (team) => set({ team }),
}))
