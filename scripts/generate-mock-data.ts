import { Phase, Plot } from "@/types/firestore-types";

const phase = "ph2";

const START_BLOCK = 1;
const END_BLOCK = 6;

const RANDOM_PLOT_MIN = 8;
const RANDOM_PLOT_MAX = 16;

const MAX_PLOTS_MIN = 16;
const MAX_PLOTS_MAX = 20;

const maintenanceStatuses = ["good", "needs_care", "under_maintenance"];

const burialTypes = ["casket", "vault", "mausoleum"];

export async function generateFullData() {
  const data: Phase = {
    max_blocks: END_BLOCK,
    blocks: {},
  };

  for (let blockNum = START_BLOCK; blockNum <= END_BLOCK; blockNum++) {
    const blockKey = `block_${blockNum}`;

    const max_plots =
      Math.floor(Math.random() * (MAX_PLOTS_MAX - MAX_PLOTS_MIN + 1)) +
      MAX_PLOTS_MIN;

    const numPlots =
      Math.floor(Math.random() * (RANDOM_PLOT_MAX - RANDOM_PLOT_MIN + 1)) +
      RANDOM_PLOT_MIN;

    const plots: Record<string, Plot> = {};

    // ---- Generate plots with randomized status ----
    for (let plotNum = 1; plotNum <= max_plots; plotNum++) {
      const plotId = `${phase}_blk${blockNum}_plot_${plotNum}`;

      // Randomly decide whether the plot should be available or non-available
      const status =
        Math.random() > 0.5
          ? "available"
          : randomFrom(["reserved", "occupied"]);

      if (status === "available") {
        // ---- Available plot ----
        plots[plotId] = {
          grid_coordinates: randomGridCoordinate(),
          status,
          maintenance_status: "", // Empty for available
          owner: {
            sex: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            date_of_birth: "",
            address: "",
            phone: "",
            email: "",
            purchase_date: "",
            deed_number: "",
            notes: "",
          },
          deceased: {
            sex: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            date_of_birth: "",
            date_of_death: "",
            date_of_interment: "",
            burial_type: "",
            funeral_home: "",
            image: "",
            notes: "",
          },
        };
      } else {
        // ---- Non-available plot (reserved or occupied) ----
        const maintenance_status = randomFrom(maintenanceStatuses);
        const deceased = generateDeceased();
        const owner = generateOwner(deceased.last_name, deceased.middle_name);

        plots[plotId] = {
          grid_coordinates: randomGridCoordinate(),
          status,
          maintenance_status,
          owner,
          deceased,
        };
      }
    }

    // Add the block data to the main data structure
    data.blocks[blockKey] = {
      max_plots,
      plots,
    };
  }

  // Output the generated data
  console.log(JSON.stringify(data, null, 2));
}

// Shuffle array utility function
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// main helpers
// generate a deceased record (extends shared info)
function generateDeceased() {
  const base = generateInfo(new Date(1925, 0, 1), new Date(1975, 0, 1));

  const date_of_death = randomDate(
    new Date(1990, 0, 2),
    new Date(2024, 11, 31)
  );

  const [yr, mo, da] = date_of_death.split("-");
  const intermentStartDate = new Date(
    parseInt(yr),
    parseInt(mo) - 1,
    parseInt(da)
  );
  const intermentEndDate = new Date(
    intermentStartDate.getTime() + 7 * 86400000
  );

  const date_of_interment = randomDate(intermentStartDate, intermentEndDate);
  const burial_type = Math.random() > 0.2 ? randomFrom(burialTypes) : "";
  const funeral_home = Math.random() > 0.3 ? randomFrom(funeralHomes) : "";

  const randomImageIndex = Math.floor(Math.random() * 100);
  const image = `https://randomuser.me/api/portraits/med/${base.sex}/${randomImageIndex}.jpg`;
  const notes = "No additional notes.";

  return {
    ...base,
    date_of_death,
    date_of_interment,
    burial_type,
    funeral_home,
    image,
    notes,
  };
}

// generate an owner record (extends shared info)
function generateOwner(
  relativeLastName: null | string = null,
  relativeMiddleName: null | string = null
) {
  const base = generateInfo(
    new Date(1935, 0, 1),
    new Date(2000, 0, 1),
    relativeLastName,
    relativeMiddleName
  );

  return {
    ...base,
    address: `${Math.floor(Math.random() * 200) + 1} Sample St.`,
    phone: `+639${Math.floor(100000000 + Math.random() * 899999999)}`,
    email: `${Math.random().toString(36).substring(2, 7)}@mail.com`,
    purchase_date: randomDate(new Date(2020, 0, 1), new Date()),
    deed_number: `DN-${Math.floor(10000 + Math.random() * 90000)}`,
    notes: "No additional notes.",
  };
}

// sub-helpers
function generateInfo(
  dateRangeStart: Date,
  dateRangeEnd: Date,
  relativeLastName: null | string = null,
  relativeMiddleName: null | string = null
) {
  const sex = Math.random() > 0.5 ? "male" : "female";
  const first_name: string =
    sex === "male" ? randomFrom(maleFirstNames) : randomFrom(femaleFirstNames);
  const middle_name: string = relativeMiddleName
    ? Math.random() > 0.2
      ? relativeMiddleName
      : randomMiddleNames()
    : randomMiddleNames();
  const last_name: string = relativeLastName
    ? Math.random() > 0.1
      ? relativeLastName
      : randomFrom(lastNames)
    : randomFrom(lastNames);
  const date_of_birth = randomDate(dateRangeStart, dateRangeEnd);

  return {
    sex,
    first_name,
    middle_name,
    last_name,
    date_of_birth,
  };
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomMiddleNames(): string {
  return Math.random() > 0.5 ? randomFrom(middleNames) : randomInitials();
}

function randomInitials() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".";
}

