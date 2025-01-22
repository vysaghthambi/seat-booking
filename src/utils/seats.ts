export type Seat = {
  id: number;
  name: string;
  type: "silver" | "gold" | "platinum";
};

const generateSeatsData = () => {
  const data: Seat[] = [];
  const types: Seat["type"][] = ["silver", "gold", "platinum"];
  const sections = ["A", "B", "C", "D", "E", "F"];
  let id = 1;

  sections.forEach((section, index) => {
    const type = types[Math.floor(index / 2)];

    for (let i = 1; i <= 10; i++) {
      data.push({
        id: id++,
        name: `${section}${i}`,
        type: type,
      });
    }
  });

  return data;
};

export const seats = generateSeatsData();

export const prices = new Map<Seat["type"], number>([
  ["silver", 100],
  ["gold", 150],
  ["platinum", 200],
]);
