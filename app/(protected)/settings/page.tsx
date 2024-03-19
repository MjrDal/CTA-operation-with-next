import { auth } from "@/auth";
import { SettingGeneral } from "@/components/setting/settingGeneral";

const SettingsPage = async () => {
  const session = await auth();

  session?.user.id;

  return (
    <div>
      <h1>Settings</h1>
      {JSON.stringify(session)} <SettingGeneral />
    </div>
  );
};

export default SettingsPage;
