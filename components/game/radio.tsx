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
import { FaWalkieTalkie } from "react-icons/fa6";
import AudioPlayer from "./audioPlayer";
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
          <Button
            className="w-full h-10 border-2 border-black rounded-sm flex justify-center items-center bg-red-600"
            onClick={handleSubmit}
          >
            <FaWalkieTalkie />
          </Button>
        </DialogTrigger>
        <DialogContent className=" w-[900px]">
          <DialogHeader>
            <DialogTitle>Radio</DialogTitle>
            <DialogDescription>
              Intervention numéro: {generation[randomGeneration].id}
            </DialogDescription>
          </DialogHeader>
          <div className=" flex flex-row px-10 justify-between gap-10">
            <div>
              <AudioPlayer audioName={generation[randomGeneration].radio1} />
            </div>
            <div className="grid gap-4 py-4">
              <ModaleMessages
                id={generation[randomGeneration].id}
                messages={generation[randomGeneration].messages}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
