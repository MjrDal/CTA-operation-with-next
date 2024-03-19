import { ThemeForm } from "@/components/setting/general/themeForm";
import ThemeTable from "@/components/setting/general/themeTable";

const ThemeSettingsPage = async () => {
  return (
    <div>
      <ThemeForm title="Theme" />
      <ThemeTable />
    </div>
  );
};

export default ThemeSettingsPage;
