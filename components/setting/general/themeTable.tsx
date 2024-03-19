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

const ThemeTable = async () => {
  const prisma = new PrismaClient();
  const themes = await prisma.themes.findMany();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Theme</TableHead>
            <TableHead>Suppression</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {themes.map((docs) => (
            <TableRow key={docs.id}>
              <TableCell className="font-medium">{docs.id}</TableCell>
              <TableCell>{docs.theme}</TableCell>
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

export default ThemeTable;
