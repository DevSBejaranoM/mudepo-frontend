export interface Player {
  id: string;
  name: string;
  position: string;
  image: string;
  percentage: number;
  status?: "injured" | "yellow-card" | "red-card";
}

export interface Formation {
  name: string;
  positions: string[];
}
