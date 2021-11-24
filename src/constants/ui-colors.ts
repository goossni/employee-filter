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
    secondaryColor: "FFC581",
  },
  ORANGE: {
    primaryColor: "FF9F2C",
    secondaryColor: "FA8D8D",
  },
  GREEN: {
    primaryColor: "16CB49",
    secondaryColor: "73BCFF",
  },
  BLUE: {
    primaryColor: "168FFF",
    secondaryColor: "74E092",
  },
};

export default UI_COLORS;
