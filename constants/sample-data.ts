export const slotsPerBlock = 30;

export const sampleData = {
  blocks: [
    {
      id: "a",
      description:
        "Tucked beneath a row of towering cypress trees, this quiet section is marked by aged stone and ivy-covered headstones.",
      slots: [
        {
          id: 0,
          name: "John L. Doe",
          lifespan: { from: 1956, to: 2012 },
          sex: "male",
        },
        {
          id: 1,
          name: "Alice M. Smith",
          lifespan: { from: 1942, to: 2001 },
          sex: "female",
        },
        {
          id: 2,
          name: "Robert Johnson",
          lifespan: { from: 1961, to: 2020 },
          sex: "male",
        },
        {
          id: 3,
          name: "Emily G. Williams",
          lifespan: { from: 1978, to: 2033 },
          sex: "female",
        },
        {
          id: 4,
          name: "Michael Brown",
          lifespan: { from: 1933, to: 1999 },
          sex: "male",
        },
        {
          id: 5,
          name: "Sophia A. Jones",
          lifespan: { from: 1980, to: 2040 },
          sex: "female",
        },
        {
          id: 6,
          name: "David A. Garcia",
          lifespan: { from: 1950, to: 2010 },
          sex: "male",
        },
      ].map((person) => ({
        ...person,
        image: `https://avatar.iran.liara.run/public/${person.sex}`,
      })),
    },
    {
      id: "b",
      description:
        "This section lies along the eastern wall, where white marble monuments stand in crisp rows.",
      slots: [
        {
          id: 0,
          name: "Liam J. Walker",
          lifespan: { from: 1950, to: 2008 },
          sex: "male",
        },
        {
          id: 1,
          name: "Chloe Bennett",
          lifespan: { from: 1972, to: 2030 },
          sex: "female",
        },
        {
          id: 2,
          name: "Noah Reed",
          lifespan: { from: 1945, to: 2005 },
          sex: "male",
        },
        {
          id: 3,
          name: "Grace L. Perry",
          lifespan: { from: 1963, to: 2020 },
          sex: "female",
        },
        {
          id: 4,
          name: "Benjamin C. Brooks",
          lifespan: { from: 1928, to: 1992 },
          sex: "male",
        },
        {
          id: 5,
          name: "Lily S. Rivera",
          lifespan: { from: 1984, to: 2060 },
          sex: "female",
        },
        {
          id: 6,
          name: "Ethan Wood",
          lifespan: { from: 1975, to: 2035 },
          sex: "male",
        },
        {
          id: 7,
          name: "Zoe M. Coleman",
          lifespan: { from: 1990, to: 2070 },
          sex: "female",
        },
        {
          id: 8,
          name: "Lucas R. Sanders",
          lifespan: { from: 1939, to: 2000 },
          sex: "male",
        },
        {
          id: 9,
          name: "Aria Foster",
          lifespan: { from: 1969, to: 2029 },
          sex: "female",
        },
        {
          id: 10,
          name: "Henry P. Morgan",
          lifespan: { from: 1958, to: 2015 },
          sex: "male",
        },
        {
          id: 11,
          name: "Scarlett Hayes",
          lifespan: { from: 1986, to: 2050 },
          sex: "female",
        },
        {
          id: 12,
          name: "Owen V. Bryant",
          lifespan: { from: 1943, to: 2003 },
          sex: "male",
        },
        {
          id: 13,
          name: "Sofia N. Kim",
          lifespan: { from: 1997, to: 2081 },
          sex: "female",
        },
      ].map((person) => ({
        ...person,
        image: `https://avatar.iran.liara.run/public/${person.sex}`,
      })),
    },
    {
      id: "c",
      description:
        "Near the old chapel ruins, this part of the cemetery is dotted with weatherworn crosses and wildflowers pushing through cracked pathways.",
      slots: [
        {
          id: 0,
          name: "Samuel B. Hayes",
          lifespan: { from: 1948, to: 2006 },
          sex: "male",
        },
        {
          id: 1,
          name: "Madison Clark",
          lifespan: { from: 1975, to: 2032 },
          sex: "female",
        },
        {
          id: 2,
          name: "Jacob D. Ellis",
          lifespan: { from: 1933, to: 1998 },
          sex: "male",
        },
        {
          id: 3,
          name: "Ella Morgan",
          lifespan: { from: 1980, to: 2043 },
          sex: "female",
        },
        {
          id: 4,
          name: "Ryan F. Hughes",
          lifespan: { from: 1959, to: 2014 },
          sex: "male",
        },
        {
          id: 5,
          name: "Victoria R. Bailey",
          lifespan: { from: 1990, to: 2072 },
          sex: "female",
        },
        {
          id: 6,
          name: "Nathaniel Gray",
          lifespan: { from: 1922, to: 1981 },
          sex: "male",
        },
        {
          id: 7,
          name: "Zoe M. Powell",
          lifespan: { from: 1967, to: 2027 },
          sex: "female",
        },
        {
          id: 8,
          name: "Aaron B. Cooper",
          lifespan: { from: 1945, to: 2005 },
          sex: "male",
        },
        {
          id: 9,
          name: "Lillian Adams",
          lifespan: { from: 1978, to: 2038 },
          sex: "female",
        },
        {
          id: 10,
          name: "Evan T. Bennett",
          lifespan: { from: 1936, to: 1994 },
          sex: "male",
        },
        {
          id: 11,
          name: "Grace Mitchell",
          lifespan: { from: 1995, to: 2073 },
          sex: "female",
        },
        {
          id: 12,
          name: "Coleman J. Foster",
          lifespan: { from: 1952, to: 2010 },
          sex: "male",
        },
        {
          id: 13,
          name: "Natalie Quinn",
          lifespan: { from: 1983, to: 2046 },
          sex: "female",
        },
        {
          id: 14,
          name: "Jason R. Ross",
          lifespan: { from: 1960, to: 2018 },
          sex: "male",
        },
        {
          id: 15,
          name: "Audrey Bennett",
          lifespan: { from: 1970, to: 2035 },
          sex: "female",
        },
        {
          id: 16,
          name: "Dominic H. Powell",
          lifespan: { from: 1947, to: 2004 },
          sex: "male",
        },
        {
          id: 17,
          name: "Claire J. Ward",
          lifespan: { from: 1999, to: 2079 },
          sex: "female",
        },
        {
          id: 18,
          name: "Gavin K. Long",
          lifespan: { from: 1931, to: 1988 },
          sex: "male",
        },
        {
          id: 19,
          name: "Violet S. James",
          lifespan: { from: 1991, to: 2061 },
          sex: "female",
        },
      ].map((person) => ({
        ...person,
        image: `https://avatar.iran.liara.run/public/${person.sex}`,
      })),
    },
  ].map((block, index) => ({
    ...block,
    image: `https://picsum.photos/1920/1080?random=${index}`,
  })),
};
