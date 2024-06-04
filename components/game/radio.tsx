"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ModaleMessages } from "./modale_message";

interface Props {
  generation: {
    messages: { id: string; message: string }[];
    id: string;
    numero: string;
    commune: string;
    code: string;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
    theme: string;
    denomination: string;
    dialogue: string;
    radio1: string | null;
    radio2: string | null;
    radio3: string | null;
    radio4: string | null;
    note: string;
  }[];
}

export const Radio: React.FC<Props> = ({ generation }) => {
  const [randomGeneration, setRandomGeneration] = useState<number>(0);
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function handleSubmit() {
    const newRandomGeneration = getRandomInt(generation.length);
    setRandomGeneration(newRandomGeneration);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={handleSubmit}>Génerer un message radio</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Radio</DialogTitle>
            <DialogDescription>
              Intervention numéro: {generation[randomGeneration].id}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ModaleMessages
              id={generation[randomGeneration].id}
              messages={generation[randomGeneration].messages}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
