enum ColorKeys {
  RED = "RED",
  ORANGE = "ORANGE",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

type Colors = {
  [key in keyof typeof ColorKeys]: {
    primaryColor: string;
    secondaryColor: string;
  };
};

const UI_COLORS: Colors = {
  RED: {
    primaryColor: "F74140",
    secondaryColor: "FA8D8D",
  },
  ORANGE: {
    primaryColor: "FF9F2C",
    secondaryColor: "FFC581",
  },
  GREEN: {
    primaryColor: "16CB49",
    secondaryColor: "74E092",
  },
  BLUE: {
    primaryColor: "168FFF",
    secondaryColor: "73BCFF",
  },
};

export default UI_COLORS;
