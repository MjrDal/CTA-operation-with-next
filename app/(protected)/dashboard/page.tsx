import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  session?.user.id;

  return <div>{JSON.stringify(session)}</div>;
};

export default DashboardPage;
