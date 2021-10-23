import { ProductItem } from "../components/ProductItem";
import { Product } from "../types/Product";

export const ProductGallery = () => {
  const products: Product[] = [
    {
      id: 0,
      name: "test",
      description: "fsdjhfjks",
      category: "fdsf",
      price: 10,
      stock: 1,
    },
    {
      id: 1,
      name: "test",
      description: "fsdjhfjks",
      category: "fdsf",
      price: 10,
      stock: 1,
    },
    {
      id: 2,
      name: "test",
      description: "fsdjhfjks",
      category: "fdsf",
      price: 10,
      stock: 1,
    },
    {
      id: 3,
      name: "test",
      description: "fsdjhfjks",
      category: "fdsf",
      price: 10,
      stock: 1,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl mt-4 mb-8">Products</h1>

      <div className="grid grid-cols-3 gap-4 items-center">
        {products.map((x) => (
          <ProductItem {...x} />
        ))}
      </div>
    </div>
  );
};
