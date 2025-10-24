export interface Owner {
  sex: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  phone: string;
  email: string;
  purchase_date: string;
  deed_number: string;
  notes?: string;
}

export interface Deceased {
  sex: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: string;
  date_of_death: string;
  date_of_interment: string;
  burial_type?: string;
  funeral_home: string;
  image?: string;
  notes?: string;
}

export interface Plot {
  grid_coordinates: [number, number];
  status: string;
  maintenance_status: string;
  owner?: Owner;
  deceased?: Deceased;
}

export interface Block {
  max_plots: number;
  plots: Record<string, Plot>;
}

export interface Phase {
  max_blocks: number;
  blocks: Record<string, Block>;
}

export interface UserAdmin {
  // Firestore document ID
  username: string;
  password_hash: string;
  last_login?: string;
}

export interface Task {
  title: string;
  description?: string;
  date_created: string;
  last_modified: string;
  date_due?: string;
  author: string; // references username
}

export interface TaskReservation {
  date_sent: string;
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
  date_sent: string;
  author: {
    first_name: string;
    middle_name?: string;
    last_name: string;
    address?: string;
    phone?: string;
    email?: string;
  }; // input name
  date_specified: string;
  message: string;
}
