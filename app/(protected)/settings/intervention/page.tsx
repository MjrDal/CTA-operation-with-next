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

const InterventionSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const themes = await prisma.themes.findMany();
  const interventions = await prisma.intervention.findMany();

  return (
    <div>
      <h1 className="m-5">Interventions</h1>
      <div className=" flex flex-row m-5 gap-4">
        <Link href="/settings">
          <Button>Retour</Button>
        </Link>
        <Link href="/settings/intervention/new">
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
            {themes.map((docs, index) => (
              <SelectItem key={index} value={docs.theme}>
                {docs.theme}
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
                <TableHead>Theme</TableHead>
                <TableHead>Dénomination</TableHead>
                <TableHead>Suppression</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interventions.map((docs) => (
                <TableRow key={docs.id}>
                  <Link href={`/settings/vehicule/${docs.id}`} key={docs.id}>
                    <TableCell className="font-medium">{docs.id}</TableCell>
                  </Link>
                  <TableCell>{docs.theme}</TableCell>
                  <TableCell>{docs.denomination}</TableCell>
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

export default InterventionSettingsPage;
