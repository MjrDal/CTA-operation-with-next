import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoAddCircleOutline } from "react-icons/io5";
import { FormVehiculeAdd } from "./formVehiculeAdd";

const ButtonVehiculAdd = async () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>
            <IoAddCircleOutline />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <FormVehiculeAdd />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ButtonVehiculAdd;
