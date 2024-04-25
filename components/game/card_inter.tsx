"use client";

import { messageAction } from "@/actions/message";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { MessageSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  id: string;
  numero: string;
  denomination: string;
  commune: string;
  code: string;
  vehicules: {
    id: string;
    name: string;
  }[];
  note: string;
  messages: {
    id: string;
    message: string;
  }[];
  generation: {
    id: string;
    message: string;
  }[];
}

export const CardInter: React.FC<Props> = ({
  id,
  numero,
  denomination,
  commune,
  code,
  vehicules,
  note,
  messages,
  generation,
}) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      message: "",
      generation: [id],
    },
  });
  function onSubmit(values: z.infer<typeof MessageSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    startTransition(() => {
      messageAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    // router.push("/settings/caserne");
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card>
            <div className=" flex flex-row h-5 items-center space-x-4 text-sm">
              <div>{numero}</div>
              <Separator orientation="vertical" />
              <div>{denomination}</div>
              <Separator orientation="vertical" />
              <div>
                {commune} {code}
              </div>
            </div>
            <Separator className="" />
            <div>
              <h5>Vehicules en intervention</h5>
              <div>
                {vehicules.map((doc) => (
                  <div key={doc.id}>{doc.name}</div>
                ))}
              </div>
              <div>{}</div>
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Intervention: {numero}</DialogTitle>
            <DialogDescription>
              <div>
                <span>{commune}</span>
                <span>{code}</span>
                <span>{note}</span>
                <div>
                  {vehicules.map((doc) => (
                    <div key={doc.id}>{doc.name}</div>
                  ))}
                </div>
              </div>
              <div>
                <h2>Ajout de véhicules sur l&apos;intervention</h2>
              </div>
              <div>
                <div>
                  <h2>Messages:</h2>
                  <ScrollArea>
                    {messages.map((message) => (
                      <div key={message.id}>
                        {message.message}
                        <Separator className="" />
                      </div>
                    ))}
                  </ScrollArea>
                </div>
                <div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="message"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit">Ajouter un message</Button>
                    </form>
                  </Form>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
