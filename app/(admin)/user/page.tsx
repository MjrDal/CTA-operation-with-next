import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";

interface Props {
  data: {
    id: string;
    groupement: string;
  }[];
}

const CaserneSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findMany();

  return (
    <div>
      <Card className=" m-4 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.map((docs) => (
              <TableRow key={docs.id}>
                <TableCell className="font-medium">{docs.id}</TableCell>
                <TableCell>{docs.name}</TableCell>
                <TableCell>{docs.email}</TableCell>
                <TableCell>{docs.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CaserneSettingsPage;
