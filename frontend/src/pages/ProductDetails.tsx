import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Product } from "../types/Product";
import { ArrowLeftIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { currency } from "../utils/currency";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Skeleton from "react-loading-skeleton";
import { Heading } from "../components/Heading";
import { getProductImageUrl } from "../utils/product-images";
import { Spinner } from "../components/Spinner";

const images = (productId: number) => [
  {
    original: getProductImageUrl(productId, 0),
    thumbnail: getProductImageUrl(productId, 0),
  },
  {
    original: getProductImageUrl(productId, 1),
    thumbnail: getProductImageUrl(productId, 1),
  },
  {
    original: getProductImageUrl(productId, 2),
    thumbnail: getProductImageUrl(productId, 2),
  },
  {
    original: getProductImageUrl(productId, 3),
    thumbnail: getProductImageUrl(productId, 3),
  },
];

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [shipping, setShipping] = useState<string>();
  const [showShippingError, setShowShippingError] = useState<boolean>(false);
  const [orderClicked, setOrderClicked] = useState(false);

  useEffect(() => {
    useProducts().then((x) => {
      const product = x?.find((x) => x.id === Number(id));
      setProduct(product);
    });
  }, [id]);
  const thumbnailStyles = `.image-gallery-thumbnail img {
    width: auto;
    height: 75px;
    object-fit: cover;
  }`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link
        to="/"
        className="flex items-center gap-2 hover:text-green-700 hover:underline"
      >
        <ArrowLeftIcon className="h-5 w-5 inline" /> Back to gallery
      </Link>

      <Heading>
        <span className="mr-6">{product?.name || <Skeleton />}</span>
        {product?.colour && (
          <span
            className={`tracking-normal ${
              product?.id === 0 ? "bg-gray-700" : "bg-blue-700"
            } align-middle inline-block py-1 px-2 shadow-md no-underline rounded-full text-white font-semibold text-xs border-blue btn-primary `}
          >
            {product?.colour}
          </span>
        )}
      </Heading>

      <div className="flex max-w gap-10 flex-col md:flex-row mb-20">
        <div className="max-w-md">
          <style>{thumbnailStyles}</style>
          <ImageGallery
            items={images(product?.id || 0)}
            infinite={false}
            showNav={true}
            showFullscreenButton={true}
            showPlayButton={false}
          />
        </div>
        <div className="flex gap-5 flex-col min-w-max">
          <h2 className="text-4xl">
            {currency(product?.price) || <Skeleton />}
          </h2>

          <form
            className="flex gap-5 flex-col min-w-max"
            method="POST"
            action="https://us-central1-tpf-store.cloudfunctions.net/app/create-checkout-session"
            onSubmit={(e) => {
              setShowShippingError(false);
              setOrderClicked(true);
              if (!shipping) {
                e.preventDefault();
                setShowShippingError(true);
                setOrderClicked(false);
                return false;
              }
            }}
          >
            <div className="flex flex-col gap-2">
              <input name="stripeId" type="hidden" value={product?.stripeId} />
              <label className="flex items-center font-bold gap-4">
                Quantity
                <select
                  name="quantity"
                  className="py-1 px-2 ml-2 rounded-md border border-gray-300 flex-grow w-20"
                >
                  <option disabled>Select</option>
                  {[...Array(product?.stock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center font-bold gap-4">
                Shipping
                <select
                  name="stripeShippingRateId"
                  className="py-1 px-2 ml-2 rounded-md border border-gray-300 flex-grow"
                  defaultValue=""
                  onChange={(e) => setShipping(e.target.value)}
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="shr_1Jqb10DsplRnOeEPlQ7t5fF8">Urban</option>
                  <option value="shr_1JqbAoDsplRnOeEP24u7MbCZ">Rural</option>
                </select>
              </label>
              {showShippingError && (
                <div className="text-red-700">
                  <ExclamationCircleIcon className="h-5 w-5 inline-block align-text-bottom" />{" "}
                  Please choose a shipping option
                </div>
              )}
            </div>
            <Button size="large" submit disabled={orderClicked}>
              {orderClicked ? <Spinner /> : "Order"}
            </Button>
          </form>
        </div>
        <div>
          <p className="mb-4">
            {product?.description1 || <Skeleton count={5} />}
          </p>
          {product && (
            <p className="mb-4">
              <strong>Dimensions:</strong> {product?.length}mm (in width and
              length) x {product?.height}mm (height)
            </p>
          )}
          {product && (
            <p className="mb-4">
              <strong>Weight:</strong> Approximately {product?.weight}g
            </p>
          )}
          <p>{product?.description2 || <Skeleton count={5} />}</p>
        </div>
      </div>
    </div>
  );
};
