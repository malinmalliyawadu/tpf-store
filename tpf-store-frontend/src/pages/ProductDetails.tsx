import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Product } from "../types/Product";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { currency } from "../utils/currency";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Skeleton from "react-loading-skeleton";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    useProducts().then((x) => x && setProduct(x[0]));
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      <Link
        to="/tpf-store/"
        className="flex items-center gap-2 hover:text-green-700 hover:underline"
      >
        <ArrowLeftIcon className="h-5 w-5 inline " /> Back to gallery
      </Link>

      <h1 className="text-6xl mt-4 mb-8 font-serif">
        {product?.name || <Skeleton />}
      </h1>

      <div className="flex max-w gap-10 flex-col md:flex-row">
        <ImageGallery
          items={images}
          infinite={false}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        <div className="flex gap-5 flex-col">
          <h2 className="text-4xl">
            {currency(product?.price) || <Skeleton />}
          </h2>

          <div className="flex gap-5 flex-col min-w-max">
            <label className="block">
              Colour:
              <select>
                <option>Select</option>
              </select>
            </label>
            <Button size="large">Add to Cart</Button>
            <div>Quantity: {product?.stock || <Skeleton />}</div>
          </div>
        </div>
        <div>{product?.description || <Skeleton count={5} />}</div>
      </div>
    </div>
  );
};
