"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { typeAction } from "@/actions/type";
import { Input } from "@/components/ui/input";
import { TypeVehiculeSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { GeneralCard } from "./generalCard";

interface GroupementsProps {
  title: string;
}

export const TypeVehiculeForm = ({ title }: GroupementsProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof TypeVehiculeSchema>>({
    resolver: zodResolver(TypeVehiculeSchema),
    defaultValues: {
      type: "",
    },
  });
  function onSubmit(values: z.infer<typeof TypeVehiculeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      typeAction(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
    console.log(values);
  }
  return (
    <GeneralCard headerTitle="Type setting">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{title}</FormLabel>
                <FormControl>
                  <Input placeholder="type" {...field} disabled={isPending} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Ajouter</Button>
        </form>
      </Form>
    </GeneralCard>
  );
};
