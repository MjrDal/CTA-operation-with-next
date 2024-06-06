"use client";

import RecAudio from "@/components/setting/audio/audio";
import { useSearchParams } from "next/navigation";

interface Props {}

const AudioPage: React.FC<Props> = () => {
  const searchParams = useSearchParams();
  const extraParam = searchParams.get("extraParam");
  return (
    <div className=" flex flex-col justify-center items-center pt-8 gap-4">
      <h1>message enregistrer pour {extraParam}</h1>
      <RecAudio />
    </div>
  );
};

export default AudioPage;
