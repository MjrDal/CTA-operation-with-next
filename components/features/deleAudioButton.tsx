"use client";

import { deletAudioAction } from "@/actions/deleteAudio";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export type DeleteButtonProps = {
  dataId: string;
  radio: string;
  audioName: string;
};

export const DeletAudioButton = (props: DeleteButtonProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onSubmit() {
    deletAudioAction(props.dataId, props.radio, props.audioName).then(
      (data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          window.location.reload();
        }
      }
    );
  }

  return (
    <Button
      className="mx-2"
      variant="destructive"
      onClick={() => {
        onSubmit();
      }}
    >
      <FaRegTrashAlt />
    </Button>
  );
};
