const phase = "nph";

const START_BLOCK = 1;
const END_BLOCK = 16;

const RANDOM_PLOT_MIN = 8;
const RANDOM_PLOT_MAX = 20;

const MAX_PLOTS_MIN = 15;
const MAX_PLOTS_MAX = 30;

const statuses = ["available", "reserved", "occupied"];
const maintenanceStatuses = ["good", "needs_care", "under_maintenance"];

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
];

const burialTypes = ["casket", "vault", "mausoleum"];
const funeralHomes = [
  "St. Peter Chapel",
  "Heaven's Gate Mortuary",
  "Peaceful Rest",
  "Final Journey Inc.",
];

export async function generateFullData() {
  // main data structure
  const data = {
    max_blocks: END_BLOCK,
    blocks: {},
  };

  for (let blockNum = START_BLOCK; blockNum <= END_BLOCK; blockNum++) {
    const blockKey = `block_${blockNum}`;

    const max_plots =
      Math.floor(Math.random() * (MAX_PLOTS_MAX - MAX_PLOTS_MIN + 1)) +
      MAX_PLOTS_MIN;

    const numPlots = Math.min(
      Math.floor(Math.random() * (RANDOM_PLOT_MAX - RANDOM_PLOT_MIN + 1)) +
        RANDOM_PLOT_MIN,
      max_plots
    );

    const plots = {};

    for (let plotNum = 1; plotNum <= numPlots; plotNum++) {
      const plotId = `${phase}_blk${blockNum}_plot_${plotNum}`;
      const status = randomFrom(statuses);
      const maintenance_status = randomFrom(maintenanceStatuses);
      const deceased = generateDeceased();
      const owner = generateOwner(
        deceased.last_name,
        deceased.middle_name,
        deceased.sex
      );

      plots[plotId] = {
        grid_coordinates: randomGridCoordinate(),
        status,
        maintenance_status,
        owner,
        deceased,
      };
    }

    data.blocks[blockKey] = {
      max_plots,
      plots,
    };
  }

  console.log(JSON.stringify(data, null, 2));
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
  const burial_type = Math.random() > 0.2 ? randomFrom(burialTypes) : undefined;
  const funeral_home =
    Math.random() > 0.3 ? randomFrom(funeralHomes) : undefined;

  const randomImageIndex = Math.floor(Math.random() * 100);
  const image = `https://randomuser.me/api/portraits/med/${base.sex}/${randomImageIndex}.jpg`;
  const notes = Math.random() > 0.5 ? "No additional notes." : undefined;

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
  relativeMiddleName: null | string = null,
  relativeSex: null | string = null
) {
  const base = generateInfo(
    new Date(1935, 0, 1),
    new Date(2000, 0, 1),
    relativeLastName,
    relativeMiddleName,
    relativeSex
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
  relativeMiddleName: null | string = null,
  relativeSex: null | string = null
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

function randomGridCoordinate() {
  return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
}
