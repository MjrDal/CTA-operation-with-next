"use client";

import { deletAction } from "@/actions/delete";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export type DeleteButtonProps = {
  dataId: string;
  data: string;
};

export const DeletButton = (props: DeleteButtonProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onSubmit(values: string) {
    console.log(values);
    deletAction(props.dataId, props.data).then((data) => {
      setError(data.error);
      setSuccess(data.success);
      if (data.success) {
        window.location.reload();
      }
    });
  }

  return (
    <Button
      variant="destructive"
      onClick={() => {
        onSubmit(props.dataId);
      }}
    >
      <FaRegTrashAlt />
    </Button>
  );
};
