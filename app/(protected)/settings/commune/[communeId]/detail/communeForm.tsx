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
import { communeUpdateAction } from "./communeAction";
import { CommunesUpdateSchema } from "./communeSchema";

interface Props {
  casernes: {
    id: string;
    name: string;
    groupement: string;
  }[];
  commune: {
    id: string;
    name: string;
    code: string;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
  };
}

export const FormCommuneAdd: React.FC<Props> = ({ casernes, commune }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof CommunesUpdateSchema>>({
    resolver: zodResolver(CommunesUpdateSchema),
    defaultValues: {
      id: commune.id,
      premier: "",
      deuxieme: "",
      troisieme: "",
      quatrieme: "",
    },
  });

  function onSubmit(values: z.infer<typeof CommunesUpdateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    startTransition(() => {
      communeUpdateAction(values).then((data) => {
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
          <h1>{commune.name}</h1>
        </div>
        <FormField
          control={form.control}
          name="premier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Premier appel</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="type" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    {casernes.map((docs) => (
                      <SelectItem key={docs.id} value={docs.name}>
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
          name="deuxieme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deuxième appel</FormLabel>
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
              <FormLabel>Troisième appel</FormLabel>
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
              <FormLabel>Quatrième appel</FormLabel>
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
