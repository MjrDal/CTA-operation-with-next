"use server";

import { auth } from "@/auth";
import Communication from "@/components/game/communication";
import ListInter from "@/components/game/list-inter";

interface Props {}

const DashboardPage: React.FC<Props> = async () => {
  const session = await auth();

  session?.user.id;

  return (
    <div className=" flex flex-row justify-center pt-8 gap-4">
      {/* {JSON.stringify(session)} */}
      <Communication />
      <ListInter />
    </div>
  );
};

export default DashboardPage;
