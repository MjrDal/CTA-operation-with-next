"use server";
import { DeletButton } from "@/components/features/deleButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const VehiculeSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();
  const vehicules = await prisma.vehicules.findMany();

  return (
    <div>
      <h1 className="m-5">Vehicules</h1>
      <div className=" flex flex-row m-5 gap-4">
        <Link href="/settings">
          <Button>Retour</Button>
        </Link>
        <Link href="/settings/vehicule/new">
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
            {casernes.map((docs, index) => (
              <SelectItem key={index} value={docs.name}>
                {docs.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Card className="m-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Affectation</TableHead>
                <TableHead>Suppression</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicules.map((docs) => (
                <TableRow key={docs.id}>
                  <Link href={`/settings/vehicule/${docs.id}`} key={docs.id}>
                    <TableCell className="font-medium">{docs.id}</TableCell>
                  </Link>
                  <TableCell>{docs.name}</TableCell>
                  <TableCell>{docs.affectation}</TableCell>
                  <TableCell>
                    <DeletButton dataId={docs.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default VehiculeSettingsPage;
