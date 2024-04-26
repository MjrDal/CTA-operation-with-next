"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Props {
  numero: string;
  commune: string;
  code: string;
  vehicules: {
    id: string;
    name: string;
  }[];
  note: string;
}

export const ModaleDescription: React.FC<Props> = ({
  numero,
  commune,
  code,
  vehicules,
  note,
}) => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Intervention: {numero}</DialogTitle>
        <div>
          <span>{commune}</span>
          <span>{code}</span>
          <span>{note}</span>
          <div>
            {vehicules.map((doc) => (
              <div key={doc.id}>{doc.name}</div>
            ))}
          </div>
        </div>
      </DialogHeader>
    </div>
  );
};
