import ButtonVehiculAdd from "@/components/setting/vehicule/ButtonVehiculAdd";
import VehiculeTable from "@/components/setting/vehicule/vehiculeTable";

const VehiculeSettingsPage = async () => {
  return (
    <div>
      <div>
        <ButtonVehiculAdd />
      </div>
      <VehiculeTable />
    </div>
  );
};

export default VehiculeSettingsPage;
