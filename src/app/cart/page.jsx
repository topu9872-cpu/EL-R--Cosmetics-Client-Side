import OrderDeleteForm from "@/components/OrderDeleteForm/OrderDeleteForm";
import { getAddToCartData } from "../api/Server";
import { Card, CloseButton } from "@heroui/react";
import OrderEditForm from "@/components/OrderEditForm/OrderEditForm";
const CartPage = async () => {
  const orderData = await getAddToCartData();
  console.log(orderData);
  return (
    <div className="flex flex-col gap-4 mb-10 mt-30">
      {orderData?.map((data) => (
        <Card key={data._id} className="mx-30 items-stretch md:flex-row">
          <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
            <img
              alt="product"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src={
                data?.image ||
                "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              }
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8 flex flex-col gap-1">
                <span>{data.name}</span>
                <span className="text-sm text-gray-500">{data.product}</span>
              </Card.Title>

              <Card.Description>
                📧 Email: {data.email}
                <br />
                📞 Phone: {data.number}
                <br />
                📍 Location: {data.location}
              </Card.Description>

              <CloseButton
                aria-label="Close banner"
                className="absolute top-3 right-3"
              />
            </Card.Header>

            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Quantity: {data.quantity}
                </span>

                <span className="text-xs text-muted">Order ID: {data._id}</span>
              </div>

              <div className="space-x-4 flex">
                <OrderEditForm product={data} />

                <OrderDeleteForm data={data} />
              </div>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CartPage;
