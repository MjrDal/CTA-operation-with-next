"use client";

import { VehiculeSchema } from "@/app/(protected)/settings/vehicule/[vehiculeId]/detail/vehiculeSchema";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";

interface Props {
  casernes: {
    id: string;
    name: string;
    groupement: string;
  }[];
  type: {
    id: string;
    type: string;
  }[];
  theme: {
    id: string;
    theme: string;
  }[];
}

export const FormCommuneAdd: React.FC<Props> = ({ casernes, type, theme }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof VehiculeSchema>>({
    resolver: zodResolver(VehiculeSchema),
    defaultValues: {
      name: "",
      affectation: "",
      type: "",
      theme: [],
    },
  });

  function onSubmit(values: z.infer<typeof VehiculeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    // startTransition(() => {
    //   vehiculeAction(values).then((data) => {
    //     setError(data.error);
    //     setSuccess(data.success);
    //   });
    // });
    // router.push("/settings/caserne");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-5">
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
          name="premier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="type" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {type.map((docs) => (
                      <SelectItem key={docs.id} value={docs.id}>
                        {docs.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deuxieme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affectation</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Affectation" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {casernes.map((docs, index) => (
                      <SelectItem key={index} value={docs.name}>
                        {docs.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="troisieme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affectation</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Affectation" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {casernes.map((docs, index) => (
                      <SelectItem key={index} value={docs.name}>
                        {docs.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quatrieme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affectation</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Affectation" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {casernes.map((docs, index) => (
                      <SelectItem key={index} value={docs.name}>
                        {docs.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit">Ajouter</Button>
      </form>
    </Form>
  );
};
