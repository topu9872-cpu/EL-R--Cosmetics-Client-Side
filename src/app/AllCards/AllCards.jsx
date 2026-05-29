import Image from "next/image";
import Link from "next/link";

const AllCards = ({ product }) => {

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
      <Image
        src={product.image}
        width={400}
        height={400}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-3 space-y-2">
        <div className="flex justify-between items-center">
          <span className="badge badge-outline capitalize">
            {product.category}
          </span>

          <span className="text-sm text-orange-500">⭐ {product.rating}</span>
        </div>

        <h2 className="font-bold text-lg line-clamp-1">{product.name}</h2>

        <p className="text-sm text-gray-500 line-clamp-1">
          {product.description}
        </p>

        <div className="text-sm space-y-1">
          <p>Shade: {product.shade}</p>
          <p>Finish: {product.finish}</p>
          <p>Stock: {product.stock}</p>
          <h1>Price: ${product.price}</h1>
        </div>

        <div className="flex justify-between items-center pt-2">
          <button className="btn btn-sm btn-primary">Order Now</button>
          <Link
            className="btn btn-sm btn-primary"
            href={`/AllCards/${product._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
