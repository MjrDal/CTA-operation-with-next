"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Props {
  intervention: {
    id: string;
    theme: string;
    dialogue: string;
    radio1: string | null;
    radio2: string | null;
    radio3: string | null;
    radio4: string | null;
  }[];
  commune: {
    id: string;
    name: string;
    code: string;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
  }[];
}

export const ListDepart: React.FC<Props> = ({ intervention, commune }) => {
  const [randomInter, setRandomInter] = useState<number | undefined>();
  const [randomCommune, setRandomCommune] = useState<number | undefined>();

  useEffect(() => {
    if (randomInter !== undefined) {
      console.log("************");
      console.log(randomInter);
      console.log("**************");
    }
  }, [randomInter]);

  useEffect(() => {
    if (randomCommune !== undefined) {
      console.log("+++++++++++");
      console.log(randomCommune);
      console.log("++++++++++++");
    }
  }, [randomCommune]);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function handleSubmit() {
    const newRandomInter = getRandomInt(intervention.length);
    const newRandomCommune = getRandomInt(commune.length);
    console.log("---------------");
    console.log(newRandomInter);
    console.log("-----------------");
    console.log(newRandomCommune);
    setRandomInter(newRandomInter);
    setRandomCommune(newRandomCommune);
  }

  return (
    <div>
      <div>
        <Button onClick={handleSubmit}>Génerer une intervention</Button>
      </div>
    </div>
  );
};
