"use client";

import { generationAction } from "@/actions/generation";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

interface Props {
  intervention: {
    id: string;
    theme: string;
    denomination: string;
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

export const GenerationInter: React.FC<Props> = ({ intervention, commune }) => {
  const [randomInter, setRandomInter] = useState<number | undefined>();
  const [randomCommune, setRandomCommune] = useState<number | undefined>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

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
    setRandomInter(newRandomInter);
    setRandomCommune(newRandomCommune);
    const data = {
      numero: "0001",
      commune: commune[newRandomCommune].name,
      code: commune[newRandomCommune].code,
      premier: commune[newRandomCommune].premier,
      deuxieme: commune[newRandomCommune].deuxieme,
      troisieme: commune[newRandomCommune].troisieme,
      quatrieme: commune[newRandomCommune].quatrieme,
      theme: intervention[newRandomInter].theme,
      denomination: intervention[newRandomInter].denomination,
      dialogue: intervention[newRandomInter].dialogue,
      radio1: intervention[newRandomInter].radio1 || "",
      radio2: intervention[newRandomInter].radio2 || "",
      radio3: intervention[newRandomInter].radio3 || "",
      radio4: intervention[newRandomInter].radio4 || "",
      note: "c'est le nord",
    };
    console.log(data);
    startTransition(() => {
      generationAction(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <div>
      <div>
        <Button
          className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center bg-red-600"
          onClick={handleSubmit}
        >
          <BsFillTelephoneOutboundFill />
        </Button>
      </div>
    </div>
  );
};
