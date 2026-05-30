"use client";

import { ShoppingCart } from "lucide-react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function CosmeticsModalUi({ product }) {
  const handleBye =(e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button className="btn btn-sm bg-[#F5ECE8] text-[#ef885b]">
        Order Now
      </Button>
      
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

                <Modal.Heading>{product?.name}</Modal.Heading>

                <p className="mt-1.5 text-sm text-muted">
                  {product?.description}
                </p>
              </Modal.Header>

              {/* Body */}
              <Modal.Body className="p-6">

                <Surface>
                    <form onSubmit={handleBye}>
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
                    <TextField>
                      <Label>Name</Label>
                      <Input name="name" placeholder="Enter your name" />
                    </TextField>

                    <TextField>
                      <Label>Phone Number</Label>
                      <Input name="number" placeholder="Enter your number" />
                    </TextField>

                    <TextField>
                      <Label>Email</Label>
                      <Input name="email" placeholder="Enter your email" />
                    </TextField>

                    <TextField>
                      <Label>Location</Label>
                      <Input name="location" placeholder="Enter your address" />
                    </TextField>

                    <TextField>
                      <Label>Quantity</Label>
                      <Input type="number" name="quantity" min={1} />
                    </TextField>
                  </div>
                    <Modal.Footer className="my-6">
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>

                <Button type="submit" className="bg-[#F5ECE8] text-[#ef885b]">
                  Order Now
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
}
