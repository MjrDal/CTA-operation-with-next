"use server";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";

const DashboardPage = async () => {
  const session = await auth();
  const prisma = new PrismaClient();
  const intervention = await prisma.intervention.findMany();
  const commune = await prisma.communes.findMany();

  session?.user.id;

  function handleSubmit() {
    console.log(intervention.length);
    console.log(commune.length);
  }

  return (
    <div>
      {JSON.stringify(session)}{" "}
      <div>
        <Button>creation d&apos;une intervention manuellement</Button>
      </div>
    </div>
  );
};

export default DashboardPage;
