"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { communeAction } from "../[communeId]/detail/communeAction";

const CommuneSettingsPage = () => {
  const [commune, setCommune] = useState<
    { nom: string; code: string; codesPostaux: string[] }[]
  >([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetch(
      "https://geo.api.gouv.fr/departements/39/communes?fields=nom,code,codesPostaux&format=json&geometry=centre"
    ).then(async (res) => {
      setCommune(await res.json());
    });
    commune.map((com) => {
      const data = {
        name: com.nom,
        code: com.codesPostaux[0],
        premier: "1",
        deuxieme: "2",
        troisieme: "3",
        quatrieme: "4",
      };

      communeAction(data);
    });
  };

  return (
    <div>
      <h2>Commune</h2>
      <form onSubmit={handleSubmit}>
        <Button variant="default">recuperer</Button>
      </form>
    </div>
  );
};

export default CommuneSettingsPage;
