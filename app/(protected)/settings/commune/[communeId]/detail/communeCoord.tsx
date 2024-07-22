"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  commune: {
    id: string;
    name: string;
    code: string;
    insee: string | null;
    long: number | null;
    lat: number | null;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
  } | null;
}

export const CommuneCoord: React.FC<Props> = ({ commune }) => {
  const [codeCommune, setCodeCommune] = useState<
    { nom: string; code: string; codesPostaux: string[] }[]
  >([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetch(
      "https://geo.api.gouv.fr/communes?codePostal=39120&nom=annoire&fields=nom,code,codesPostaux&format=json&geometry=centre"
    ).then(async (res) => {
      setCodeCommune(await res.json());
      console.log(codeCommune[0].code);
      const values = {
        id: commune?.id,
        insee: codeCommune[0].code,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button variant="default">recuperer</Button>
    </form>
  );
};
