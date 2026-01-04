const bookPrice = 800;
const discountRates = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

const memo = new Map();
const getKey = (counts) =>
  counts
    .slice()
    .sort((a, b) => b - a)
    .join(",");

const computeCost = (counts) => {
  const key = getKey(counts);
  if (memo.has(key)) return memo.get(key);

  if (counts.every((c) => c === 0)) return 0;

  let minPrice = Infinity;

  const sorted = counts.slice().sort((a, b) => b - a);
  const available = sorted.filter((c) => c > 0).length;

  for (let size = 1; size <= available; size++) {
    const newCounts = sorted.slice();
    for (let i = 0; i < size; i++) {
      newCounts[i]--;
    }

    const rate = discountRates[size] || 0;
    const groupPrice = size * bookPrice * (1 - rate);
    minPrice = Math.min(minPrice, groupPrice + computeCost(newCounts));
  }

  memo.set(key, minPrice);
  return minPrice;
};

export const cost = (basket) => {
  if (!Array.isArray(basket) || basket.length === 0) return 0;

  const counts = [0, 0, 0, 0, 0];
  for (const id of basket) {
    const idx = Number(id) - 1;
    if (idx >= 0 && idx < counts.length) counts[idx]++;
  }

  return computeCost(counts);
};
