export const getRandomColor = (id) => {
  const idx = +id
    .split("")
    .filter((e) => !isNaN(Number(e)))
    .join("");

  const colors = [
    "#9c27b0",
    "#F94C66",
    "#673ab7",
    "#FFC54D",
    "#8bc34a",
    "#2196f3",
    "#e91e63",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#3f51b5",
    "#53BF9D",
    "#BD4291",
    "#03a9f4",
  ];

  if (idx >= colors.length) {
    return colors[idx % colors.length];
  }
  return colors[idx];
};
