export const getProductImageUrl = (productId: number, index: number) =>
  new URL(`./../../images/products/${productId}-${index}.jpg`, import.meta.url)
    .href;