function randomDate(start = new Date(1950, 0, 1), end = new Date(2005, 0, 1)) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const formattedDate = date.toISOString().split("T")[0];

  return formattedDate;
}

function randomGridCoordinate(): [number, number] {
  return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
}

const maleFirstNames = [
  "Juan",
  "Jose",
  "Luis",
  "Pedro",
  "Antonio",
  "Carlos",
  "Miguel",
  "Ramon",
  "Andres",
  "Ricardo",
  "Fernando",
  "Eduardo",
  "Jorge",
  "Emmanuel",
  "Francisco",
  "Roberto",
  "Adrian",
  "Gabriel",
  "Rafael",
  "Daniel",
  "Mario",
  "Diego",
  "Hector",
  "Salvador",
  "Leonardo",
  "Manuel",
  "Julio",
  "Victor",
  "Benjamin",
  "Felipe",
  "Nicolas",
  "Esteban",
  "Marco",
  "Elias",
  "Cristian",
  "Raul",
  "Tomas",
  "Alfonso",
  "Ernesto",
  "Sergio",
  "Oscar",
  "Jaime",
  "Rodrigo",
  "Ignacio",
  "Pablo",
  "Eduard",
  "Allan",
  "Cesar",
  "Noel",
  "Armando",
];

const femaleFirstNames = [
  "Maria",
  "Ana",
  "Carmen",
  "Lucia",
  "Isabella",
  "Elena",
  "Sofia",
  "Teresa",
  "Patricia",
  "Angela",
  "Rosario",
  "Beatriz",
  "Clarissa",
  "Daniela",
  "Gabriela",
  "Veronica",
  "Natalia",
  "Rosa",
  "Monica",
  "Bianca",
  "Camila",
  "Juliana",
  "Regina",
  "Lourdes",
  "Margarita",
  "Adriana",
  "Cecilia",
  "Ines",
  "Raquel",
  "Leticia",
  "Maricel",
  "Esperanza",
  "Victoria",
  "Josefina",
  "Emilia",
  "Consuelo",
  "Dolores",
  "Miranda",
  "Paulina",
  "Graciela",
  "Celina",
  "Elvira",
  "Clarita",
  "Bernadette",
  "Helena",
  "Amelia",
  "Cristina",
  "Marisol",
  "Carmina",
  "Evangeline",
];

const lastNames = [
  "Santos",
  "Reyes",
  "Cruz",
  "Bautista",
  "Gomez",
  "Torres",
  "Ramos",
  "Flores",
  "Garcia",
  "Fernandez",
  "Lopez",
  "Ramirez",
  "Mendoza",
  "Castro",
  "Dominguez",
  "Villanueva",
  "Delgado",
  "De Leon",
  "Navarro",
  "Aquino",
  "Aguilar",
  "Salazar",
  "Cabrera",
  "Espinosa",
  "Pascual",
  "Rivera",
  "Jimenez",
  "Santiago",
  "Velasco",
  "Villarreal",
  "Cortez",
  "Vergara",
  "Palma",
  "Ferrer",
  "Ortega",
  "Soriano",
  "Marquez",
  "Nolasco",
  "De Vera",
  "Fuentes",
  "Calderon",
  "Rosales",
  "Galvez",
  "Abad",
  "Alvarado",
  "Escobar",
  "Del Mundo",
  "Ocampo",
  "De Jesus",
  "Bartolome",
];

const middleNames = [
  "de la Cruz",
  "Reyes",
  "Santos",
  "Lopez",
  "Gomez",
  "Del Rosario",
  "Marquez",
  "Morales",
  "Torres",
  "Castillo",
  "Mercado",
  "Villanueva",
  "De Guzman",
  "Roxas",
  "Valencia",
  "Soriano",
  "Fuentes",
  "Dela Peña",
  "Cortez",
  "Delos Reyes",
  "Aguilar",
  "Rosales",
  "Navarro",
  "Mendoza",
  "Salazar",
  "De Vera",
  "Abad",
  "Ocampo",
  "Calderon",
  "Pascual",
  "Alcaraz",
  "Dela Cruz",
  "Bautista",
  "De Leon",
  "Ortega",
  "Magsaysay",
  "Serrano",
  "Del Mundo",
  "Ferrer",
  "Aquino",
];

const funeralHomes = [
  "St. Peter Chapel",
  "Heaven's Gate Mortuary",
  "Peaceful Rest",
  "Final Journey Inc.",
  "Eternal Light Memorial Homes",
  "San Lorenzo Funeral Services",
  "Grace Haven Memorial",
  "Divine Mercy Funeral Home",
  "Everlasting Peace Chapel",
  "Holy Cross Mortuary",
  "Tranquil Haven Funeral Services",
  "Restful Arms Memorial Homes",
  "Sacred Heart Memorial",
  "Golden Sunset Funeral Home",
  "Blessed Journey Mortuary",
  "Heavenly Path Chapel",
  "Faith Eternal Funeral Services",
  "Morning Star Memorial Homes",
  "Christ the King Mortuary",
  "Our Lady of Peace Funeral Home",
  "San Vicente Memorial Services",
  "Serenity Gardens Funeral Chapel",
  "St. Michael Funeral Home",
  "Guardian Angels Memorial Homes",
  "Light Eternal Funeral Services",
  "Ever Faithful Mortuary",
  "Divine Rest Memorial Chapel",
  "Perpetual Grace Funeral Home",
  "Celestial Rest Funeral Services",
  "Sacred Cross Memorial Chapel",
];
