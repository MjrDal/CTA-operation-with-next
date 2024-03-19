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

const TypeTable = async () => {
  const prisma = new PrismaClient();
  const type = await prisma.typeVehicules.findMany();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>type</TableHead>
            <TableHead>Suppression</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {type.map((docs) => (
            <TableRow key={docs.id}>
              <TableCell className="font-medium">{docs.id}</TableCell>
              <TableCell>{docs.type}</TableCell>
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

export default TypeTable;
