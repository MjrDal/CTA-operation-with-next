import TypeTable from "@/components/setting/general/typeTable";
import { TypeVehiculeForm } from "@/components/setting/general/typeVehiculeForm";

const TypeSettingsPage = async () => {
  return (
    <div>
      <TypeVehiculeForm title="Type" />
      <TypeTable />
    </div>
  );
};

export default TypeSettingsPage;
