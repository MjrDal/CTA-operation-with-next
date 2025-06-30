"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  premier: {
    id: string;
    name: string;
  }[];
  deuxieme: {
    id: string;
    name: string;
  }[];
  troisieme: {
    id: string;
    name: string;
  }[];
  quatrieme: {
    id: string;
    name: string;
  }[];
}

export const ModaleAjoutVehicules: React.FC<Props> = ({
  premier,
  deuxieme,
  troisieme,
  quatrieme,
}) => {
  return (
    <div className="w-60">
      <h2>Ajouter des vehicules à l&apos;intervention :</h2>
      <ScrollArea className="h-72 rounded-md border">
        <div>
          <Card>
            {premier.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </Card>
        </div>
        <div>
          <Card>
            {deuxieme.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </Card>
        </div>
        <div>
          <Card>
            {troisieme.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </Card>
        </div>
        <div>
          <Card>
            {quatrieme.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
