"use server";

import { auth } from "@/auth";
import Communication from "@/components/game/communication";
import ListInter from "@/components/game/list-inter";
import dynamic from "next/dynamic";

interface Props {}

const DashboardPage: React.FC<Props> = async () => {
  const session = await auth();

  const MapComponent = dynamic(() => import("@/components/map/MapComponent"), {
    ssr: false, // This line is important to prevent SSR issues
  });

  session?.user.id;

  return (
    <div className=" flex flex-row justify-center pt-8 gap-4">
      {/* {JSON.stringify(session)} */}
      <Communication />
      <div className="flex flex-col">
        <ListInter />
        <MapComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
