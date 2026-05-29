import { getProductsDetails } from "@/app/api/Server";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProductsDetails(id);
  return (
    <div className="max-w-6xl mx-auto px-4 my-10 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="bg-base-200 rounded-3xl p-5">
          <Image
            src={product.image}
            width={600}
            height={600}
            alt={product.name}
            className="w-full h-100 object-cover rounded-2xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <span className="badge badge-outline capitalize">
            {product.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold">{product.name}</h1>

          <p className="text-gray-500 text-lg">{product.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-base-200 p-4 rounded-2xl">
              <p className="font-semibold">Shade</p>
              <p>{product.shade}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-2xl">
              <p className="font-semibold">Finish</p>
              <p>{product.finish}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-2xl">
              <p className="font-semibold">Color</p>
              <p>{product.color}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-2xl">
              <p className="font-semibold">Stock</p>
              <p>{product.stock} pcs</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="text-sm text-gray-500">Price</p>

              <h1 className="text-4xl font-bold text-primary">
                ${product.price}
              </h1>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
