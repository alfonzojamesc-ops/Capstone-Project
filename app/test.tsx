import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Test() {
  const [hover, setHover] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
        style={{
          backgroundColor: hover ? "gray" : "black",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={async () => {
          await uploadDeceasedData().catch(console.error);
        }}
      >
        <Text style={{ color: hover ? "black" : "white" }}>Hello World</Text>
      </Pressable>
    </View>
  );
}

async function generateDeceasedMockData() {
  const NUM_OF_BLOCKS = 16;
  const NUM_OF_PLOTS = 16;
  const NUM_RECORDS = 30; // 🔧 Number of deceased records to generate

  const firstNames = {
    male: ["Juan", "Jose", "Carlos", "Pedro", "Antonio"],
    female: ["Maria", "Ana", "Lucia", "Isabella", "Carmen"],
  };
  const middleNames = ["de la Cruz", "Reyes", "Santos", "Lopez", "Gomez"];
  const lastNames = ["Cruz", "Garcia", "Fernandez", "Torres", "Ramirez"];

  const burialTypes = ["casket", "vault", "mausoleum"] as const;
  const funeralHomes = [
    "St. Peter Chapel",
    "Heaven's Gate Mortuary",
    "Peaceful Rest",
    "Final Journey Inc.",
  ];

  const deceasedList: {
    first_name: string;
    middle_name?: string;
    last_name: string;
    date_of_birth: string;
    date_of_death: string;
    date_of_interment: string;
    plot: string;
    burial_type?: "casket" | "vault" | "mausoleum";
    funeral_home?: string;
    image: string;
    notes?: string;
  }[] = [];

  const plotChoices = ["nph", "ph1", "ph2"];

  function randomPlotId(): string {
    const phase = plotChoices[Math.floor(Math.random() * plotChoices.length)];
    const block = `blk${Math.ceil(Math.random() * NUM_OF_BLOCKS)}`;
    const plot = `plot_${Math.ceil(Math.random() * NUM_OF_PLOTS)}`;
    return `${phase}_${block}_${plot}`;
  }

  function randomDateString(start: Date, end: Date): string {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
  }

  for (let i = 0; i < NUM_RECORDS; i++) {
    const gender = Math.random() > 0.5 ? "male" : "female";
    const first_name =
      firstNames[gender][Math.floor(Math.random() * firstNames[gender].length)];
    const middle_name =
      Math.random() > 0.5
        ? middleNames[Math.floor(Math.random() * middleNames.length)]
        : undefined;
    const last_name = lastNames[Math.floor(Math.random() * lastNames.length)];

    const date_of_birth = randomDateString(
      new Date(1925, 0, 1), // ⬅️ Clamped to 1925
      new Date(2000, 0, 1)
    );
    const date_of_death = randomDateString(
      new Date(2000, 0, 2),
      new Date(2024, 11, 31)
    );

    // Interment: 0–7 days after death
    const intermentMin = new Date(date_of_death);
    const intermentMax = new Date(intermentMin.getTime() + 7 * 86400000);
    const date_of_interment = randomDateString(intermentMin, intermentMax);

    const plot = randomPlotId();
    const burial_type =
      Math.random() > 0.2
        ? burialTypes[Math.floor(Math.random() * burialTypes.length)]
        : undefined;
    const funeral_home =
      Math.random() > 0.3
        ? funeralHomes[Math.floor(Math.random() * funeralHomes.length)]
        : undefined;

    const randomImageIndex = Math.floor(Math.random() * 100); // 0–99
    const image = `https://randomuser.me/api/portraits/med/${gender}/${randomImageIndex}.jpg`;

    const notes = Math.random() > 0.5 ? "No additional notes." : undefined;

    deceasedList.push({
      first_name,
      middle_name,
      last_name,
      date_of_birth,
      date_of_death,
      date_of_interment,
      plot,
      burial_type,
      funeral_home,
      image,
      notes,
    });
  }

  console.log(
    "✅ Deceased mock data:\n",
    JSON.stringify(deceasedList, null, 2)
  );
}

async function uploadDeceasedData() {
  const deceasedRef = collection(db, "deceaseds");

  for (const deceased of deceasedList) {
    try {
      await addDoc(deceasedRef, deceased);
      console.log(`✅ Added: ${deceased.first_name} ${deceased.last_name}`);
    } catch (error) {
      console.error(
        `❌ Failed to add ${deceased.first_name} ${deceased.last_name}:`,
        error
      );
    }
  }

  console.log("🚀 Upload complete.");
}

const deceasedList = [
  {
    first_name: "Juan",
    middle_name: "Gomez",
    last_name: "Fernandez",
    date_of_birth: "1946-07-21",
    date_of_death: "2002-07-25",
    date_of_interment: "2002-07-27",
    plot: "ph1_blk3_plot_16",
    burial_type: "mausoleum",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/male/43.jpg",
  },
  {
    first_name: "Antonio",
    last_name: "Ramirez",
    date_of_birth: "1977-05-15",
    date_of_death: "2014-03-06",
    date_of_interment: "2014-03-12",
    plot: "nph_blk13_plot_9",
    burial_type: "casket",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/male/75.jpg",
  },
  {
    first_name: "Juan",
    last_name: "Torres",
    date_of_birth: "1934-03-17",
    date_of_death: "2009-01-28",
    date_of_interment: "2009-02-02",
    plot: "nph_blk11_plot_9",
    burial_type: "vault",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/36.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Juan",
    last_name: "Cruz",
    date_of_birth: "1981-07-28",
    date_of_death: "2024-04-01",
    date_of_interment: "2024-04-07",
    plot: "ph2_blk11_plot_15",
    burial_type: "mausoleum",
    funeral_home: "Heaven's Gate Mortuary",
    image: "https://randomuser.me/api/portraits/med/male/50.jpg",
  },
  {
    first_name: "Isabella",
    middle_name: "Santos",
    last_name: "Cruz",
    date_of_birth: "1988-04-29",
    date_of_death: "2012-11-23",
    date_of_interment: "2012-11-26",
    plot: "ph2_blk6_plot_13",
    funeral_home: "Heaven's Gate Mortuary",
    image: "https://randomuser.me/api/portraits/med/female/66.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Carmen",
    middle_name: "Lopez",
    last_name: "Ramirez",
    date_of_birth: "1961-09-10",
    date_of_death: "2017-11-18",
    date_of_interment: "2017-11-24",
    plot: "ph1_blk11_plot_4",
    burial_type: "vault",
    funeral_home: "St. Peter Chapel",
    image: "https://randomuser.me/api/portraits/med/female/14.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Jose",
    middle_name: "Lopez",
    last_name: "Cruz",
    date_of_birth: "1991-07-26",
    date_of_death: "2019-10-30",
    date_of_interment: "2019-11-01",
    plot: "ph1_blk9_plot_1",
    burial_type: "mausoleum",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/0.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Jose",
    middle_name: "Santos",
    last_name: "Ramirez",
    date_of_birth: "1983-07-18",
    date_of_death: "2014-07-27",
    date_of_interment: "2014-07-29",
    plot: "ph1_blk7_plot_9",
    funeral_home: "Heaven's Gate Mortuary",
    image: "https://randomuser.me/api/portraits/med/male/88.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Ana",
    middle_name: "Santos",
    last_name: "Cruz",
    date_of_birth: "1969-05-06",
    date_of_death: "2010-09-08",
    date_of_interment: "2010-09-14",
    plot: "ph1_blk13_plot_6",
    burial_type: "casket",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/female/92.jpg",
  },
  {
    first_name: "Lucia",
    last_name: "Fernandez",
    date_of_birth: "1959-11-17",
    date_of_death: "2004-11-08",
    date_of_interment: "2004-11-13",
    plot: "ph2_blk3_plot_6",
    burial_type: "vault",
    image: "https://randomuser.me/api/portraits/med/female/75.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Antonio",
    last_name: "Torres",
    date_of_birth: "1966-01-14",
    date_of_death: "2013-04-14",
    date_of_interment: "2013-04-16",
    plot: "ph1_blk8_plot_8",
    burial_type: "vault",
    funeral_home: "St. Peter Chapel",
    image: "https://randomuser.me/api/portraits/med/male/68.jpg",
  },
  {
    first_name: "Carlos",
    last_name: "Fernandez",
    date_of_birth: "1948-02-14",
    date_of_death: "2020-04-05",
    date_of_interment: "2020-04-06",
    plot: "nph_blk9_plot_12",
    burial_type: "mausoleum",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/28.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Carlos",
    last_name: "Torres",
    date_of_birth: "1987-09-20",
    date_of_death: "2002-02-09",
    date_of_interment: "2002-02-12",
    plot: "nph_blk14_plot_4",
    burial_type: "mausoleum",
    image: "https://randomuser.me/api/portraits/med/male/87.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Ana",
    last_name: "Cruz",
    date_of_birth: "1943-06-12",
    date_of_death: "2003-08-21",
    date_of_interment: "2003-08-25",
    plot: "nph_blk2_plot_1",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/female/65.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Maria",
    last_name: "Cruz",
    date_of_birth: "1957-10-18",
    date_of_death: "2000-07-26",
    date_of_interment: "2000-07-27",
    plot: "nph_blk2_plot_6",
    burial_type: "mausoleum",
    funeral_home: "Heaven's Gate Mortuary",
    image: "https://randomuser.me/api/portraits/med/female/87.jpg",
  },
  {
    first_name: "Carmen",
    last_name: "Fernandez",
    date_of_birth: "1925-09-29",
    date_of_death: "2001-06-23",
    date_of_interment: "2001-06-29",
    plot: "ph2_blk6_plot_2",
    funeral_home: "St. Peter Chapel",
    image: "https://randomuser.me/api/portraits/med/female/59.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Ana",
    middle_name: "Santos",
    last_name: "Fernandez",
    date_of_birth: "1947-07-21",
    date_of_death: "2009-01-03",
    date_of_interment: "2009-01-08",
    plot: "ph1_blk4_plot_16",
    image: "https://randomuser.me/api/portraits/med/female/74.jpg",
  },
  {
    first_name: "Juan",
    middle_name: "Reyes",
    last_name: "Fernandez",
    date_of_birth: "1932-06-12",
    date_of_death: "2018-03-01",
    date_of_interment: "2018-03-06",
    plot: "ph2_blk15_plot_3",
    burial_type: "vault",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/male/69.jpg",
  },
  {
    first_name: "Jose",
    middle_name: "de la Cruz",
    last_name: "Ramirez",
    date_of_birth: "1946-12-04",
    date_of_death: "2013-12-05",
    date_of_interment: "2013-12-06",
    plot: "ph1_blk4_plot_3",
    burial_type: "vault",
    funeral_home: "Final Journey Inc.",
    image: "https://randomuser.me/api/portraits/med/male/5.jpg",
  },
  {
    first_name: "Jose",
    last_name: "Cruz",
    date_of_birth: "1941-12-05",
    date_of_death: "2000-08-30",
    date_of_interment: "2000-09-01",
    plot: "ph1_blk7_plot_4",
    burial_type: "mausoleum",
    image: "https://randomuser.me/api/portraits/med/male/36.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Carlos",
    middle_name: "de la Cruz",
    last_name: "Garcia",
    date_of_birth: "1948-10-22",
    date_of_death: "2008-02-29",
    date_of_interment: "2008-03-04",
    plot: "ph1_blk1_plot_15",
    burial_type: "mausoleum",
    image: "https://randomuser.me/api/portraits/med/male/31.jpg",
  },
  {
    first_name: "Lucia",
    middle_name: "Lopez",
    last_name: "Garcia",
    date_of_birth: "1969-03-31",
    date_of_death: "2010-04-24",
    date_of_interment: "2010-04-28",
    plot: "ph2_blk15_plot_10",
    burial_type: "casket",
    funeral_home: "Heaven's Gate Mortuary",
    image: "https://randomuser.me/api/portraits/med/female/73.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Lucia",
    last_name: "Ramirez",
    date_of_birth: "1939-09-28",
    date_of_death: "2023-09-18",
    date_of_interment: "2023-09-22",
    plot: "ph1_blk13_plot_5",
    funeral_home: "St. Peter Chapel",
    image: "https://randomuser.me/api/portraits/med/female/30.jpg",
  },
  {
    first_name: "Juan",
    middle_name: "de la Cruz",
    last_name: "Fernandez",
    date_of_birth: "1949-10-22",
    date_of_death: "2009-06-21",
    date_of_interment: "2009-06-23",
    plot: "ph2_blk7_plot_6",
    burial_type: "casket",
    image: "https://randomuser.me/api/portraits/med/male/84.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Carlos",
    last_name: "Fernandez",
    date_of_birth: "1941-08-08",
    date_of_death: "2000-09-07",
    date_of_interment: "2000-09-07",
    plot: "nph_blk6_plot_11",
    burial_type: "mausoleum",
    image: "https://randomuser.me/api/portraits/med/male/23.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Antonio",
    last_name: "Torres",
    date_of_birth: "1948-08-17",
    date_of_death: "2001-05-19",
    date_of_interment: "2001-05-24",
    plot: "ph1_blk2_plot_11",
    burial_type: "mausoleum",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/4.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Pedro",
    last_name: "Cruz",
    date_of_birth: "1977-03-22",
    date_of_death: "2007-06-02",
    date_of_interment: "2007-06-03",
    plot: "nph_blk14_plot_15",
    burial_type: "mausoleum",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/52.jpg",
  },
  {
    first_name: "Juan",
    last_name: "Cruz",
    date_of_birth: "1947-05-25",
    date_of_death: "2003-02-01",
    date_of_interment: "2003-02-05",
    plot: "ph1_blk3_plot_16",
    burial_type: "casket",
    image: "https://randomuser.me/api/portraits/med/male/21.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Pedro",
    middle_name: "Lopez",
    last_name: "Ramirez",
    date_of_birth: "1946-02-16",
    date_of_death: "2010-12-26",
    date_of_interment: "2010-12-28",
    plot: "ph1_blk13_plot_1",
    funeral_home: "Peaceful Rest",
    image: "https://randomuser.me/api/portraits/med/male/72.jpg",
    notes: "No additional notes.",
  },
  {
    first_name: "Pedro",
    middle_name: "Santos",
    last_name: "Ramirez",
    date_of_birth: "1971-05-29",
    date_of_death: "2024-09-27",
    date_of_interment: "2024-09-29",
    plot: "ph1_blk10_plot_3",
    burial_type: "casket",
    image: "https://randomuser.me/api/portraits/med/male/24.jpg",
    notes: "No additional notes.",
  },
];
