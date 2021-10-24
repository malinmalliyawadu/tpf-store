import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { currency } from "../utils/currency";

export const ProductItem: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  category,
}) => {
  return (
    <div className="py-6">
      <Link to={`/tpf-store/product/${id}`}>
        <div className="flex max-w-md bg-green-50 shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{
              backgroundImage: `url('https://picsum.photos/200/300?v=${id}')`,
            }}
          ></div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
            <p className="mt-2 text-gray-600 text-sm line-clamp-3">
              {description}
            </p>

            <div className="flex item-center justify-between mt-3">
              <div className="text-gray-700 font-bold text-xl">
                {currency(price)}
              </div>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
