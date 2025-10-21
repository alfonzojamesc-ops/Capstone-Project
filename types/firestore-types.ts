import { Vector2 } from "@react-three/fiber";
import { GeoPoint, Timestamp } from "firebase/firestore";

export interface Deceased {
  id: string; // Firestore document ID
  first_name: string;
  middle_name?: string;
  last_name: string;
  date_of_birth: Timestamp; // ISO format (YYYY-MM-DD)
  date_of_death: Timestamp;
  date_of_interment: Timestamp;
  plot_id: string; // references Plot.id
  burial_type?: "casket" | "vault" | "mausoleum";
  funeral_home?: string;
  notes?: string;
}

export interface Plot {
  phase: string;
  block: string;
  lot: string;
  id: string; // phase + block + lot
  map_coordinates?: GeoPoint;
  grid_coordinates?: number[][] | Vector2;
  status: "available" | "reserved" | "occupied";
  owner_id?: string; // references PlotOwner.id
  maintenance_status?: "good" | "needs_care" | "under_maintenance";
}

export interface PlotOwner {
  id: string; // Firestore document ID
  first_name: string;
  middle_name?: string;
  last_name: string;
  address?: string;
  phone?: string;
  email?: string;
  purchase_date: Timestamp; 
  deed_number?: string;
  notes?: string;
}

export interface Admin {
  id: string; // Firestore document ID
  username: string;
  password_hash: string;
  last_login?: Timestamp;
}
