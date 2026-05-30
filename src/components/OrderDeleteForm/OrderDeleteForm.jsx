'use client'
import { getCartProductDelete } from "@/app/api/Server";
import {TriangleExclamation} from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const OrderDeleteForm = ({data}) => {
    const router=useRouter()
    const handleDelete=async(id,product)=>{
const deleteData=await getCartProductDelete(id)
if(deleteData){
    toast.success(`${product} is permanently delete !`)
    router.refresh()
}

    }
  return (
     <AlertDialog>
     <Button variant="danger" className="w-full sm:w-auto">
                Delete Order
              </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Permanently delete your Order?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. {data.product} will be
                permanently removed from our servers. The dramatic red backdrop emphasizes the
                severity and irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Order
              </Button>
              <Button onClick={()=>handleDelete(data._id,data.product)} className="w-full" slot="close" variant="danger">
                Delete Order
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default OrderDeleteForm;