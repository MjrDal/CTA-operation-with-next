"use client";

import RecAudio from "@/components/setting/audio/audio";
import { PageParams } from "@/components/types/next";
import { useSearchParams } from "next/navigation";

interface Props {}

const AudioPage = (
  props: PageParams<{
    audioId: string;
  }>
) => {
  const searchParams = useSearchParams();
  const extraParam = searchParams.get("extraParam");
  return (
    <div className=" flex flex-col justify-center items-center pt-8 gap-4">
      <h1>message enregistrer pour {extraParam}</h1>
      <p>Id de l&apos;intervension: {props.params.audioId} </p>
      <RecAudio id={props.params.audioId} radio={extraParam} />
    </div>
  );
};

export default AudioPage;
