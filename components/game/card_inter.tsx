"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {}

export const CardInter: React.FC<Props> = ({
  numero,
  denomination,
  commune,
  code,
  vehicules,
}) => {
  return (
    <div>
      <Card>
        <div className=" flex flex-row h-5 items-center space-x-4 text-sm">
          <div>{numero}</div>
          <Separator orientation="vertical" />
          <div>{denomination}</div>
          <Separator orientation="vertical" />
          <div>
            {commune} {code}
          </div>
        </div>
        <Separator className="" />
        <div>
          <h5>Vehicules en intervention</h5>
          <div>
            {vehicules.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </div>
          <div>{}</div>
        </div>
      </Card>
    </div>
  );
};
