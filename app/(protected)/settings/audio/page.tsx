"use server";

import RecAudio from "@/components/setting/audio/audio";

interface Props {}

const AudioPage: React.FC<Props> = async () => {
  return (
    <div className=" flex flex-row justify-center pt-8 gap-4">
      <RecAudio />
    </div>
  );
};

export default AudioPage;
