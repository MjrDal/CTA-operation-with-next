import { Button } from "@/components/ui/button";
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
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

const CaserneSettingsPage = async () => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();
  return (
    <div>
      <div>
        <Link href="/settings/caserne/new">
          <Button>
            <IoAddCircleOutline />
          </Button>
        </Link>
      </div>
      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Groupement</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Suppression</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {casernes.map((docs) => (
              <TableRow key={docs.id}>
                <TableCell className="font-medium">{docs.id}</TableCell>
                <TableCell>{docs.groupement}</TableCell>
                <TableCell>{docs.name}</TableCell>
                <TableCell>
                  <Button variant="destructive">
                    <FaRegTrashAlt />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default CaserneSettingsPage;
