import { EyeIcon } from "@heroicons/react/solid";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { currency } from "../utils/currency";
import { getProductImageUrl } from "../utils/product-images";
import { Button } from "./Button";

export const ProductItem: React.FC<Partial<Product>> = ({
  id,
  name,
  description1,
  price,
  colour,
}) => {
  const imageUrl = getProductImageUrl(id || 0, 0);

  return (
    <div className="pb-4">
      <Link to={`/store/product/${id}`}>
        <div
          className="
        transform transition-all flex max-w-md bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl hover:scale-110"
        >
          <div className="w-1/3">
            {name ? (
              <div
                className="bg-cover block h-full bg-center"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></div>
            ) : (
              <Skeleton
                height="100%"
                style={{ display: "block" }}
                enableAnimation={false}
              />
            )}
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">
              {name || <Skeleton />}
            </h1>
            {colour && (
              <span
                className={`${
                  id === 0 ? "bg-gray-700" : "bg-blue-700"
                } py-1 px-2 shadow-md no-underline rounded-full text-white font-sans font-semibold text-xs border-blue btn-primary `}
              >
                {colour}
              </span>
            )}
            <p className="mt-2 text-gray-600 text-sm line-clamp-3">
              {description1 || <Skeleton count={3} />}
            </p>

            <div className="flex item-center justify-between mt-3">
              <div className="text-gray-700 font-bold text-xl">
                {currency(price) || <Skeleton />}
              </div>
              {name && <Button>View</Button>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
