import { GroupementForm } from "@/components/setting/general/groupementForm";
import GroupementTable from "@/components/setting/general/groupementTable";

const GroupementSettingsPage = async () => {
  return (
    <div>
      <GroupementForm title="Groupement" />
      <GroupementTable />
    </div>
  );
};

export default GroupementSettingsPage;
