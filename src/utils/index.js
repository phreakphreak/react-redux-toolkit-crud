export const getRandomColor = (id) => {
  const idx = +id
    .split("")
    .filter((e) => !isNaN(Number(e)))
    .join("");

  const colors = ["#53BF9D", "#F94C66", "#BD4291", "#FFC54D"];

  if (idx >= colors.length) {
    return colors[idx % colors.length];
  }
  return colors[idx];
};
