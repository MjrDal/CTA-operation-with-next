"use client";

import { caserneAction } from "@/app/(protected)/settings/caserne/[caserneId]/edit/caserneAction";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CaserneSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  data: {
    id: string;
    groupement: string;
  }[];
}

export const FormCaserneAdd: React.FC<Props> = ({ data }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof CaserneSchema>>({
    resolver: zodResolver(CaserneSchema),
    defaultValues: {
      name: "",
      groupement: "",
    },
  });

  function onSubmit(values: z.infer<typeof CaserneSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    startTransition(() => {
      caserneAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="groupement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Groupement</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Groupement" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {data.map((docs, index) => (
                      <SelectItem key={index} value={docs.groupement}>
                        {docs.groupement}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Ajouter</Button>
      </form>
    </Form>
  );
};
