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
import { FaRegTrashAlt } from "react-icons/fa";

const VehiculeTable = async () => {
  const prisma = new PrismaClient();
  const vehicule = await prisma.vehicules.findMany();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>type</TableHead>
            <TableHead>Affectation</TableHead>
            <TableHead>Suppression</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicule.map((docs) => (
            <TableRow key={docs.id}>
              <TableCell className="font-medium">{docs.id}</TableCell>
              <TableCell>{docs.name}</TableCell>
              <TableCell>{docs.type}</TableCell>
              <TableCell>{docs.affectation}</TableCell>
              <TableCell>
                <Button variant="destructive">
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VehiculeTable;
