"use server";
import { TableCaserne } from "@/components/setting/caserne/TableCarserne";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
  data: {
    id: string;
    groupement: string;
    name: string;
  }[];
}

const CaserneSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const groupements = await prisma.groupements.findMany();
  const casernes = await prisma.casernes.findMany();

  return (
    <div>
      <h1 className="m-5">Casernes</h1>
      <div className=" flex flex-row m-5 gap-4">
        <Link href="/settings/caserne/new">
          <Button>
            <IoAddCircleOutline />
          </Button>
        </Link>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {groupements.map((docs, index) => (
              <SelectItem key={index} value={docs.groupement}>
                {docs.groupement}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <TableCaserne data={casernes} />
    </div>
  );
};

export default CaserneSettingsPage;
