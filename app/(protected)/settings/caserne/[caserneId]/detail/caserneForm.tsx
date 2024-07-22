"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { caserneUpdateAction } from "./caserneAction";
import { CasernesUpdateSchema } from "./caserneUpdateSchema";

interface Props {
  casernes: {
    id: string;
    groupement: string;
    name: string;
    long: string;
    lat: string;
  };
}

export const FormCaserneAdd: React.FC<Props> = ({ casernes }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof CasernesUpdateSchema>>({
    resolver: zodResolver(CasernesUpdateSchema),
    defaultValues: {
      id: casernes.id,
      groupement: casernes.groupement,
      name: casernes.name,
      long: "",
      lat: "",
    },
  });

  function onSubmit(values: z.infer<typeof CasernesUpdateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    startTransition(() => {
      caserneUpdateAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    // router.push("/settings/caserne");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-5">
        <div>
          <h1>{casernes.name}</h1>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="name"
                  {...field}
                  disabled={true}
                  value={casernes.name}
                />
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
                <Input
                  placeholder="groupement"
                  {...field}
                  disabled={true}
                  value={casernes.groupement}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="long"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
              <FormControl>
                <Input
                  placeholder="longitude"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>latitude</FormLabel>
              <FormControl>
                <Input placeholder="latitude" {...field} disabled={isPending} />
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
