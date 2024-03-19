import { PrismaClient } from "@prisma/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectGroupement = async () => {
  const prisma = new PrismaClient();
  const groupements = await prisma.groupements.findMany();
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Groupement" />
        </SelectTrigger>
        <SelectContent>
          {groupements.map((docs, index) => (
            <SelectItem key={index} value={docs.groupement || ""}>
              {docs.groupement}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
