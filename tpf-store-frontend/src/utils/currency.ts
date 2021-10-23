export const currency = (x?: number) => {
  if (!x) return "";

  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  }).format(x);
};
