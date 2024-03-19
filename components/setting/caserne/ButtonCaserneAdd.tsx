"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoAddCircleOutline } from "react-icons/io5";
import { FormCaserneAdd } from "./formCaserneAdd";

const ButtonCaserneAdd = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <IoAddCircleOutline />
        </DialogTrigger>
        <DialogContent>
          <FormCaserneAdd />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ButtonCaserneAdd;
