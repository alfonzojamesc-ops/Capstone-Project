import { Timestamp } from "firebase/firestore";

export interface Deceased {
  // Firestore document ID
  first_name: string;
  middle_name?: string;
  last_name: string;
  date_of_birth: Timestamp; // ISO format (YYYY-MM-DD)
  date_of_death: Timestamp;
  date_of_interment: Timestamp;
  plot: string; // references Plot.id
  burial_type?: "casket" | "vault" | "mausoleum";
  funeral_home?: string;
  image?: string; // url
  notes?: string;
}

type Point = [number, number];

export interface Plot {
  grid_coordinates?: Point; // [x,y]
  status: "available" | "reserved" | "occupied";
  owner_id?: string;
  maintenance_status?: "good" | "needs_care" | "under_maintenance";
}

export interface Block {
  // user-gen docid i.e. Block_1
  max_plots: number;
  plots: Record<string, Plot>; // user-gen docid i.e. Plot_1
}

export interface Phase {
  // user-gen docid i.e. Phase_1A
  max_blocks: number;
  blocks: Record<string, Block>; // user-gen collectionid i.e. Block_1
}

export interface PlotOwner {
  plot: string; // references Plot.id
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

export interface UserAdmin {
  // Firestore document ID
  username: string;
  password_hash: string;
  last_login?: Timestamp;
}

export interface Task {
  title: string;
  description?: string;
  date_created: Timestamp;
  last_modified: Timestamp;
  date_due?: Timestamp;
  author: string; // references username
}

export interface TaskReservation {
  date_sent: Timestamp;
  author: {
    first_name: string;
    middle_name?: string;
    last_name: string;
    address?: string;
    phone?: string;
    email?: string;
  }; // input name
  target_plot: string;
}

export interface TaskAppointment {
  date_sent: Timestamp;
  author: {
    first_name: string;
    middle_name?: string;
    last_name: string;
    address?: string;
    phone?: string;
    email?: string;
  }; // input name
  date_specified: Timestamp;
  message: string;
}
