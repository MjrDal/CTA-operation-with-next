"use client";

import { deletCaserneAction } from "@/app/(protected)/settings/caserne/[caserneId]/detail/caserneAction";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  data: {
    id: string;
    groupement: string;
    name: string;
  }[];
}

export const TableCaserne: React.FC<Props> = ({ data }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onSubmit(values: string) {
    console.log(values);
    deletCaserneAction(values).then((data) => {
      setError(data.error);
      setSuccess(data.success);
      if (data.success) {
        window.location.reload();
      }
    });
  }

  return (
    <section className="m-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Groupement</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Suppression</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((docs) => (
            <TableRow key={docs.id}>
              <TableCell className="font-medium">{docs.id}</TableCell>
              <TableCell>{docs.groupement}</TableCell>
              <TableCell>{docs.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    onSubmit(docs.id);
                  }}
                  type="submit"
                  id={docs.id}
                  variant="destructive"
                >
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
