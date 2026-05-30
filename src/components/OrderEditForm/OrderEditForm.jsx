"use client";

import { getCartProductEdit } from "@/app/api/Server";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const OrderEditForm = ({ product }) => {
  const router = useRouter();
  const handleOrderEdit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const data = {
      name: formData.name,
      number: formData.number,
      email: formData.email,
      location: formData.location,
      quantity: Number(formData.quantity),
    };
    const editData = await getCartProductEdit(data, product._id);
    if (editData) {
      toast.success("product updated successfully !");
      router.refresh();
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button>Edit Order</Button>

      <Modal.Backdrop>
        {/* FIXED: add flex center wrapper */}
        <Modal.Container className="flex items-center justify-center min-h-screen">
          <Modal.Dialog className="sm:max-w-md w-[92%] max-h-[85vh] overflow-y-auto">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-[#F5ECE8] text-[#f49d77]">
                <ShoppingCart className="size-5" />
              </Modal.Icon>

              <Modal.Heading>{product?.product}</Modal.Heading>

              <p className="mt-1.5 text-sm text-muted">
                {product?.description}
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={handleOrderEdit}>
                  <div className="flex flex-col gap-4">
                    {/* Product Image */}
                    <img
                      src={product?.image}
                      className="w-30 h-30 object-cover rounded-lg"
                    />

                    {/* Price */}
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span className="font-bold text-[#f3b498]">
                        ${product?.price}
                      </span>
                    </div>

                    {/* Form Fields */}
                    <TextField defaultValue={product.name}>
                      <Label>Name</Label>
                      <Input name="name" placeholder="Enter your name" />
                    </TextField>

                    <TextField defaultValue={product.number}>
                      <Label>Phone Number</Label>
                      <Input name="number" placeholder="Enter your number" />
                    </TextField>

                    <TextField defaultValue={product.email}>
                      <Label>Email</Label>
                      <Input name="email" placeholder="Enter your email" />
                    </TextField>

                    <TextField defaultValue={product.location}>
                      <Label>Location</Label>
                      <Input name="location" placeholder="Enter your address" />
                    </TextField>

                    <TextField defaultValue={product.quantity}>
                      <Label>Quantity</Label>
                      <Input type="number" name="quantity" min={1} />
                    </TextField>
                  </div>
                  <Modal.Footer className="my-6">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      type="submit"
                      className="bg-[#F5ECE8] text-[#ef885b]"
                    >
                      Edit Order
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default OrderEditForm;
